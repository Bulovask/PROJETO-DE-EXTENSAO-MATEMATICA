# Documentação Geral do Sistema: Projeto de Extensão - Matemátcia

## 1. Introdução
O sistema, Projeto de Extensão - Matemática, será importante para ajudar no processo de inscrição, seleção e matrícula de estudantes em cursos de extensão, além de que será integrado ao Google Sala de Aula, possibilitando deste modo o acompanhamento mais eficais do cursista por parte dos administradores e também pelo próprio cursista.

## 2. Atores
O sistema possuirá dois sites, o do administrador e o do usuário, os dois são os principais atores do Sistema.

### 2.1. Administrador
Cada administrador precisa entrar com uma conta do Google, por padrão ele não terá permissão de fazer nada, precisando desta forma receber de outro administrador, que tenha permissão de conceder permissões, as permissões necessárias para realizar seu trabalho.
O primeiro administrador que se registrar irá receber acesso total, por questões de segurança, ele precisará antes digitar uma senha de verificação que será definida pela pessoa ou software automatizado que instalou e configurou o sistema, após isto tal senha será inútil.

#### 2.1.1. Casos de Uso do Ator Administrador - Descrição
- **Cadastro na Plataforma**
    - **A01:** Entrar com o Google, caso seja primeiro acesso terá que esperar a permissão de outro administrador para conseguir usar o sistema.
    - **A02:** Editar perfil.
- **Cursos**
    - **A03:** Criar novo curso de extensão.
    - **A04:** Editar curso de extensão.
    - **A05:** Apagar curso de extensão.
    - **A06:** Arquivar curso de extensão.
- **Inscrições**
    - **A07:** Aprovar inscrição de um usuário.
    - **A08:** Rejeitar inscrição de um usuário.
- **Matrículas**
    - **A09:** Permitir rematrícula de um usuário.
    - **A10:** Rejeitar rematrícula de um usuário.
    - **A11:** revogar matrícula de um usuário.
- **Questionários**
    - **A12:** Criar questionário.
    - **A13:** Editar questionário.
    - **A14:** Apagar questionário.
    - **A15:** Arquivar questionário.
    - **A16:** Ver respostas do questionário.
- **Gestão de Pessoas**
    - **A17:** Conceder permissões a um administrador.
    - **A18:** Revogar permissões a um administrador.
    - **A19:** Remover administrador.
    - **A20:** Adicionar administrador.
    


### 2.2. Usuário
Cada usuário precisa entrar com uma conta do Google, caso seja o primeiro acesso, ele terá que completar seu cadastro com informações adicionais para poder prosseguir.
#### 2.2.1. Casos de Uso do Ator Usuário - Descrição
- **Cadastro na Plataforma**
    - **U01:** Entrar com o Google e completar o cadastro com dados adicionais como, nome completo, a última ou atual instituição de ensino, data de nascimento (Opcional), número de telefone celular (para participar do grupo no WhatsApp).
    - **U02:** Editar informações do perfil como, nome completo, data de nascimento, instituição de ensino e número de telefone celular.
    - **U03:** Apagar perfil/cadastro.
- **Inscrições**
    - **U04:** Ver lista de cursos disponíveis para se inscrever.
    - **U05:** Se inscrever em um curso.
    - **U06:** Cancelar inscrição em um curso.
    - **U07:** Ver suas inscrições.
    - **U08:** Mostrar detalhes de uma Inscrição.
- **Matrículas**
    - **U09:** Se matricular em um curso, ao fazer isto ele será automaticamente incluído no Google Sala de Aula correspondente ao curso.
    - **U10:** Cancelar matrícula em um curso, suas informações no Google Sala de Aula não serão apagadas imediatamente.
    - **U11:** solicitar permissão para matricular-se novamente no curso, depende da aprovação de um administrador
    - **U12:** Ver suas matrículas.
    - **U13:** Mostrar detalhes de uma Matrícula.







