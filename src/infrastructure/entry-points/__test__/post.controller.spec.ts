import { Test, TestingModule } from '@nestjs/testing';

import { CreatePostUseCase } from '../../../application/usecase';
import { PostModel } from '../../../domain';
import { PostController } from '../post';



describe('PostController', () => {
    let controller: PostController;
    let createPostUseCase: CreatePostUseCase;
    let spy: jest.SpyInstance;

    beforeEach(async () => {

    /*
    * TestingModule para representar un módulo de prueba. 
    * Este tipo se utiliza para crear y configurar módulos de prueba en NestJS.
    */
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostController],
            providers: [
                {
                    provide: CreatePostUseCase,
                    useValue: {
                        execute: jest.fn()
                    }
                }
            ]
        }).compile();

        controller = module.get<PostController>(PostController);
        createPostUseCase = module.get<CreatePostUseCase>(CreatePostUseCase);

        spy = jest.spyOn(createPostUseCase, 'execute')
    });

    afterEach(() => {
        // Limpia el spy después de cada prueba
        spy.mockClear(); 
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('debería crear un nuevo post', async () => {
        // Configura el comportamiento del mock de CreatePostUseCase
        const postData: PostModel = {
            author: 'John Doe',
            title: 'Mi nuevo post',
            messagge: 'Contenido del post',
        };
        const postResult: PostModel = {
            _id: 'postId',
            ...postData,
        };

        // espio al caso de uso y en este caso le digo que debe retornar
        spy.mockReturnValue(postResult)

        // Ejecuta la acción del controlador y espera la resolución de las promesas
        const controllerResult = await controller.createPost(postData);

        expect(controllerResult).toEqual(postResult);

        expect(createPostUseCase.execute).toHaveBeenCalledWith(postData);
        expect(createPostUseCase.execute).toHaveBeenCalledTimes(1);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveReturnedWith(postResult);
    });

});
