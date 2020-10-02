## `Libs Instaladas`

- axios
- json-server
- node-sass
- react
- react-dom
- react-router-dom
- react-scripts
- typescript

### `Componentes criados`

- Button
  - props
    - type
    - typeButton
    - textButton
- Footer
  - props
    - to
    - titleOne
    - titleTwo
- CustomInput
  - props
    - label
    - id
    - seValue
    - required
    - type
- CustomSelect
  - props:
    - options: Option[];
    - value: Option;
    - setValue: Dispatch<SetStateAction<Option>>;
    - id: string;
    - label: string;

### `Estrutura de pastas`

- src
- assets
- components
- context
- hooks
- model
  - props
- props
- routes
- service
- shared
- style

### `Executando aplicação`

1. Faça o clone do prjeto
1. Abra o projeto em seu VScode
1. Abra o Terminal do VScode
1. Execute yarn install ou npm install
1. Execute yarn start (e aguardar sua aplicação subir )
1. Execute yarn startDB ( para que seu banco de dados suba em uma porta diferente de sua aplicação)
1. Coloque na barra de busca do seu navegador http://localhost:3000/
   Tudo pronto!

Obs: Caso de erro de 401 jfrog remova o yarn.lock e de yarn install ou npm install novamente
