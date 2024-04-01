<?php //>

use matrix\utility\Func;

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $lng = floatval(@$form['longitude']); //經度
        $lat = floatval(@$form['latitude']); //緯度

        $table = table('Temple');
        $conditions = [];

        if (@$form['n']) {
            $conditions[] = $table->title->like("%{$form['n']}%");
        }

        $list = [];

        foreach ($table->model()->query($conditions) as $temple) {
            $temple['distance'] = $this->getDistance($lng, $lat, $temple['longitude'], $temple['latitude']);

            $list[] = $temple;
        }

        usort($list, function ($a, $b) {
            return $a['distance'] <=> $b['distance'];
        });

        return [
            'success' => true,
            'list' => $list,
        ];
    }

    private function getDistance($lng1, $lat1, $lng2, $lat2) {
        if (!$lng1 || !$lat1 || !$lng2 || !$lat2) {
            return PHP_FLOAT_MAX;
        }

        return Func::get_distance($lng1, $lat1, $lng2, $lat2);
    }

};
