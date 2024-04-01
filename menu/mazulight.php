<?php //>

return [

    'temples' => ['icon' => 'fas fa-th-large', 'ranking' => 500, 'parent' => null],

        'temple' => ['icon' => 'fas fa-store-alt', 'ranking' => 100, 'parent' => 'temples', 'group' => true, 'tag' => 'query'],

            'temple/' => ['parent' => 'temple', 'tag' => 'query'],

            'temple/delete' => ['parent' => 'temple', 'tag' => 'delete'],

            'temple/insert' => ['parent' => 'temple', 'tag' => 'insert'],

            'temple/new' => ['parent' => 'temple', 'tag' => 'insert'],

            'temple/update' => ['parent' => 'temple', 'tag' => 'update'],

            'temple/monitor' => ['parent' => 'temple', 'pattern' => 'temple/{{ id }}/monitor', 'group' => true, 'tag' => 'query'],

                'temple/monitor/' => ['parent' => 'temple/monitor', 'tag' => 'query'],

                'temple/monitor/delete' => ['parent' => 'temple/monitor', 'tag' => 'delete'],

                'temple/monitor/insert' => ['parent' => 'temple/monitor', 'tag' => 'insert'],

                'temple/monitor/new' => ['parent' => 'temple/monitor', 'tag' => 'insert'],

                'temple/monitor/update' => ['parent' => 'temple/monitor', 'tag' => 'update'],

                'temple/monitor/bluetooth' => ['parent' => 'temple/monitor', 'pattern' => 'temple/monitor/{{ id }}/bluetooth', 'group' => true, 'tag' => 'query'],

                    'temple/monitor/bluetooth/' => ['parent' => 'temple/monitor/bluetooth', 'tag' => 'query'],

                    'temple/monitor/bluetooth/delete' => ['parent' => 'temple/monitor/bluetooth', 'tag' => 'delete'],

                    'temple/monitor/bluetooth/insert' => ['parent' => 'temple/monitor/bluetooth', 'tag' => 'insert'],

                    'temple/monitor/bluetooth/new' => ['parent' => 'temple/monitor/bluetooth', 'tag' => 'insert'],

                    'temple/monitor/bluetooth/update' => ['parent' => 'temple/monitor/bluetooth', 'tag' => 'update'],

                'temple/monitor/video' => ['parent' => 'temple/monitor', 'pattern' => 'temple/monitor/{{ id }}/video', 'group' => true, 'tag' => 'query'],

                    'temple/monitor/video/' => ['parent' => 'temple/monitor/video', 'tag' => 'query'],

                    'temple/monitor/video/delete' => ['parent' => 'temple/monitor/video', 'tag' => 'delete'],

                    'temple/monitor/video/insert' => ['parent' => 'temple/monitor/video', 'tag' => 'insert'],

                    'temple/monitor/video/new' => ['parent' => 'temple/monitor/video', 'tag' => 'insert'],

                    'temple/monitor/video/update' => ['parent' => 'temple/monitor/video', 'tag' => 'update'],

                'temple/monitor/marquee' => ['parent' => 'temple/monitor', 'pattern' => 'temple/monitor/{{ id }}/marquee', 'group' => true, 'tag' => 'query'],

                    'temple/monitor/marquee/' => ['parent' => 'temple/monitor/marquee', 'tag' => 'query'],

                    'temple/monitor/marquee/delete' => ['parent' => 'temple/monitor/marquee', 'tag' => 'delete'],

                    'temple/monitor/marquee/insert' => ['parent' => 'temple/monitor/marquee', 'tag' => 'insert'],

                    'temple/monitor/marquee/new' => ['parent' => 'temple/monitor/marquee', 'tag' => 'insert'],

                    'temple/monitor/marquee/update' => ['parent' => 'temple/monitor/marquee', 'tag' => 'update'],

            'temple/light' => ['parent' => 'temple', 'pattern' => 'temple/{{ id }}/light', 'group' => true, 'tag' => 'query'],

                'temple/light/' => ['parent' => 'temple/light', 'tag' => 'query'],

                'temple/light/delete' => ['parent' => 'temple/light', 'tag' => 'delete'],

                'temple/light/insert' => ['parent' => 'temple/light', 'tag' => 'insert'],

                'temple/light/new' => ['parent' => 'temple/light', 'tag' => 'insert'],

                'temple/light/update' => ['parent' => 'temple/light', 'tag' => 'update'],

            'temple/news' => ['parent' => 'temple', 'pattern' => 'temple/{{ id }}/news', 'group' => true, 'tag' => 'query'],

                'temple/news/' => ['parent' => 'temple/news', 'tag' => 'query'],

                'temple/news/delete' => ['parent' => 'temple/news', 'tag' => 'delete'],

                'temple/news/insert' => ['parent' => 'temple/news', 'tag' => 'insert'],

                'temple/news/new' => ['parent' => 'temple/news', 'tag' => 'insert'],

                'temple/news/update' => ['parent' => 'temple/news', 'tag' => 'update'],

            'temple/attraction' => ['parent' => 'temple', 'pattern' => 'temple/{{ id }}/attraction', 'group' => true, 'tag' => 'query'],

                'temple/attraction/' => ['parent' => 'temple/attraction', 'tag' => 'query'],

                'temple/attraction/delete' => ['parent' => 'temple/attraction', 'tag' => 'delete'],

                'temple/attraction/insert' => ['parent' => 'temple/attraction', 'tag' => 'insert'],

                'temple/attraction/new' => ['parent' => 'temple/attraction', 'tag' => 'insert'],

                'temple/attraction/update' => ['parent' => 'temple/attraction', 'tag' => 'update'],

    // members

        // member

            'member/family' => ['parent' => 'member', 'pattern' => 'member/{{ id }}/family', 'group' => true, 'tag' => 'query'],

                'member/family/' => ['parent' => 'member/family', 'tag' => 'query'],

                'member/family/delete' => ['parent' => 'member/family', 'tag' => 'delete'],

                'member/family/insert' => ['parent' => 'member/family', 'tag' => 'insert'],

                'member/family/new' => ['parent' => 'member/family', 'tag' => 'insert'],

                'member/family/update' => ['parent' => 'member/family', 'tag' => 'update'],

        'member/light' => ['parent' => 'member', 'pattern' => 'member/{{ id }}/light', 'group' => true, 'tag' => 'query'],

            'member/light/' => ['parent' => 'member/light', 'tag' => 'query'],

            'member/light/delete' => ['parent' => 'member/light', 'tag' => 'delete'],

            'member/light/insert' => ['parent' => 'member/light', 'tag' => 'insert'],

            'member/light/new' => ['parent' => 'member/light', 'tag' => 'insert'],

            'member/light/update' => ['parent' => 'member/light', 'tag' => 'update'],

    // orders

        // order

            'order/item' => ['parent' => 'order', 'pattern' => 'order/{{ id }}/item', 'group' => true, 'tag' => 'query'],

            'order/coupon' => ['parent' => 'order', 'pattern' => 'order/{{ id }}/coupon', 'group' => true, 'tag' => 'query'],

        'coupon' => ['icon' => 'fas fa-ticket-alt', 'ranking' => 300, 'parent' => 'orders', 'group' => true, 'tag' => 'query'],

            'coupon/' => ['parent' => 'coupon', 'tag' => 'query'],

            'coupon/delete' => ['parent' => 'coupon', 'tag' => 'delete'],

            'coupon/insert' => ['parent' => 'coupon', 'tag' => 'insert'],

            'coupon/new' => ['parent' => 'coupon', 'tag' => 'insert'],

            'coupon/update' => ['parent' => 'coupon', 'tag' => 'update'],

];
