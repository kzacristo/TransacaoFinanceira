<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://socialify.git.ci/kzacristo/avaliacao_grupoplanmarketing/image?language=1&name=1&owner=1&stargazers=1&theme=Light" width="400" alt="Laravel Logo"></a></p>
<div>
<p># TransacaoFinanceiras</p>
<p>## projeto de transação financeira
   ## Requisitos
        - PHP $phpVersion ou superior
        - Composer
        - Laravel 11 ou superior
        - NPM 20 ou superior
        - Angular 18 ou superior
        
        ## Instalação
        
        1 - Clone o repositorio 
         ```
         https://github.com/kzacristo/Financialtransactions.git
         ```
        2 - Entre no diretorio do repositorio 
            cd path/Financialtransactions

        3 - Dentro do diretorio vamos primeiro no backend
            cd backend_api

            execute a instalação das dependencias do compose 
            ```
            composer install
            ```
        4. Copie o arquivo de ambiente e configure-o:

        ```
        cp .env.example .env
        php artisan key:generate
        ```

        5. Configure o banco de dados no arquivo .env exemplo:
        ```
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=financeiro
        DB_USERNAME=admin
        DB_PASSWORD=password
        ```

        6. Execute as migrações:
        ```
        php artisan migrate
        ```
        7. Execute a criação de algumas transações caso queira
        ```
        php artisan db:seed
        ```
        8. Entre na path do frontend
        ```
        cd ../frontend
        ```
        9. Instale as dependencias npm e o angular
        ```
        npm install -g @angular/cli
        npm install 
        ```
        10 . Após em um terminal na path do backend execute 
        ```
        cd backend_api
        php artisan serve
        ```
        11. Em outro terminal na path do frontend execute o serve do angular
        ```
        cd frontend
        np serve
        ```
</p>
