<?php //>

return new class('Monitor') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('bluetooth_count', 'bluetooth.count');
        $table->add('video_count', 'video.count');
        $table->add('marquee_count', 'marquee.count');

        $this->columns([
            'name',
            'token',
            'lights',
            'bluetooth_count',
            'video_count',
            'marquee_count',
        ]);
    }

};
