# Api de Musica

El siguiente proyecto es un API que extrae informacion de una api externa de iTunes, la cual nos permite consultar canciones de un artista o banda que se le pase como parametros ademas de guardar alguna de ellas como favorita de manera temporal 
## Dependencias

 - Nodejs 12 o superior
 - Npm 

## Instrucciones 

1.  Antes que todo es necesario clonar el repositorio en el directorio que desee
 2.  A continuación es importante instalar las dependencias del proyecto, para poder hacerlo se debe ejecutar el siguiente comando en la terminal: **npm i -d**. Tomar en cuenta que la terminal de comandos debe estar ubicada en el directorio donde fue clonado el proyecto
 3. Se debe hacer una copia del archivo **.env.example** que se encuentra en la raíz del proyecto y renombrarlo como **.env**, el mismo tiene las variables de entorno por defecto y en caso de ser necesario pueden cambiarse
 4. Por último se debe ejecutar el siguiente comando en el terminal: **npm run dev** el cual compilara y levantara la aplicación en localhost en un puerto específico, el puerto por defecto sera 3000 
