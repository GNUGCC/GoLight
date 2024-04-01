<?php //>

use matrix\utility\Func;

return new class() extends matrix\web\Controller {

    use matrix\web\MemberAware, mazulight\Api;

    protected function process($form) {
        $member = $this->member();

        if (!$member) {
            return ['success' => true, 'message' => i18n('lang.not-login')];
        }

        $temple = model('Temple')->get(@$form['id']);

        if (!$temple) {
            return ['error' => 'error.data-not-found'];
        }

        $records = model('LightRecord')->query(['member_id' => $member['id'], 'temple_id' => $temple['id'], 'disabled' => false]);

        if (!$records) {
            return ['success' => true, 'message' => i18n('lang.no-light-record')];
        }

        $lng = floatval(@$form['longitude']); //經度
        $lat = floatval(@$form['latitude']); //緯度

        if ($lng && $lng && $temple['longitude'] && $temple['latitude']) {
            $distance = Func::get_distance($lng, $lat, $temple['longitude'], $temple['latitude']);

            if ($distance > 3) {
                return ['error' => 'lang.invalid-distance'];
            }
        }

        $model = model('SearchRecord');
        $search = $model->find(['type' => 3, 'member_id' => $member['id'], 'temple_id' => $temple['id']]);

        if ($search) {
            $model->update($search);
        } else {
            $model->insert([
                'type' => 3,
                'member_id' => $member['id'],
                'temple_id' => $temple['id'],
            ]);
        }

        return ['success' => true, 'message' => i18n('lang.light-record-found')];
    }

};
