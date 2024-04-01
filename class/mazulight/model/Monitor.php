<?php //>

namespace mazulight\model;

use matrix\db\Model;

class Monitor extends Model {

    protected function before($type, $prev, $curr) {
        if ($type === self::INSERT || $type === self::UPDATE) {
            $file = model('File')->find(['path' => $curr['bg_image']]);

            $curr['bg_image_hash'] = $file ? $file['hash'] : null;
        }

        return $curr;
    }

}
