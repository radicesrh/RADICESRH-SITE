# Site Radices Gestão de Pessoas

Site institucional da **Radices Gestão de Pessoas** (www.radicesrh.com), pronto para publicar. Não precisa de instalação nem de servidor: é HTML, CSS e JavaScript puros.

## Como publicar

### Opção 1: hospedagem comum (Hostinger, Locaweb, HostGator, Registro.br, cPanel...)

1. Acesse o **Gerenciador de Arquivos** (ou FTP) da hospedagem.
2. Abra a pasta `public_html` (ou `www` / `htdocs`).
3. Envie o arquivo `.zip` e use **Extrair** lá dentro, ou envie o conteúdo da pasta.
4. Acesse radicesrh.com e confira.

> **Importante:** o `index.html` deve ficar direto dentro de `public_html`, não dentro de uma subpasta.

### Opção 2: Netlify (gratuito)

1. Descompacte o `.zip`.
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e arraste a pasta.
3. Em **Domain settings**, conecte o domínio `radicesrh.com`.

## Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Início (Por que Radices, Quem somos, Missão/Visão/Valores, Soluções) |
| `recrutamento-e-selecao.html` | Recrutamento e Seleção |
| `administracao-de-estagios.html` | Administração de Estágios |
| `terceirizacao-de-folha.html` | Terceirização de Folha |
| `controle-de-ponto.html` | Controle de Ponto e Jornada |
| `perfil-comportamental.html` | Mapeamento de Perfil Comportamental |
| `treinamentos.html` | Treinamentos Corporativos |
| `contato.html` | Contato (WhatsApp, e-mail e formulário) |
| `vagas/index.html` | Vagas (acessada em `/vagas`) |

## Estrutura de arquivos

```
.
├── index.html, *.html     páginas do site
├── css/style.css          visual
├── js/main.js             menu, animações e formulário
├── img/                   imagens, logos e miniatura de compartilhamento
├── sitemap.xml            ajuda o Google a encontrar as páginas
├── robots.txt             orientações para buscadores
├── .htaccess              compressão e cache (hospedagens Apache)
└── README.md              este arquivo
```

## Vagas e redes sociais

- **Aba Vagas:** aparece no menu de todas as páginas e leva para `radicesrh.com/vagas`. Essa página (`vagas/index.html`) exibe a lista de vagas da plataforma dentro do próprio site, com o cabeçalho e o rodapé da Radices, e o endereço do navegador continua sendo o do seu domínio.
- **Instagram e LinkedIn:** os botões ficam no rodapé de todas as páginas. Para ativá-los, abra `js/main.js` e cole os links dos perfis no bloco `REDES`, no início do arquivo. Enquanto estiverem vazios, os botões não levam a lugar nenhum.

## Miniatura de compartilhamento

Ao enviar o site no WhatsApp, Instagram, LinkedIn, Facebook e e-mail, aparece uma prévia com a logo, o slogan e uma foto da equipe. A imagem é `img/og-radices.jpg` (1200 x 630 px). Para trocá-la, substitua esse arquivo mantendo o mesmo nome e tamanho.

Os aplicativos guardam a prévia por um tempo. Se ela não atualizar depois de publicar, use o depurador do Facebook (developers.facebook.com/tools/debug) e clique em "Buscar novas informações", ou envie o link com um `?v=2` no final.

## Observações

- **Formulário de contato:** não usa servidor. Ele monta a mensagem e abre no WhatsApp (14) 99833-0022 ou no e-mail robsoncarvalho@radicesrh.com.
- **`.htaccess`:** é um arquivo oculto, não apague. Ele tem 3 linhas comentadas para forçar HTTPS; remova o `#` delas somente depois de ativar o certificado SSL no domínio.
- **Fontes:** vêm do Google Fonts (Plus Jakarta Sans e Inter), por isso precisam de internet para aparecer.
- **Editar textos:** abra o `.html` da página em qualquer editor de texto e altere o conteúdo entre as tags.
