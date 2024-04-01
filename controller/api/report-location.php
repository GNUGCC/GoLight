<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $temple = false;
        $monitor = false;

        if (@$form['id']) {
            $temple = model('Temple')->get(@$form['id']);
        } else if (@$form['monitor_id']) {
            $monitor = model('Monitor')->get(@$form['monitor_id']);

            if ($monitor) {
                $temple = model('Temple')->get($monitor['temple_id']);
            }
        }

        if ($temple) {
            $member = $this->member();
            $records = model('LightRecord')->query(['member_id' => $member['id'], 'temple_id' => $temple['id'], 'disabled' => false]);

            if ($records) {
                $model = model('SearchRecord');
                $type = $monitor ? 2 : 1;
                $search = $model->find(['type' => $type, 'member_id' => $member['id'], 'temple_id' => $temple['id']]);

                if ($search) {
                    $search['monitor_id'] = $monitor ? $monitor['id'] : null;

                    $model->update($search);
                } else {
                    $model->insert([
                        'type' => $type,
                        'member_id' => $member['id'],
                        'temple_id' => $temple['id'],
                        'monitor_id' => $monitor ? $monitor['id'] : null,
                    ]);
                }
            }
        }

        return ['success' => true];
    }

};
