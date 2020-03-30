# 0. Estructura:
    El src contiene el ejemplo por defecto

# 1. Instalación:

    - Nodejs actualizado 
    - Crear utilizando librerias
    npx create-react-app my-app

    * Si, te da error de parsing JSON, luego volver a probar: 
    npm install -g yarn

    - Probar con:
    sudo yarn start

# 2. Añadiendo ED-Team Libraries:

    - Para ciertos codigo de ejemploe
    yarn add ed-grid --dev

    - Para los css
    yarn add edteam-style-guides --dev

    - Para Sass
    yarn add node-sass

    -- Ahora crear (para importar las librerias anteriores):
    src/stylesstyles.scss


# 3. A tener en cuenta

    1. Toda etiqueta debe cerrarse
    2. Los componentes deben devolver un solo elemento padre
    3. Apoyarse de los Fragment cuando necesito devolver 2 elemntos
        - Fragment => <> hijos </> 
    4. class => className
    5. for => htmlFor
    