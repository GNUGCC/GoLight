<?php //>

return new class() extends matrix\web\Controller {

    public function available() {
        if ($this->method() === 'GET') {
            $pattern = preg_quote($this->name(), '/');
            return preg_match("/^{$pattern}\/[\w-]+$/", $this->path());
        }
        return false;
    }

    public function init() {
        $this->view('order-payment.twig');
    }

    protected function process($form) {
        $token = $this->args()[0];
        $file = APP_DATA . 'order-payment/' . $token;

        if ($file !== realpath($file) || !is_file($file)) {
            return;
        }

        $order = json_decode(file_get_contents($file), true);

        if (!$order || !@$order['payment_request']) {
            return;
        }

        unlink($file);

        return [
            'success' => true,
            'parameters' => json_decode($order['payment_request'], true),
        ];
    }

};
