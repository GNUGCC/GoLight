<?php //>

use matrix\web\backend\Validator;
use matrix\web\backend\Wrapper;

return new class() extends matrix\web\MemberController {

    use mazulight\Api;
    use Validator, Wrapper;

    protected function validate($form) {
        $errors = [];

        foreach (['name', 'calendar_type', 'birthday', 'image'] as $name) {
            if (!strlen(@$form[$name])) {
                $errors[] = ['name' => $name, 'type' => 'required'];
            }
        }

        if (!$errors) {
            if (!i18n("options/calendar-type.{$form['calendar_type']}", '')) {
                $errors[] = ['name' => 'calendar_type', 'type' => 'not-found'];
            }

            $options = ['validation' => 'date', 'pattern' => cfg('system.date')];

            if (validate($form['birthday'], $options) !== true) {
                $errors[] = ['name' => 'birthday', 'type' => 'regex'];
            }
        }

        return $errors;
    }

    protected function wrapInput($column, $form, $name) {
        if (key_exists($name, $form)) {
            if ($column->attachment()) {
                $form = $this->wrapFile($form, $name, $column->privilege());
            } else if ($column->multiple()) {
                if (is_array($form[$name])) {
                    $form[$name] = implode(',', $form[$name]);
                }
            }
        }

        return $form;
    }

    private function wrapModel($form) {
        $table = table('Family');
        foreach ($table->getColumns(['name', 'calendar_type', 'birthday', 'image']) as $name => $column) {
            if ($column->multilingual()) {
                foreach (LANGUAGES as $language) {
                    $form = $this->wrapInput($column, $form, "{$name}__{$language}");
                }
            } else {
                $form = $this->wrapInput($column, $form, $name);
            }
        }

        return $form;
    }

    protected function wrap() {
        return $this->wrapModel(parent::wrap());
    }

    protected function process($form) {
        $model = model('Family');

        if (@$form['id']) {
            $family = $model->find(['id' => $form['id'], 'member_id' => MEMBER_ID]);

            if (!$family) {
                return ['error' => 'error.data-not-found'];
            }

            $family['name'] = $form['name'];
            $family['calendar_type'] = $form['calendar_type'];
            $family['birthday'] = $form['birthday'];
            $family['image'] = $form['image'];

            if (!$model->update($family)) {
                return ['error' => 'error.update-failed'];
            }
        } else {
            $family = $model->insert([
                'member_id' => MEMBER_ID,
                'name' => $form['name'],
                'calendar_type' => $form['calendar_type'],
                'birthday' => $form['birthday'],
                'image' => $form['image'],
            ]);

            if (!$family) {
                return ['error' => 'error.insert-failed'];
            }
        }

        return ['success' => true];
    }

};

