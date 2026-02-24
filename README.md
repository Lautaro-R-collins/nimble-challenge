# Desafío Técnico - Nimble Gravity

## Descripción
Este repositorio contiene la resolución del desafío técnico para el puesto de Fullstack Developer en Nimble Gravity

Demo: https://nimble-challenge-self.vercel.app

## Stack Tecnológico
El proyecto fue desarrollado utilizando las siguientes tecnologías:
- **React 19**
- **Vite**
- **Tailwind CSS v4**

## Estructura del Proyecto
El código fuente ha sido organizado de manera modular para asegurar mantenibilidad y escalabilidad:

- `src/services/api.js`: Servicio centralizado para interacciones con la API, que incluye un manejo robusto de errores y gestión de peticiones.
- `src/components/common/`: Componentes de interfaz reutilizables como indicadores de Carga (Loading) y Error.
- `src/components/layout/`: Componentes estructurales de la aplicación, como el Encabezado (Header) y el Pie de página (Footer).
- `src/components/jobs/`: Componentes de lógica de negocio relacionados con el listado de empleos y postulaciones.
- `.env`: Configuración de variables de entorno para la gestión de la URL de la API.

## Configuración e Instalación

### Prerrequisitos
- Node.js (v18 o superior recomendado)
- npm o yarn

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Lautaro-R-collins/nimble-challenge.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd nimble-challenge
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```

### Ejecutar el Proyecto
Para iniciar el servidor de desarrollo localmente:
```bash
npm run dev
```

Para generar la versión de producción:
```bash
npm run build
```

## Características
- Obtención dinámica de datos del candidato y listado de empleos.
- Manejo robusto de errores para respuestas de API (tanto JSON como no-JSON).
- Configuración basada en variables de entorno.
- Arquitectura de componentes simplificada y modular.
