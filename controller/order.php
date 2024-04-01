<?php //>

return new class() extends matrix\web\Controller {

    public function available() {
        if ($this->method() === 'GET') {
            $pattern = preg_quote($this->name(), '/');

            return preg_match("/^{$pattern}\/[\d]+$/", $this->path());
        }

        return false;
    }

    public function init() {
        $this->view('empty.php');
    }

};
