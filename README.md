<div>
<p align="left"># TransacaoFinanceiras</p>
</div>
<br clear="both">

<div>
<p align="left">## projeto de transação financeira
   ## Requisitos
        - PHP $phpVersion ou superior
        - Composer
        - Laravel 11 ou superior
        - NPM 20 ou superior
        - Angular 18 ou superior
</p>
</div>
<div>
   <p align="left">## Instalação</p>
 <h4 align="left">
        1 - Clone o repositorio 
    
         
         https://github.com/kzacristo/Financialtransactions.git
         
 </h4>
  <h4 align="left">
        2 - Entre no diretorio do repositorio 
            cd path/Financialtransactions
  </h4>
</div>
<div> 
 <h4 align="left">
        3 - Dentro do diretorio vamos primeiro no backend
            cd backend_api
            execute a instalação das dependencias do compose 
            
            
            composer install
            
</h4>   
<h4 align="left">
        4. Copie o arquivo de ambiente e configure-o:
       
       
        cp .env.example .env
        php artisan key:generate
       
</h4>
        
        
<p align="left">
        5. Configure o banco de dados no arquivo .env exemplo:
   
        
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=financeiro
        DB_USERNAME=admin
        DB_PASSWORD=password
        
</p>       
<p align="left">
        6. Execute as migrações:
        
        
        php artisan migrate
        
</p>
<p align="left">
        7. Execute a criação de algumas transações caso queira
       
        php artisan db:seed
   
</p>
<p align="left">
        8. Entre na path do frontend

        
        cd ../frontend
        
</p>
<p align="left">
        9. Instale as dependencias npm e o angular
        
        npm install -g @angular/cli
        npm install 
        
</p>
<p align="left">
        10 . Após em um terminal na path do backend execute 
        
        cd backend_api
        php artisan serve
        
</p>
<p align="left">
        11. Em outro terminal na path do frontend execute o serve do angular
        
        cd frontend
        np serve
        
</p>
</div>
</h4>
