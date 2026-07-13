# Duelist Codex

Primera version de **Duelist Codex**, una aplicacion Angular para explorar cartas de Yu-Gi-Oh!, buscar por nombre, navegar resultados por paginas y ver el detalle de una carta seleccionada.

## Como ejecutar

```bash
npm install
npm start
```

La aplicacion queda disponible en:

```text
http://localhost:4200/
```

## API usada

Se usa un solo endpoint de YGOPRODeck:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php
```

La aplicacion carga el catalogo una vez y luego filtra por nombre en el frontend. Se eligio esto porque el challenge indica que los filtros o modificaciones de datos deben hacerse del lado del frontend.

## Historias de usuario

### HU-01 - Ver catalogo de cartas

Componentes:

- `CatalogPageComponent`
- `CardGridComponent`
- Controles simples de paginacion en `CatalogPageComponent`
- `CardItemComponent`
- `CardApiService`
- `CardStoreService`

Expectativas tecnicas usadas:

- Componentes standalone.
- Servicio dedicado para acceso a datos.
- `ngOnInit` para cargar el catalogo al entrar.
- `@if`, `@for` y `@empty` para estados de carga, error, vacio y listado.
- Interpolacion y property binding para mostrar nombre, tipo e imagen.

Justificacion: la pagina coordina el flujo, el servicio llama la API, el store guarda el estado y los componentes visuales solo muestran datos.

### HU-02 - Buscar cartas por nombre

Componentes:

- `SearchBarComponent`
- `CatalogPageComponent`
- `CardStoreService`
- `CardGridComponent`

Expectativas tecnicas usadas:

- Two-way binding con `[(ngModel)]`.
- Event binding con `(ngModelChange)`.
- Output para comunicar el termino de busqueda.
- `ngAfterViewInit` para enfocar el input al cargar.
- Signals y `computed` para filtrar resultados.
- Signals para pagina actual, total de paginas y cartas visibles.

Justificacion: el input necesita estado editable local, pero el termino real de busqueda vive en el store para mantener consistencia. Al cambiar la busqueda, la pagina vuelve a 1 para evitar resultados vacios por estar en una pagina alta.

### HU-03 - Ver detalle de una carta

Componentes:

- `CardItemComponent`
- `CardGridComponent`
- `CatalogPageComponent`
- `CardDetailComponent`
- `CardStoreService`

Expectativas tecnicas usadas:

- Inputs y outputs para comunicar seleccion de carta.
- Event binding para click en carta y boton de volver.
- Signals para guardar la carta seleccionada.
- `@if` para mostrar detalle o catalogo.

Justificacion: se mantiene el detalle en la misma pantalla para conservar el contexto de busqueda sin agregar routing innecesario.

### HU-04 - Organizar detalle en secciones

Componentes:

- `CardDetailComponent`
- `InfoTabsComponent`

Expectativas tecnicas usadas:

- Componente reutilizable.
- Inputs para recibir secciones.
- Event binding para cambiar de pestana.
- Signal interno para la pestana activa.
- `@for` y `@if` para renderizar secciones.

Justificacion: `InfoTabsComponent` esta en `shared` porque no depende de cartas; solo recibe titulos y lineas de informacion. Por eso podria reutilizarse en otras pantallas.

### HU-05 - Mantener estado consistente

Componentes/servicios:

- `CardStoreService`
- `CatalogPageComponent`
- `SearchBarComponent`
- `CardGridComponent`
- `CardDetailComponent`

Expectativas tecnicas usadas:

- Manejo de estado centralizado con Signals.
- `computed` para resultados filtrados, total de paginas y cartas visibles.
- Servicio injectable con `providedIn: 'root'`.

Justificacion: se eligieron Signals porque el estado principal es de UI: cartas, busqueda, carga, error y carta seleccionada. Para este caso son mas simples de explicar que `BehaviorSubject`.

## Decisiones tecnicas

- **Signals en vez de BehaviorSubject:** se pudo usar RxJS, pero Signals simplifica el estado para una app pequena y evita suscripciones manuales en componentes.
- **Un solo endpoint:** se pudo llamar `?fname=` en cada busqueda, pero se eligio cargar una vez y filtrar en frontend por la indicacion del challenge.
- **Detalle sin ruta propia:** se pudo usar Angular Router, pero para esta primera version era mas simple mantener el detalle en la misma pantalla y no perder la busqueda.
- **Inputs/outputs entre componentes:** se pudo inyectar el store en componentes hijos, pero usar outputs demuestra comunicacion entre componentes y mantiene `CardItemComponent` mas reutilizable.
- **Paginacion simple:** se pudo usar una libreria o paginacion desde API, pero se eligio una paginacion frontend con botones anterior/siguiente para mantener el codigo claro.
- **CSS simple:** se uso CSS basico con grid, flex y clases directas para que el codigo sea facil de leer y explicar.
