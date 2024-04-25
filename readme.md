# Desafío Mi Repertorio
Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js, en el cual validaremos nuestros conocimientos sobre levantar un servidor con conexión a PostgreSQL, Insertar registros, Consultar registros, Actualizar registros y Eliminar registros. Se utilizo un apoyo del desafio, para así desarrollar la parte del backend.


# Descripción del desafío
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en
vivo. Se pusieron en contacto con el restaurante del sector para usar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus
estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD.


# Visuales

Al iniciar este proyecto, se pueden encontrar con la vista principal. En las imágenes es como luciría la aplicación si existen canciones ingresadas en la bbdd

| Agregando | Editar |
| --- | --- |
| ![nueva](/assets/agregando.png)| ![Visualización_dos](/assets/editar.png) |

Este proyecto cuenta al iniciar, un botón Agregar, para insertar una nueva canción una vez se ingresan datos por el formulario. 
Debajo se encuentra una tabla con las canciones existentes. Cada canción cuenta con dos botones: editar y eliminar. Al elegir una canción a editar, el formulario inicial cambia, y el botón de Agregar, es cambiado por un boton de Editar, para editar la canción que se escogió. 
| Eliminando | Tabla actualizada |
| --- | --- |
| ![nueva](/assets/eliminando.png)| ![Visualización_dos](/assets/eliminado.png) |
 
Si se selecciona el botón eliminar, eliminará la canción enseguida y aparecera una información indicando que se ha eliminado. Así la tabla cambiara automaticamente una vez sea eliminada la canción, así como también cuando es editada o agregada una nueva canción.

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript.
- Se utilizo pg y express.

### Instalación 🔧

1. Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/miRepertorio.git
```

2. Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.

```
npm install
```

1. Debes crear la base de datos correspondiente que esta utilizando este proyecto y sus tablas. Dichas consultas se encuentran en el archivo repertorio.sql. Desdes realizar las instrucciones indicadas, para generar la base de datos (repertorio) y la tabla (canciones) que utiliza este proyecto.

2. El siguiente paso es hacer la conexión a la base de datos. En el archivo dbconfig.js debes agregar tu usuario y contraseña.
```
// inserta tus datos
const usuario_name = "";
const pass_usuario = "";
```
3. Finalmente, debes levantar el servidor (index.js) con el siguiente comando en tu consola
```
node index.js
```

Este te dará el enlace para que puedas ingresar directamente al localhost
```
http://localhost:3000
```


## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/miRepertorio/issues).

## Versionado  📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
