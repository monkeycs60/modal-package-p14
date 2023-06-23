# react-ts-modal-cserizay - Modal creation & management in React (compatible with TypeScript)

![React](https://img.shields.io/badge/-React-%23282C34?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-%23282C34?style=for-the-badge&logo=typescript&logoColor=%2361DAFB)

![Author](https://img.shields.io/badge/Author-Cl%C3%A9ment%20Serizay-blue?style=for-the-badge)

## Table of Contents

-   [Installation](#installation)
-   [Prerequisites](#prerequisites)
-   [Usage](#usage)
-   [License](#license)

## Installation

```bash
npm install react-ts-modal-cserizay
```

## Prerequisites

-   [React 18.2.0](https://reactjs.org/)
-   [react-dom 18.2.0](https://www.npmjs.com/package/react-dom)
-   [Node.js v18](https://nodejs.org/en/)
-   [TypeScript 5+](https://www.typescriptlang.org/)
-   [npm 8+](https://www.npmjs.com/)

## Usages

```tsx
import { createModal } from 'react-ts-modal-cserizay';

const { Modal, openModal, closeModal } = createModal();

const RandomReactComponent = () => {
    const handleSave = () => {
        // Do whatever you want here.
        // Then, open the modal.
        openModal();
    };

    return (
        <div>
            <button onClick={handleSave}>Save</button>

            <Modal>You successfully saved your data!</Modal>
        </div>
    );
};
```


&& another example


```tsx
import { createModal } from 'react-ts-modal-cserizay';

const { Modal, openModal, closeModal } = createModal();

const AnotherRandomReactComponent = () => {
    const handleQuit = () => {
        // Do whatever you want here.
        // Then, open the modal.
        closeModal();
    };

    return (
        <div>
            <Modal>
                <p> Are you sure you want to quit? </p>
                <button onClick={handleQuit}>Quit</button>
            </Modal>
        </div>
    );
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

This project was created by [Clément Serizay] for [OpenClassrooms](https://openclassrooms.com/) Project 14.