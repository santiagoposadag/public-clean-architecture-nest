import { PostData } from "src/infrastructure";
import { IRepository } from "../../gateway";
import { CreatePostUseCase } from "../createPost";


describe('CreatePostUseCase', () => {
    let createPostUseCase: CreatePostUseCase;
    let repositoryMock: jest.Mocked<IRepository>;
    let spy: jest.SpyInstance;

    beforeEach(() => {
        repositoryMock = jest.mocked<IRepository>({
            createPost: jest.fn(),
            addComment: jest.fn(),
        })

        // instancia del caso de uso con las dependencias mockeadas
        createPostUseCase = new CreatePostUseCase(repositoryMock);

        // espiamos el metodo para saber si se llamó correctamente
        spy = jest.spyOn(repositoryMock, 'createPost')
    });


    afterEach(() => {
        // Limpia el spy después de cada prueba
        spy.mockClear();
    });

    it('debería crear un nuevo post, usando el patron AAA', async () => {
        // Configura el comportamiento del mock

        const postData: PostData = {
            author: 'John Doe',
            title: 'Mi nuevo post',
            messagge: 'Contenido del post',
            comments: []
        };

        const postResult = {
            _id: 'postId',
            ...postData,
        };

        // Indicamos el comportamiento de nuestro mock
        repositoryMock.createPost.mockResolvedValue(postResult);

        // Ejecuta el caso de uso
        const result = await createPostUseCase.execute(postData);

        // Verifica que el método del mock haya sido llamado con los argumentos correctos
        expect(repositoryMock.createPost).toHaveBeenCalledWith(postData);

        // Verifica que el resultado coincida con lo que esperabas
        expect(result).toEqual(postResult);

        // Verifica que el spy sea llamado correctamente
        expect(spy).toHaveBeenCalledWith(postData);

        // Verifica que el spy devuelve el valor esperado
        expect(spy).toHaveReturnedWith(Promise.resolve(postResult));
    });
});
