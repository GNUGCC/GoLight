

-- 會員

DROP TABLE base_member;

CREATE TABLE base_member (
    gender        INTEGER NOT NULL,
    calendar_type INTEGER NOT NULL,
    birthday      DATE    NOT NULL,
    address       TEXT        NULL
) INHERITS (common_member);



-- 親友

CREATE TABLE custom_family (
    id            INTEGER NOT NULL PRIMARY KEY,
    member_id     INTEGER NOT NULL,
    name          TEXT    NOT NULL,
    calendar_type INTEGER NOT NULL,
    birthday      DATE    NOT NULL
);



-- 宮廟

CREATE TABLE custom_temple (
    id           INTEGER          NOT NULL PRIMARY KEY,
    title        TEXT             NOT NULL,
    image        TEXT             NOT NULL,
    phone        TEXT                 NULL,
    address      TEXT                 NULL,
    website_url  TEXT                 NULL, -- 宮廟連結網址
    store_url    TEXT                 NULL, -- 禮物小舖網址
    video_url    TEXT                 NULL, -- 多媒體影片網址
    longitude    DOUBLE PRECISION     NULL, -- 經度
    latitude     DOUBLE PRECISION     NULL, -- 緯度
    enable_time  TIMESTAMP            NULL,
    disable_time TIMESTAMP            NULL
);



-- 展示機

CREATE TABLE custom_monitor (
    id               INTEGER NOT NULL PRIMARY KEY,
    temple_id        INTEGER NOT NULL,
    name             TEXT    NOT NULL,
    token            TEXT    NOT NULL,
    lights           TEXT        NULL,
    -- 光明燈
    bg_image         TEXT        NULL,
    bg_image_hash    TEXT        NULL,
    font_size        INTEGER     NULL,
    vertical         INTEGER     NULL,
    horizontal       INTEGER     NULL,
    duraing          INTEGER     NULL,
    -- 文字跑馬燈
    marquee_height   INTEGER     NULL,
    marquee_bg_color TEXT        NULL,
    marquee_color    TEXT        NULL,
    marquee_size     INTEGER     NULL,
    marquee_duraing  INTEGER     NULL,
    -- 影片
    video_height     INTEGER     NULL
);



-- 藍芽設備

CREATE TABLE custom_bluetooth (
    id         INTEGER NOT NULL PRIMARY KEY,
    monitor_id INTEGER NOT NULL,
    token      TEXT    NOT NULL
);



-- 光明燈種

CREATE TABLE custom_light (
    id           INTEGER   NOT NULL PRIMARY KEY,
    temple_id    INTEGER   NOT NULL,
    title        TEXT      NOT NULL,
    image        TEXT      NOT NULL,
    image_hash   TEXT      NOT NULL,
    icon         TEXT      NOT NULL,
    icon2        TEXT      NOT NULL,
    introduction TEXT      NOT NULL,
    price        INTEGER   NOT NULL,
    enable_time  TIMESTAMP     NULL,
    disable_time TIMESTAMP     NULL,
    ranking      INTEGER   NOT NULL
);



-- 最新消息

CREATE TABLE custom_news (
    id           INTEGER   NOT NULL PRIMARY KEY,
    temple_id    INTEGER   NOT NULL,
    title        TEXT          NULL,
    image        TEXT      NOT NULL,
    the_date     DATE          NULL,
    content      TEXT          NULL,
    enable_time  TIMESTAMP     NULL,
    disable_time TIMESTAMP     NULL
);



-- 旅遊景點

CREATE TABLE custom_attraction (
    id           INTEGER   NOT NULL PRIMARY KEY,
    temple_id    INTEGER   NOT NULL,
    title        TEXT          NULL,
    image        TEXT      NOT NULL,
    content      TEXT          NULL,
    url          TEXT          NULL,
    enable_time  TIMESTAMP     NULL,
    disable_time TIMESTAMP     NULL,
    ranking      INTEGER   NOT NULL
);



-- 影片

CREATE TABLE custom_video (
    id           INTEGER   NOT NULL PRIMARY KEY,
    monitor_id   INTEGER   NOT NULL,
    title        TEXT          NULL,
    file         TEXT      NOT NULL,
    file_hash    TEXT      NOT NULL,
    enable_time  TIMESTAMP     NULL,
    disable_time TIMESTAMP     NULL
);



-- 跑馬燈

CREATE TABLE custom_marquee (
    id           INTEGER   NOT NULL PRIMARY KEY,
    monitor_id   INTEGER   NOT NULL,
    title        TEXT          NULL,
    content      TEXT      NOT NULL,
    enable_time  TIMESTAMP     NULL,
    disable_time TIMESTAMP     NULL
);



-- 折價券

CREATE TABLE custom_coupon (
    id          INTEGER          NOT NULL PRIMARY KEY,
    code        TEXT             NOT NULL UNIQUE,
    discount    DOUBLE PRECISION NOT NULL,
    expire_date DATE                 NULL,
    use_time    TIMESTAMP            NULL
);



-- 訂單

DROP TABLE base_order;

CREATE TABLE base_order (
    temple_id  INTEGER          NOT NULL,
    discount   DOUBLE PRECISION NOT NULL,
    net_amount DOUBLE PRECISION NOT NULL
) INHERITS (common_order);



-- 訂單項目

CREATE TABLE custom_order_item (
    id            INTEGER NOT NULL PRIMARY KEY,
    order_id      INTEGER NOT NULL,
    light_id      INTEGER NOT NULL,
    name          TEXT    NOT NULL,
    calendar_type INTEGER     NULL,
    birthday      DATE        NULL,
    phone         TEXT        NULL,
    address       TEXT        NULL,
    light_title   TEXT    NOT NULL,
    light_image   TEXT    NOT NULL,
    light_icon    TEXT    NOT NULL,
    light_price   INTEGER NOT NULL,
    snapshot      TEXT        NULL
);



-- 訂單折扣

CREATE TABLE custom_order_coupon (
    id        INTEGER NOT NULL PRIMARY KEY,
    order_id  INTEGER NOT NULL,
    coupon_id INTEGER NOT NULL
);



-- 點燈紀錄

CREATE TABLE custom_light_record (
    id            INTEGER NOT NULL PRIMARY KEY,
    member_id     INTEGER NOT NULL,
    temple_id     INTEGER NOT NULL,
    light_id      INTEGER     NULL,
    order_id      INTEGER     NULL,
    item_id       INTEGER     NULL,
    year          INTEGER NOT NULL,
    title         TEXT    NOT NULL,
    image         TEXT    NOT NULL,
    icon          TEXT    NOT NULL,
    name          TEXT    NOT NULL,
    calendar_type INTEGER     NULL,
    birthday      DATE        NULL,
    phone         TEXT        NULL,
    address       TEXT        NULL,
    disabled      BOOLEAN NOT NULL
);



-- 尋燈紀錄

CREATE TABLE custom_search_record (
    id          INTEGER   NOT NULL PRIMARY KEY,
    type        INTEGER   NOT NULL, -- 1:gps, 2:ble, 3:button
    member_id   INTEGER   NOT NULL,
    temple_id   INTEGER   NOT NULL,
    monitor_id  INTEGER       NULL,
    modify_time TIMESTAMP NOT NULL
);


