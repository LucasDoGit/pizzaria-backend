/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
/**
 * @swagger
 * /me:
 *   get:
 *     summary: Retorna os detalhes do usuário autenticado
 *     description: Retorna os detalhes do usuário que está autenticado no sistema.
 *     tags:
 *       - Usuários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalhes do usuário retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: string
 *                      example: "1234"
 *                  name:
 *                      type: string
 *                      example: "João"
 *                  email:
 *                      type: string
 *                      example: "joão123@email.com"
 *       401:
 *         description: Não autorizado
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     description: Cria um usuário e retorna seus dados.
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João Silva"
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *               password:
 *                 type: string
 *                 example: "joao982"
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao cadastrar usuário
 */
/**
 * @swagger
 * /session:
 *   post:
 *     summary: Gerar token de sessão
 *     description: Gera um token e retorna seus dados
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *               password:
 *                 type: string
 *                 example: "joao982"
 *     responses:
 *       200:
 *         description: Retorna token de sessão do usuário
 *       400:
 *         description: Erro ao gerar token do usuário
 */
/**
 * @swagger
 * /category:
 *  get:
 *      summary: Busca todas as categorias
 *      description: Busca todas as categorias e retorna um array de objetos
 *      tags:
 *      - Categorias
 *      security:
 *      - bearerAuth: []
 *      responses:
 *          200:
 *              description: Retorna array com todas as categorias cadastradas
 *          400:
 *              description: Erro ao retornar categorias
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma nova categoria de produtos.
 *     description: Cria uma nova categoria e retorna seus dados
 *     tags:
 *       - Categorias
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Bebidas"
 *     responses:
 *       200:
 *         description: Categoria cadastrada com sucesso
 *       400:
 *         description: Erro ao cadastrar categoria
 *       401:
 *         description: Acesso negado
 */
/**
 * @swagger
 * /category/product:
 *  get:
 *      summary: Busca todos os produtos de uma categoria
 *      description: Busca todos os produtos de um categoria e retorna os dados.
 *      tags:
 *      - Categorias
 *      security:
 *      - bearerAuth: []
 *      parameters:
 *       - in: query
 *         name: category_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1234"
 *           description: ID da categoria
 *      responses:
 *          200:
 *              description: Retorna array com os produtos cadatrados de um categoria.
 *          400:
 *              description: Erro ao retornar produtos
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Cadastra um novo produto
 *     description: Rota para cadastrar um novo produto com nome, preço, descrição, categoria e uma imagem.
 *     tags:
 *     - Produtos
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: Nome do produto
 *                  price:
 *                      type: string
 *                      description: Preço do produto
 *                  description:
 *                      type: string
 *                      description: Descrição do produto
 *                  category_id:
 *                      type: string
 *                      description: ID da categoria do produto
 *                  file:
 *                      type: string
 *                      format: binary
 *                      description: Arquivo de imagem do produto
 *     responses:
 *       200:
 *         description: Produto cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do produto cadastrado
 *                 name:
 *                   type: string
 *                   description: Nome do produto
 *                 price:
 *                   type: string
 *                   description: Preço do produto
 *                 description:
 *                   type: string
 *                   description: Descrição do produto
 *                 category_id:
 *                   type: string
 *                   description: ID da categoria do produto
 *                 banner:
 *                   type: string
 *                   description: URL da imagem do produto no Cloudinary
 *       400:
 *         description: Erro cadastrar novo produto
 *       401:
 *         description: Acesso negado
 */
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Busca todos os pedidos abertos
 *     description: Busca todos os pedidos aberto e retorna seus dedos
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna array com todos os pedidos abertos
 *       400:
 *         description: Erro ao buscar pedidos abertos
 *       401:
 *         description: Acesso negado
 */
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Busca todos os pedidos abertos
 *     description: Busca todos os pedidos aberto e retorna seus dedos
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna array com todos os pedidos abertos
 *       400:
 *         description: Erro ao buscar pedidos abertos
 *       401:
 *         description: Acesso negado
 */
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     description: Cria um novo pedido e retorna seus dados.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João"
 *                 description: "Nome do cliente"
 *               table:
 *                 type: number
 *                 example: 4
 *                 description: "Mesa do cliente"
 *             required:
 *              - table
 *     responses:
 *       200:
 *         description: Categoria cadastrada com sucesso
 *       400:
 *         description: Erro ao cadastrar categoria
 *       401:
 *         description: Acesso negado
 */
/**
 * @swagger
 * /order:
 *  delete:
 *      summary: Deleta um pedido
 *      description: Deleta um pedido e retorna seus dados
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      parameters:
 *       - in: query
 *         name: order_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1234"
 *           description: ID do pedido para excluir
 *      responses:
 *          200:
 *              description: Deleta um pedido e retorna seus dados
 *          400:
 *              description: Erro ao deletar um pedido
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /order/detail:
 *  get:
 *      summary: Exibe os items do pedido
 *      description: Exibe os items de um pedido e os seus dados.
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      parameters:
 *       - in: query
 *         name: order_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1234"
 *           description: ID do pedido para excluir
 *      responses:
 *          200:
 *              description: Retorna detalhes dos pedidos
 *          400:
 *              description: Erro ao deletar um pedido
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /order/add:
 *  post:
 *      summary: Adiciona item no pedido
 *      description: Adiciona items no pedido e retorna seus dados
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *                 example: "1234"
 *                 description: "ID do pedido"
 *               product_id:
 *                 type: string
 *                 example: "4321"
 *                 description: "ID do produto"
 *               amount:
 *                 type: number
 *                 example: 2
 *                 description: "quantidade do produto"
 *      responses:
 *          200:
 *              description: Produto adicionado no pedido
 *          400:
 *              description: Erro ao adicionar produto no pedido
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /order/remove:
 *  delete:
 *      summary: Remove items do pedido
 *      description: Remove items do pedido e retorna seus dados
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      parameters:
 *       - in: query
 *         name: item_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1234"
 *           description: ID do item a ser excluído
 *      responses:
 *          200:
 *              description: Produto removido do pedido
 *          400:
 *              description: Erro ao remover produto do pedido
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /order/send:
 *  put:
 *      summary: Envia pedido para a cozinha
 *      description: O status do rascunho é alterado para false e retorna os dados do pedido.
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *                 example: "1234"
 *                 description: "ID do pedido"
 *      responses:
 *          200:
 *              description: Status rascunho do pedido alterado para false
 *          400:
 *              description: Erro ao deletar um pedido
 *          401:
 *              description: Acesso negado
 */
/**
 * @swagger
 * /order/finish:
 *  put:
 *      summary: Finaliza o pedido
 *      description: Finaliza o pedido alterando o status para true e retorna seus dados
 *      tags:
 *      - Pedidos
 *      security:
 *      - bearerAuth: []
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: string
 *                 example: "1234"
 *                 description: "ID do pedido"
 *      responses:
 *          200:
 *              description: Pedido finalizado com sucesso
 *          400:
 *              description: Erro ao deletar um pedido
 *          401:
 *              description: Acesso negado
 */
