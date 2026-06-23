# Treinamento PNP - Microblog

## Principais demandas do projeto

### Login

Faz-se necessário criar a tela de login da aplicação, permitindo que usuários autenticados acessem a área restrita do sistema. Após a validação das credenciais, o usuário deverá ser direcionado para a página principal.

### Publicar no sistema

Faz-se necessário criar a funcionalidade de publicação de conteúdo para o feed da aplicação. Os usuários deverão poder criar publicações, com possibilidade de adicionar uma imagem, seguindo o padrão do sistema.

### Comentar na publicação

Faz-se necessário implementar uma funcionalidade para que os usuários possam comentar nas publicações do feed da aplicação. Os comentários deverão ficar associados à publicação correspondente, seguindo o padrão já utilizado pelo sistema.

### Visualizar publicações

Faz-se necessário criar uma funcionalidade para exibição das publicações disponíveis na aplicação, permitindo que os usuários visualizem os conteúdos compartilhados por outros usuários.

## Diretórios, arquivos e padrões de implementação

A estrutura de diretórios utilizada e os padrões de implementação do projeto serão nos padrões PNP.

## Regras de Negócio

| RNs                      | Descrição                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RN 1 <a name="rn-1"></a> | O nome de usuário usado para fazer login deve ser único no sistema.                                                                         |
| RN 2 <a name="rn-2"></a> | A confirmação de senha deve ser igual a senha no cadastro.                                                                                  |
| RN 3 <a name="rn-3"></a> | O feed deve apresentar as publicações de outros usuários, organizadas em ordem decrescente de data, das mais recentes para as mais antigas. |
