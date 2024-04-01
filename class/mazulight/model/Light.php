<?php //>

namespace mazulight\model;

use matrix\db\Model;

class Light extends Model {

    protected function before($type, $prev, $curr) {
        if ($type === self::INSERT || $type === self::UPDATE) {
            $file = model('File')->find(['path' => $curr['image']]);

            $curr['image_hash'] = $file ? $file['hash'] : null;
        }

        return $curr;
    }

}
