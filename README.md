# Jobs Dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/028825ef-0a5b-46b1-a22e-3e6a0705bf42/deploy-status)](https://app.netlify.com/sites/jobs-dev-web/deploys)

<!-- ![template-react]() -->

**JobsDev** es el destino número uno para buscar y listar increibles ofertas de trabajo remoto en programación. Los datos se obtienen desde la siguiente API: [https://github.com/EdixonAlberto/api-jobs-dev](https://github.com/EdixonAlberto/api-jobs-dev)

## Inicio

Instalar las depedencias usando `yarn` y luego ejecutar el proyecto en modo desarrollo con el comando `dev`

```sh
yarn install
yarn dev
```

## Environments

Copiar la [plantilla](./.env.template) con las variables de entorno en la raíz del proyecto y documentar el tipado en el
archivo [env.d.ts](./src/@types/env.d.ts)

```sh
cp .env.template .env
```

## Vistas por Defecto

- `Auth`: Componente de react que valida si el usuarios ha iniciado sesion, ademas de verificar el nivel de acceso a la
  pagina por medio del rol (si lo posee).
- `Login`: Vista para que el usuario inicie sesion.
- `Jobs`: Vista de inicio.
- `NotFound`: Vista mostrada cuando no se encuentra el recurso solicitado.

## Lista de Comandos

```sh
# Ejecutar en modo desarrollo
yarn dev

# Compilar app a producción
yarn build

# Ejecutar en modo producción
yarn preview

# Formatear todo el código usando prettier
yarn format
```

## Tecnologías Utilizadas

- Vite v4
- React v18
- React-Router v6
- Sass v1.58
- TypeScript v4.9

## Licencia

[MIT](https://github.com/EdixonAlberto/template-react/blob/main/LICENSE) &copy; Edixon Piña
