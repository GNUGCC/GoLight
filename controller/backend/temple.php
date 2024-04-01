<?php //>

return new class('Temple') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('monitor_count', 'monitor.count');
        $table->add('light_count', 'light.count');
        $table->add('news_count', 'news.count');
        $table->add('attraction_count', 'attraction.count');

        $this->columns([
            'title',
            'phone',
            'address',
            'monitor_count',
            'light_count',
            'news_count',
            'attraction_count',
        ]);
    }

};
