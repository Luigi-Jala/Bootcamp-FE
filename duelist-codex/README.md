# Duelist Codex — Challenge 2: Navegación y Datos Resilientes

Evolución de **Duelist Codex**, una aplicación Angular (versión 21) para explorar cartas de Yu-Gi-Oh!, guardar tu colección de cartas favoritas y navegar el detalle con rutas avanzadas, directivas, pipes e interceptores HTTP.

---

## 🚀 Cómo ejecutar el proyecto

```bash
npm install
npm start
```

La aplicación estará disponible en:

```text
http://localhost:4200/
```

---

## 🌐 API y Endpoints Utilizados

Se consume la API pública de **YGOPRODeck**:

* **Endpoint Principal:**
  ```text
  GET https://db.ygoprodeck.com/api/v7/cardinfo.php
  ```
* **Estrategia de uso de parámetros/API:**
  Se fetchean todas las cartas en una única llamada asíncrona mediante `rxResource()` en `CardStoreService`. Las búsquedas, filtros y paginación se procesan localmente en el frontend para asegurar una respuesta instantánea y resiliente.

---

## 🗺️ Mapa de Rutas de la Aplicación

La aplicación utiliza el módulo de enrutamiento de Angular con soporte para **Child Routing**, **Guards** y **Resolvers**:

```text
/catalog                       ➜ Vista principal del catálogo (búsqueda y paginación)
/card/:id                      ➜ Vista detallada de una carta (Pre-cargada con Resolver)
  ├── /card/:id/effect         ➜ Sub-vista: Efecto y descripción completa
  ├── /card/:id/stats          ➜ Sub-vista: Estadísticas de combate (ATK, DEF, Nivel)
  └── /card/:id/prices         ➜ Sub-vista: Precios de mercado TCG (Formateados con Pipe)
/collection                    ➜ Ruta protegida (Guard): Muestra la colección de favoritos
/                              ➜ Redirección por defecto a /catalog
**                             ➜ Redirección comodín (404) a /catalog
```

---

## 📋 Historias de Usuario (Challenge 2)

### HU-01 — Navegar la app por URL
* **Descripción:** El catálogo y el detalle de cada carta tienen URLs propias navegables y compartibles. Al refrescar la página o navegar hacia atrás/adelante en el navegador, no se pierde el estado ni los filtros ingresados.
* **Componentes / Elementos:** `app.routes.ts`, `RouterOutlet`, `RouterLink`, `CardStoreService`.

### HU-02 — Explorar secciones del detalle como sub-vistas (Child Routing)
* **Descripción:** El detalle de una carta incluye sub-secciones navegables mediante rutas hijas (`effect`, `stats`, `prices`) usando `routerLink` y `<router-outlet>` sin recargar la página.
* **Componentes / Elementos:** `CardDetailPageComponent`, `CardEffectComponent`, `CardStatsComponent`, `CardPricesComponent`.

### HU-03 — Acceder a mi colección personal (Guard)
* **Descripción:** Sección exclusiva "Mi Colección" protegida por una condición del estado (requiere tener al menos 1 carta en favoritos).
* **Componentes / Elementos:** `CollectionService`, `favoritesGuard` (`CanActivateFn`), `CollectionPageComponent`.

### HU-04 — Abrir el detalle de una carta (Resolver)
* **Descripción:** Asegura que los datos de la carta estén listos antes de activar la ruta del detalle. Si la carta no existe o la petición falla, redirige limpiamente al catálogo.
* **Componentes / Elementos:** `cardDetailResolver` (`ResolveFn<Card | null>`), `provideRouter(routes, withComponentInputBinding())`.

### HU-05 — Identificar cartas destacadas de un vistazo (Directiva Personalizada)
* **Descripción:** Directiva de atributo reutilizable (`[appHighlightCard]`) que resalta visualmente con un resplandor y borde dorado las cartas con `ATK >= 2500`, `DEF >= 2500` o marcadas como favoritas.
* **Componentes / Elementos:** `HighlightCardDirective`, `CardItemComponent`.

---

## 🛠️ Expectativas Técnicas Implementadas

* **Angular Router & Child Routing:** Rutas padre e hijas con `RouterOutlet` y `RouterLinkActive`.
* **Guard Funcional:** `favoritesGuard` para proteger `/collection`.
* **Resolver Funcional:** `cardDetailResolver` para precargar datos de la carta.
* **Directiva Personalizada:** `HighlightCardDirective` aplicable sobre elementos de carta.
* **Pipe Personalizado:** `YgoPriceFormatterPipe` (`ygoprice`) para dar formato a los precios de mercado.
* **HttpClient Interceptor:** `httpErrorInterceptor` para manejo centralizado de errores de red en `app.config.ts`.
* **Manejo Reactivo (`rxResource`):** Integración de peticiones asíncronas con Signals de Angular 21.
