<?php //>

namespace mazulight\model;

use matrix\db\Model;

class Video extends Model {

    protected function before($type, $prev, $curr) {
        if ($type === self::INSERT || $type === self::UPDATE) {
            $file = model('File')->find(['path' => $curr['file']]);

            $curr['file_hash'] = $file ? $file['hash'] : null;
        }

        return $curr;
    }

}
