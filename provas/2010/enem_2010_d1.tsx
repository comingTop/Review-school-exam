import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2010_D1: QuizQuestion[] = [

  {
    id: 1,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O gráfico representa a relação entre o tamanho e a totalidade dos imóveis rurais no Brasil. Que característica da estrutura fundiária brasileira está evidenciada no gráfico apresentado?

Fonte: Incra, Estatísticas cadastrais 1998.`,
    images: ['/enem/2010/images/enem_2010_d1_q1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A concentração de terras nas mãos de poucos.` },
      { id: 'B', type: 'text', value: `A existência de poucas terras agricultáveis.` },
      { id: 'C', type: 'text', value: `O domínio territorial dos minifúndios.` },
      { id: 'D', type: 'text', value: `A primazia da agricultura familiar.` },
      { id: 'E', type: 'text', value: `A debilidade dos plantations modernos.` },
    ],
    correct: 'A',
    explanation: `O gráfico mostra que 53% da área dos imóveis rurais estão em propriedades acima de 1.000 ha, enquanto os imóveis menores, apesar de muito mais numerosos, ocupam fração reduzida da área total. Isso evidencia a concentração fundiária (latifúndio), característica histórica da estrutura agrária brasileira, por isso a alternativa A está correta. As demais estão erradas: não há escassez de terras agricultáveis (B), não há domínio de minifúndios (C) nem primazia da agricultura familiar (D), e os plantations (grandes monoculturas) não estão debilitados (E) — ao contrário, a grande propriedade predomina.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Antes, eram apenas as grandes cidades que se apresentavam como o império da técnica, objeto de modificações, suspensões, acréscimos, cada vez mais sofisticadas e carregadas de artifício. Esse mundo artificial inclui, hoje, o mundo rural.

SANTOS, M. A Natureza do Espaço. São Paulo: Hucitec, 1996.

Considerando a transformação mencionada no texto, uma consequência socioespacial que caracteriza o atual mundo rural brasileiro é`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a redução do processo de concentração de terras.` },
      { id: 'B', type: 'text', value: `o aumento do aproveitamento de solos menos férteis.` },
      { id: 'C', type: 'text', value: `a ampliação do isolamento do espaço rural.` },
      { id: 'D', type: 'text', value: `a estagnação da fronteira agrícola do país.` },
      { id: 'E', type: 'text', value: `a diminuição do nível de emprego formal.` },
    ],
    correct: 'B',
    explanation: `O texto de Milton Santos indica que a técnica e o artifício passaram a penetrar também no campo (meio técnico-científico-informacional). Uma consequência socioespacial dessa modernização é a incorporação produtiva de áreas antes marginais: a tecnologia (correção do solo, irrigação, mecanização) permite aproveitar solos menos férteis, como ocorreu na expansão sobre o Cerrado. Por isso B está correta. A (redução da concentração de terras) e C (isolamento do espaço rural) contrariam a lógica da modernização; D (estagnação da fronteira agrícola) é o oposto do ocorrido; e E (queda do emprego formal) não é a consequência destacada pelo texto, centrado na tecnificação do espaço.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A maioria das pessoas daqui era do campo. Vila Maria é hoje exportadora de trabalhadores. Empresários de Primavera do Leste, Estado de Mato Grosso, procuram o bairro de Vila Maria para conseguir mão de obra. É gente indo distante daqui 300, 400 quilômetros para ir trabalhar, para ganhar sete conto por dia. (Carlito, 43 anos, maranhense, entrevistado em 22/03/98).

Ribeiro, H. S. O migrante e a cidade: dilemas e conflitos. Araraquara: Wunderlich, 2001 (adaptado).

O texto retrata um fenômeno vivenciado pela agricultura brasileira nas últimas décadas do século XX, consequência`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `dos impactos sociais da modernização da agricultura.` },
      { id: 'B', type: 'text', value: `da recomposição dos salários do trabalhador rural.` },
      { id: 'C', type: 'text', value: `da exigência de qualificação do trabalhador rural.` },
      { id: 'D', type: 'text', value: `da diminuição da importância da agricultura.` },
      { id: 'E', type: 'text', value: `dos processos de desvalorização de áreas rurais.` },
    ],
    correct: 'A',
    explanation: `O depoimento de Carlito mostra trabalhadores rurais que deixaram o campo e passaram a ser recrutados como mão de obra volante, migrando para locais distantes em busca de trabalho. Esse fenômeno é consequência da modernização da agricultura, que, ao mecanizar e concentrar a produção, expulsa o trabalhador do campo e gera impactos sociais como o êxodo rural e o trabalho temporário — daí a alternativa A. B (recomposição de salários) e C (exigência de qualificação) não explicam a expulsão da mão de obra; D (diminuição da importância da agricultura) é falsa, pois a atividade agrícola se expandiu; e E (desvalorização de áreas rurais) não corresponde à lógica de modernização produtiva descrita.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'População, demografia e migrações', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Os lixões são o pior tipo de disposição final dos resíduos sólidos de uma cidade, representando um grave problema ambiental e de saúde pública. Nesses locais, o lixo é jogado diretamente no solo e a céu aberto, sem nenhuma norma de controle, o que causa, entre outros problemas, a contaminação do solo e das águas pelo chorume (líquido escuro com alta carga poluidora, proveniente da decomposição da matéria orgânica presente no lixo).

RICARDO, B.; CANPANILLI, M. Almanaque Brasil Socioambiental 2008. São Paulo, Instituto Socioambiental, 2007.

Considere um município que deposita os resíduos sólidos produzidos por sua população em um lixão. Esse procedimento é considerado um problema de saúde pública porque os lixões`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `causam problemas respiratórios, devido ao mau cheiro que provém da decomposição.` },
      { id: 'B', type: 'text', value: `são locais propícios a proliferação de vetores de doenças, além de contaminarem o solo e as águas.` },
      { id: 'C', type: 'text', value: `provocam o fenômeno da chuva ácida, devido aos gases oriundos da decomposição da matéria orgânica.` },
      { id: 'D', type: 'text', value: `são instalados próximos ao centro das cidades, afetando toda a população que circula diariamente na área.` },
      { id: 'E', type: 'text', value: `são responsáveis pelo desaparecimento das nascentes na região onde são instalados, o que leva à escassez de água.` },
    ],
    correct: 'B',
    explanation: `Os lixões dispõem resíduos a céu aberto, sem controle, acumulando matéria orgânica que atrai e serve de criadouro a vetores e animais (ratos, moscas, baratas) transmissores de doenças, além de o chorume contaminar o solo e as águas. Esse é o principal problema de saúde pública, descrito corretamente na alternativa B. A (problemas respiratórios pelo mau cheiro) é efeito secundário; C (chuva ácida) é incorreta nesse contexto; D (instalação no centro das cidades) é factualmente errada, pois lixões ficam em periferias; e E (desaparecimento de nascentes) não é a questão central de saúde pública.`,
    subject: ['geo'],
    topics: ['Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `TEIXEIRA, W. et al. (Orgs.). Decifrando a Terra. São Paulo: Companhia Editora Nacional, 2009.

O esquema representa um processo de erosão em encosta. Que prática realizada por um agricultor pode resultar em aceleração desse processo?`,
    images: ['/enem/2010/images/enem_2010_d1_q5.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Plantio direto.` },
      { id: 'B', type: 'text', value: `Associação de culturas.` },
      { id: 'C', type: 'text', value: `Implantação de curvas de nível.` },
      { id: 'D', type: 'text', value: `Aração do solo, do topo ao vale.` },
      { id: 'E', type: 'text', value: `Terraceamento na propriedade.` },
    ],
    correct: 'D',
    explanation: `O esquema representa a erosão em encosta (sulcos, ravinas e voçoroca). A prática que acelera esse processo é arar o solo no sentido do declive, do topo ao vale, porque os sulcos deixados pela aração conduzem a água morro abaixo, aumentando a velocidade do escoamento superficial e o arraste de partículas — por isso D está correta. As demais opções — plantio direto (A), associação de culturas (B), curvas de nível (C) e terraceamento (E) — são práticas conservacionistas que reduzem o escoamento e protegem o solo contra a erosão.`,
    subject: ['geo'],
    topics: ['Geologia, relevo e solos', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Muitos processos erosivos se concentram nas encostas, principalmente aqueles motivados pela água e pelo vento. No entanto, os reflexos também são sentidos nas áreas de baixada, onde geralmente há ocupação urbana. Um exemplo desses reflexos na vida cotidiana de muitas cidades brasileiras é`,
    images: ['/enem/2010/images/enem_2010_d1_q6.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a maior ocorrência de enchentes, já que os rios assoreados comportam menos água em seus leitos.` },
      { id: 'B', type: 'text', value: `a contaminação da população pelos sedimentos trazidos pelo rio e carregados de matéria orgânica.` },
      { id: 'C', type: 'text', value: `o desgaste do solo nas áreas urbanas, causado pela redução do escoamento superficial pluvial na encosta.` },
      { id: 'D', type: 'text', value: `a maior facilidade de captação de água potável para o abastecimento público, já que é maior o efeito do escoamento sobre a infiltração.` },
      { id: 'E', type: 'text', value: `o aumento da incidência de doenças como a amebíase na população urbana, em decorrência do escoamento de água poluída do topo das encostas.` },
    ],
    correct: 'A',
    explanation: `O texto afirma que os processos erosivos das encostas têm reflexos nas áreas de baixada urbanizadas. O material erodido é transportado e depositado nos leitos dos rios (assoreamento), que, com menor capacidade de vazão, transbordam mais facilmente e provocam enchentes nas cidades — por isso A está correta. B inverte o foco (a matéria orgânica não é o cerne); C afirma erroneamente redução do escoamento; D sugere um benefício (maior captação de água potável), o que não ocorre; e E desloca o nexo causal correto, que é assoreamento gerando enchentes.`,
    subject: ['geo'],
    topics: ['Geologia, relevo e solos', 'Espaço urbano e urbanização', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Pensando nas correntes e prestes a entrar no braço que deriva da Corrente do Golfo para o norte, lembrei-me de um vidro de café solúvel vazio. Coloquei no vidro uma nota cheia de zeros, uma bola cor rosa-choque. Anotei a posição e data: Latitude 49º49' N, Longitude 23º49' W. Tampei e joguei na água. Nunca imaginei que receberia uma carta com a foto de um menino norueguês, segurando a bolinha e a estranha nota.

KLINK, A. Parati: entre dois pólos. São Paulo: Companhia das Letras, 1998 (adaptado).

No texto, o autor anota sua coordenada geográfica, que é`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a relação que se estabelece entre as distâncias representadas no mapa e as distâncias reais da superfície cartografada.` },
      { id: 'B', type: 'text', value: `o registro de que os paralelos são verticais e convergem para os polos, e os meridianos são círculos imaginários, horizontais e equidistantes.` },
      { id: 'C', type: 'text', value: `a informação de um conjunto de linhas imaginárias que permitem localizar um ponto ou acidente geográfico na superfície terrestre.` },
      { id: 'D', type: 'text', value: `a latitude como distância em graus entre um ponto e o Meridiano de Greenwich, e a longitude como a distância em graus entre um ponto e o Equador.` },
      { id: 'E', type: 'text', value: `a forma de projeção cartográfica, usado para navegação, onde os meridianos e paralelos distorcem a superfície do planeta.` },
    ],
    correct: 'C',
    explanation: `Ao registrar latitude (49º49' N) e longitude (23º49' W), o autor anota suas coordenadas geográficas, que correspondem ao conjunto de linhas imaginárias (paralelos e meridianos) que permitem localizar com precisão qualquer ponto ou acidente na superfície terrestre — por isso C está correta. A define escala cartográfica; B e D confundem conceitos (os paralelos não convergem para os polos, e é a longitude, não a latitude, que se mede a partir do Meridiano de Greenwich); e E descreve projeção cartográfica, não coordenadas.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `TEIXEIRA, W. et al. (Orgs.). Decifrando a Terra. São Paulo: Companhia Editora Nacional, 2009 (adaptado).

O esquema mostra depósitos em que aparecem fósseis de animais do Período Jurássico. As rochas em que se encontram esses fósseis são`,
    images: ['/enem/2010/images/enem_2010_d1_q8.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `magmáticas, pois a ação de vulcões causou as maiores extinções desses animais já conhecidas ao longo da história terrestre.` },
      { id: 'B', type: 'text', value: `sedimentares, pois os restos podem ter sido soterrados e litificados com o restante dos sedimentos.` },
      { id: 'C', type: 'text', value: `magmáticas, pois são as rochas mais facilmente erodidas, possibilitando a formação de tocas que foram posteriormente lacradas.` },
      { id: 'D', type: 'text', value: `sedimentares, já que cada uma das camadas encontradas na figura simboliza um evento de erosão dessa área representada.` },
      { id: 'E', type: 'text', value: `metamórficas, pois os animais representados precisavam estar perto de locais quentes.` },
    ],
    correct: 'B',
    explanation: `Fósseis preservam-se em rochas sedimentares, pois os restos dos organismos são soterrados junto com os sedimentos e, ao longo do tempo, sofrem litificação (compactação e cimentação), formando camadas que podem conter fósseis — por isso B está correta. Rochas magmáticas (A e C) e metamórficas (E) formam-se sob altas temperaturas e pressões que destroem os restos orgânicos; D erra ao associar cada camada a um evento de erosão, quando na verdade as camadas representam deposição/sedimentação sucessiva.`,
    subject: ['geo'],
    topics: ['Geologia, relevo e solos', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O G-20 é o grupo que reúne os países do G-7, os mais industrializados do mundo (EUA, Japão, Alemanha, França, Reino Unido, Itália e Canadá), a União Europeia e os principais emergentes (Brasil, Rússia, Índia, China, África do Sul, Arábia Saudita, Argentina, Austrália, Coreia do Sul, Indonésia, México e Turquia). Esse grupo de países vem ganhando força nos fóruns internacionais de decisão e consulta.

ALLAN, R. Crise global. Disponível em: http://conteudoclippingmp.planejamento.gov.br. Acesso em: 31 jul.2010.

Entre os países emergentes que formam o G-20, estão os chamados BRIC (Brasil, Rússia, Índia e China), termo criado em 2001 para referir-se aos países que`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `apresentam características econômicas promissoras para as próximas décadas.` },
      { id: 'B', type: 'text', value: `possuem base tecnológica mais elevada.` },
      { id: 'C', type: 'text', value: `apresentam índices de igualdade social e econômica mais acentuados.` },
      { id: 'D', type: 'text', value: `apresentam diversidade ambiental suficiente para impulsionar a economia global.` },
      { id: 'E', type: 'text', value: `possuem similaridades culturais capazes de alavancar a economia mundial.` },
    ],
    correct: 'A',
    explanation: `A sigla BRIC foi cunhada em 2001 para designar Brasil, Rússia, Índia e China como economias emergentes com grande potencial de crescimento e características econômicas promissoras para as décadas seguintes — por isso A está correta. Esses países não compartilham base tecnológica elevada (B) nem índices de igualdade social e econômica acentuados (C); a diversidade ambiental (D) e as supostas similaridades culturais (E) não são o critério do agrupamento, que é essencialmente econômico.`,
    subject: ['geo'],
    topics: ['Globalização e economia mundial', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A Inglaterra pedia lucros e recebia lucros. Tudo se transformava em lucro. As cidades tinham sua sujeira lucrativa, suas favelas lucrativas, sua fumaça lucrativa, sua desordem lucrativa, sua ignorância lucrativa, seu desespero lucrativo. [...] As novas fábricas e os novos altos-fornos eram como as Pirâmides, mostrando mais a escravização do homem que seu poder.

DEANE, P. A Revolução Industrial. Rio de Janeiro: Zahar, 1979 (adaptado).

Qual relação é estabelecida no texto entre os avanços tecnológicos ocorridos no contexto da Revolução Industrial Inglesa e as características das cidades industriais no início do século XIX?`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `A facilidade em se estabelecer relações lucrativas transformava as cidades em espaços privilegiados para a livre iniciativa, característica da nova sociedade capitalista.` },
      { id: 'B', type: 'text', value: `O desenvolvimento de métodos de planejamento urbano aumentava a eficiência do trabalho industrial.` },
      { id: 'C', type: 'text', value: `A construção de núcleos urbanos integrados por meios de transporte facilitava o deslocamento dos trabalhadores das periferias até as fábricas.` },
      { id: 'D', type: 'text', value: `A grandiosidade dos prédios onde se localizavam as fábricas revelava os avanços da engenharia e da arquitetura do período, transformando as cidades em locais de experimentação estética e artística.` },
      { id: 'E', type: 'text', value: `O alto nível de exploração dos trabalhadores industriais ocasionava o surgimento de aglomerados urbanos marcados por péssimas condições de moradia, saúde e higiene.` },
    ],
    correct: 'E',
    explanation: `O texto de Deane ironiza que, nas cidades industriais inglesas, tudo se transformava em lucro, inclusive a sujeira, as favelas, a fumaça e o desespero. Isso evidencia que a busca desenfreada de lucro gerava intensa exploração dos trabalhadores e aglomerações urbanas com péssimas condições de moradia, saúde e higiene — exatamente a alternativa E. As demais idealizam a cidade industrial (planejamento urbano eficiente em B, transporte integrado em C, grandiosidade arquitetônica em D) ou generalizam a livre iniciativa (A), contrariando o tom crítico do texto.`,
    subject: ['his'],
    topics: ['Iluminismo e Revoluções', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A evolução do processo de transformação de matérias-primas em produtos acabados ocorreu em três estágios: artesanato, manufatura e maquinofatura.

Um desses estágios foi o artesanato, em que se`,
    image: null,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `trabalhava conforme o ritmo das máquinas e de maneira padronizada.` },
      { id: 'B', type: 'text', value: `trabalhava, geralmente, sem o uso de máquinas e de modo diferente do modelo de produção em série.` },
      { id: 'C', type: 'text', value: `empregavam fontes de energia abundantes para o funcionamento das máquinas.` },
      { id: 'D', type: 'text', value: `realizava parte da produção por cada operário, com uso de máquinas e trabalho assalariado.` },
      { id: 'E', type: 'text', value: `faziam interferências do processo produtivo por técnicos e gerentes, com vistas a determinar o ritmo de produção.` },
    ],
    correct: 'B',
    explanation: `No artesanato, primeiro estágio da produção, o artesão dominava todas as etapas do trabalho de forma manual, geralmente sem o uso de máquinas e de modo distinto da produção em série padronizada — por isso B está correta. A e C descrevem a maquinofatura (ritmo das máquinas e fontes de energia abundantes); D mistura máquinas e trabalho assalariado, próprios de estágios posteriores; e E, com técnicos e gerentes determinando o ritmo de produção, remete à produção fabril moderna, não ao artesanato.`,
    subject: ['his'],
    topics: ['Iluminismo e Revoluções', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A serraria construía ramais ferroviários que adentravam as grandes matas, onde grandes locomotivas com guindastes e correntes gigantescas de mais de 100 metros arrastavam para as composições de trem as toras que jaziam abatidas por equipes de trabalhadores que anteriormente passavam pelo local. Quando o guindaste arrastava as grandes toras em direção à composição de trem, os ervais nativos que existiam em meio às matas eram destruídos por este deslocamento.

MACHADO, P. P. Lideranças do Contestado. Campinas: Unicamp, 2004 (adaptado).

No início do século XX, uma série de empreendimentos capitalistas chegou à região do meio-oeste de Santa Catarina — ferrovias, serrarias e projetos de colonização. Os impactos sociais gerados por esse processo estão na origem da chamada Guerra do Contestado. Entre tais impactos, encontrava-se`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a absorção dos trabalhadores rurais como trabalhadores da serraria, resultando em um processo de êxodo rural.` },
      { id: 'B', type: 'text', value: `o desemprego gerado pela introdução das novas máquinas, que diminuíam a necessidade de mão de obra.` },
      { id: 'C', type: 'text', value: `a desorganização da economia tradicional, que sustentava os posseiros e os trabalhadores rurais da região.` },
      { id: 'D', type: 'text', value: `a diminuição do poder dos grandes coronéis da região, que passavam disputar o poder político com os novos agentes.` },
      { id: 'E', type: 'text', value: `o crescimento dos conflitos entre os operários empregados nesses empreendimentos e os seus proprietários ligados ao capital internacional.` },
    ],
    correct: 'C',
    explanation: `A Guerra do Contestado teve origem na chegada de ferrovias, serrarias e projetos de colonização que desorganizaram a economia tradicional da região, baseada na posse informal da terra e no extrativismo (como a erva-mate). Expulsos de suas terras e privados de seu modo de vida, posseiros e trabalhadores rurais se revoltaram — por isso C está correta. A (absorção dos rurais pela serraria) e B (desemprego causado por máquinas) não captam a raiz do conflito; D e E deslocam a questão para disputas entre coronéis ou entre operários e patrões, que não foram o cerne do movimento.`,
    subject: ['his'],
    topics: ['República Velha', 'Cidadania, movimentos sociais e trabalho na história', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As secas e o apelo econômico da borracha — produto que, no final do século XIX, alcançava preços altos nos mercados internacionais — motivaram a movimentação de massas humanas oriundas do Nordeste do Brasil para o Acre. Entretanto, até o início do século XX, essa região pertencia à Bolívia, embora a maioria da sua população fosse brasileira e não obedecesse à autoridade boliviana. Para reagir à presença de brasileiros, o governo de La Paz negociou o arrendamento da região a uma entidade internacional, o Bolivian Syndicate, iniciando violentas disputas dos dois lados da fronteira. O conflito só terminou em 1903, com a assinatura do Tratado de Petrópolis, pelo qual o Brasil comprou o território por 2 milhões de libras esterlinas.

Disponível em: www.mre.gov.br. Acesso em: 03 nov. 2008 (adaptado).

Compreendendo o contexto em que ocorreram os fatos apresentados, o Acre tornou-se parte do território nacional brasileiro`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `pela formalização do Tratado de Petrópolis, que indenizava o Brasil pela sua anexação.` },
      { id: 'B', type: 'text', value: `por meio do auxílio do Bolivian Syndicate aos emigrantes brasileiros na região.` },
      { id: 'C', type: 'text', value: `devido à crescente emigração de brasileiros que exploravam os seringais.` },
      { id: 'D', type: 'text', value: `em função da presença de inúmeros imigrantes estrangeiros na região.` },
      { id: 'E', type: 'text', value: `pela indenização que os emigrantes brasileiros pagaram à Bolívia.` },
    ],
    correct: 'C',
    explanation: `O texto mostra que a seca e a alta valorização da borracha levaram milhares de nordestinos a migrar para o Acre, onde exploravam os seringais, formando uma população majoritariamente brasileira num território então boliviano. Essa ocupação de fato, pela crescente emigração de brasileiros, criou as condições que culminaram na incorporação do Acre ao Brasil — por isso C está correta. A está errada porque o Tratado de Petrópolis previa que o Brasil indenizasse a Bolívia (e não o contrário); B inverte o papel do Bolivian Syndicate (empresa que arrendou a região); D e E não correspondem aos fatos narrados.`,
    subject: ['his'],
    topics: ['República Velha', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `No dia 28 de fevereiro de 1985, era inaugurada a Estrada de Ferro Carajás, pertencente e diretamente operada pela Companhia Vale do Rio Doce (CVRD), na região Norte do país, ligando o interior ao principal porto da região, em São Luís. Por seus aproximadamente 900 quilômetros de linha passam hoje 5.353 vagões e 100 locomotivas.

Disponível em: http://www.transportes.gov.br. Acesso em: 27 jul. 2010 (adaptado).

A ferrovia em questão é de extrema importância para a logística do setor primário da economia brasileira, em especial para porções dos estados do Pará e Maranhão. Um argumento que destaca a importância estratégica dessa porção do território é a`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `produção de energia para as principais áreas industriais do país.` },
      { id: 'B', type: 'text', value: `produção sustentável de recursos minerais não metálicos.` },
      { id: 'C', type: 'text', value: `capacidade de produção de minerais metálicos.` },
      { id: 'D', type: 'text', value: `logística de importação de matérias-primas industriais.` },
      { id: 'E', type: 'text', value: `produção de recursos minerais energéticos.` },
    ],
    correct: 'C',
    explanation: `A Estrada de Ferro Carajás escoa a produção mineral da Serra dos Carajás (PA), cuja principal riqueza é o minério de ferro, um mineral metálico. O argumento que destaca a importância estratégica dessa porção do território é, portanto, sua grande capacidade de produção de minerais metálicos — alternativa C. A (produção de energia) e E (minerais energéticos, como carvão e petróleo) não correspondem ao produto de Carajás; B (minerais não metálicos) contraria o tipo de minério explorado; e D (importação de matérias-primas) inverte o fluxo, pois a ferrovia serve à exportação.`,
    subject: ['geo'],
    topics: ['Transportes, comércio e serviços', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A usina hidrelétrica de Belo Monte será construída no rio Xingu, no município de Vitória de Xingu, no Pará. A usina será a terceira maior do mundo e a maior totalmente brasileira, com capacidade de 11,2 mil megawatts. Os índios do Xingu tomam a paisagem com seus cocares, arcos e flechas. Em Altamira, no Pará, agricultores fecharam estradas de uma região que será inundada pelas águas da usina.

BACOCCINA, D.; QUEIROZ, G.; BORGES, R. Fim do leilão, começo da confusão. Istoé Dinheiro. Ano 13, n. 655, abr. 2010 (adaptado).

Os impasses, resistências e desafios associados à construção da Usina Hidrelétrica de Belo Monte estão relacionados`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `ao potencial hidrelétrico dos rios no norte e nordeste, quando comparados às bacias hidrográficas das regiões Sul, Sudeste e Centro-Oeste do país.` },
      { id: 'B', type: 'text', value: `à necessidade de equilibrar e compatibilizar o investimento no crescimento do país com os esforços para a conservação ambiental.` },
      { id: 'C', type: 'text', value: `à grande quantidade de recursos disponíveis para as obras e à escassez dos recursos direcionados para o pagamento pela desapropriação das terras.` },
      { id: 'D', type: 'text', value: `ao direito histórico dos indígenas à posse dessas terras e à ausência de reconhecimento desse direito por parte das empreiteiras.` },
      { id: 'E', type: 'text', value: `ao aproveitamento da mão de obra especializada disponível na região Norte e o interesse das construtoras na vinda de profissionais do Sudeste do país.` },
    ],
    correct: 'B',
    explanation: `A construção de Belo Monte opõe a demanda por geração de energia (crescimento econômico) aos impactos socioambientais sobre o rio Xingu e sobre populações indígenas e ribeirinhas. Os impasses, resistências e desafios estão ligados à necessidade de equilibrar e compatibilizar o crescimento do país com os esforços de conservação ambiental — alternativa B, que abrange o cerne do debate. A apenas compara potenciais hidrelétricos; C e E tratam de recursos financeiros e mão de obra, questões secundárias; e D, embora mencione o direito indígena, restringe o problema a um único aspecto, sem contemplar toda a dimensão socioambiental em jogo.`,
    subject: ['geo'],
    topics: ['Energia', 'Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O Império Inca, que corresponde principalmente aos territórios da Bolívia e do Peru, chegou a englobar enorme contingente populacional. Cuzco, a cidade sagrada, era o centro administrativo, com uma sociedade fortemente estratificada e composta por imperadores, nobres, sacerdotes, funcionários do governo, artesãos, camponeses, escravos e soldados. A religião contava com vários deuses e a base da economia era a agricultura, principalmente o cultivo da batata e do milho.

A principal característica da sociedade inca era a`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `ditadura teocrática que igualava a todos.` },
      { id: 'B', type: 'text', value: `existência da igualdade social e da coletivização da terra.` },
      { id: 'C', type: 'text', value: `estrutura social desigual, compensada pela coletivização de todos os bens.` },
      { id: 'D', type: 'text', value: `existência de mobilidade social, o que levou à composição da elite pelo mérito.` },
      { id: 'E', type: 'text', value: `impossibilidade de se mudar de extrato social e a existência de uma aristocracia hereditária.` },
    ],
    correct: 'E',
    explanation: `A sociedade inca era fortemente estratificada e hierárquica, com uma aristocracia hereditária no topo (imperador, nobres, sacerdotes) e, na base, camponeses, escravos e soldados, sem mobilidade entre os estratos. Por isso sua principal característica era a impossibilidade de mudar de estrato social somada à existência de uma aristocracia hereditária — alternativa E. A (ditadura que igualava a todos), B (igualdade social) e C (compensação pela coletivização dos bens) contrariam a estratificação descrita, e D (mobilidade social por mérito) é o oposto do caráter hereditário da elite inca.`,
    subject: ['his'],
    topics: ['América', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Coube aos Xavante e aos Timbira, povos indígenas do Cerrado, um recente e marcante gesto simbólico: a realização de sua tradicional corrida de toras de buriti em plena Avenida Paulista (SP), para denunciar o cerco de suas terras e a degradação de seus entornos pelo avanço do agronegócio.

RICARDO, B.; RICARDO, F. Povos indígenas do Brasil: 2001-2005. São Paulo: Instituto Socioambiental, 2006 (adaptado).

A questão indígena contemporânea no Brasil evidencia a relação dos usos socioculturais da terra com os atuais problemas socioambientais, caracterizados pelas tensões entre`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a expansão territorial do agronegócio, em especial nas regiões Centro-Oeste e Norte, e as leis de proteção indígena e ambiental.` },
      { id: 'B', type: 'text', value: `os grileiros, articuladores do agronegócio, e os povos indígenas pouco organizados no Cerrado.` },
      { id: 'C', type: 'text', value: `as leis mais brandas sobre o uso tradicional do meio ambiente e as severas leis sobre o uso capitalista do meio ambiente.` },
      { id: 'D', type: 'text', value: `os povos indígenas do Cerrado e os polos econômicos representados pelas elites industriais paulistas.` },
      { id: 'E', type: 'text', value: `o campo e a cidade no Cerrado, que faz com que as terras indígenas dali sejam alvo de invasões urbanas.` },
    ],
    correct: 'A',
    explanation: `A corrida de toras dos Xavante e Timbira na Avenida Paulista denunciou o cerco às terras indígenas pelo avanço do agronegócio. A questão indígena contemporânea evidencia a tensão entre a expansão territorial do agronegócio, sobretudo nas regiões Centro-Oeste e Norte, e as leis de proteção indígena e ambiental — alternativa A. B e D deslocam o conflito para grileiros ou polos industriais paulistas; C inverte a lógica das leis (as de proteção ambiental não são mais brandas); e E reduz o problema a invasões urbanas, o que não corresponde ao avanço do agronegócio sobre os territórios.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Os vestígios dos povos Tupi-guarani encontram-se desde as Missões e o rio da Prata, ao sul, até o Nordeste, com algumas ocorrências ainda mal conhecidas no sul da Amazônia. A leste, ocupavam toda a faixa litorânea desde o Rio Grande do Sul até o Maranhão. A oeste, aparecem no rio da Prata, no Paraguai e nas terras baixas da Bolívia. Evitam as terras inundáveis do Pantanal e marcam sua presença discretamente nos cerrados do Brasil central. De fato, ocuparam de preferência as regiões de floresta tropical e subtropical.

PROUS, A. O Brasil antes dos brasileiros. Rio de Janeiro: Jorge Zahar Editor, 2005.

Os povos indígenas citados possuíam tradições culturais específicas que os distinguiam de outras sociedades indígenas e dos colonizadores europeus. Entre as tradições tupi-guarani, destacava-se`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a organização em aldeias politicamente independentes, dirigidas por um chefe eleito pelos indivíduos mais velhos da tribo.` },
      { id: 'B', type: 'text', value: `a ritualização da guerra entre as tribos e o caráter semissedentário de sua organização social.` },
      { id: 'C', type: 'text', value: `a conquista de terras mediante operações militares, o que permitiu seu domínio sobre vasto território.` },
      { id: 'D', type: 'text', value: `o caráter pastoril de sua economia, que prescindia da agricultura para investir na criação de animais.` },
      { id: 'E', type: 'text', value: `o desprezo pelos rituais antropofágicos praticados em outras sociedades indígenas.` },
    ],
    correct: 'B',
    explanation: `Entre as tradições tupi-guarani destacavam-se a ritualização da guerra entre as tribos — ligada à honra e à vingança, inclusive em práticas antropofágicas — e o caráter semissedentário de sua organização social, com deslocamentos periódicos das aldeias. Por isso B está correta. A erra ao afirmar que o chefe era eleito pelos mais velhos; C atribui-lhes conquista militar de vasto território, o que não ocorria; D nega a agricultura, que praticavam (mandioca, milho); e E nega os rituais antropofágicos, que de fato existiam entre esses povos.`,
    subject: ['his'],
    topics: ['África e povos indígenas', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Os tropeiros foram figuras decisivas na formação de vilarejos e cidades do Brasil colonial. A palavra tropeiro vem de "tropa", que no passado se referia ao conjunto de homens que transportava gado e mercadoria. Por volta do século XVIII, muita coisa era levada de um lugar a outro no lombo de mulas. O tropeirismo acabou associado à atividade mineradora, cujo auge foi a exploração de ouro em Minas Gerais e, mais tarde, em Goiás. A extração de pedras preciosas também atraiu grandes contingentes populacionais para as novas áreas e, por isso, era cada vez mais necessário dispor de alimentos e produtos básicos. A alimentação dos tropeiros era constituída por toucinho, feijão preto, farinha, pimenta-do-reino, café, fubá e coité (um molho de vinagre com fruto cáustico espremido). Nos pousos, os tropeiros comiam feijão quase sem molho, com pedaços de carne de sol e toucinho, que era servido com farofa e couve picada. O feijão tropeiro é um dos pratos típicos da cozinha mineira e recebe esse nome porque era preparado pelos cozinheiros das tropas que conduziam o gado.

Disponível em: http://www.tribunadoplanalto.com.br. Acesso em: 27 nov. 2008.

A criação do feijão tropeiro na culinária brasileira está relacionada à`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `atividade comercial exercida pelos homens que trabalhavam nas minas.` },
      { id: 'B', type: 'text', value: `atividade culinária exercida pelos moradores cozinheiros que viviam nas regiões das minas.` },
      { id: 'C', type: 'text', value: `atividade mercantil exercida pelos homens que transportavam gado e mercadoria.` },
      { id: 'D', type: 'text', value: `atividade agropecuária exercida pelos tropeiros, que necessitavam dispor de alimentos.` },
      { id: 'E', type: 'text', value: `atividade mineradora exercida pelos tropeiros no auge da exploração do ouro.` },
    ],
    correct: 'C',
    explanation: `Os tropeiros eram os homens que, em tropas de mulas, transportavam gado e mercadorias entre regiões distantes, abastecendo sobretudo as áreas de mineração. O feijão tropeiro surgiu dessa atividade mercantil/de transporte, sendo preparado pelos cozinheiros das tropas durante os pousos — por isso está relacionado à atividade mercantil exercida por quem transportava gado e mercadoria, alternativa C. A e E associam o prato diretamente à mineração; B o liga aos moradores das minas; e D fala em atividade agropecuária, todas deslocando a origem, que está no tropeirismo (transporte e comércio).`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Quem construiu a Tebas de sete portas?
Nos livros estão nomes de reis.
Arrastaram eles os blocos de pedra?
E a Babilônia várias vezes destruída. Quem a reconstruiu tantas vezes?
Em que casas da Lima dourada moravam os construtores?
Para onde foram os pedreiros, na noite em que a Muralha da China ficou pronta?
A grande Roma está cheia de arcos do triunfo. Quem os ergueu? Sobre quem triunfaram os césares?

BRECHT, B. Perguntas de um trabalhador que lê. Disponível em: http://recantodasletras.uol.com.br. Acesso em: 28 abr. 2010.

Partindo das reflexões de um trabalhador que lê um livro de História, o autor censura a memória construída sobre determinados monumentos e acontecimentos históricos. A crítica refere-se ao fato de que`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `os agentes históricos de uma determinada sociedade deveriam ser aqueles que realizaram feitos heroicos ou grandiosos e, por isso, ficaram na memória.` },
      { id: 'B', type: 'text', value: `a História deveria se preocupar em memorizar os nomes de reis ou dos governantes das civilizações que se desenvolveram ao longo do tempo.` },
      { id: 'C', type: 'text', value: `os grandes monumentos históricos foram construídos por trabalhadores, mas sua memória está vinculada aos governantes das sociedades que os construíram.` },
      { id: 'D', type: 'text', value: `os trabalhadores consideram que a História é uma ciência de difícil compreensão, pois trata de sociedades antigas e distantes no tempo.` },
      { id: 'E', type: 'text', value: `as civilizações citadas no texto, embora muito importantes, permanecem sem terem sido alvos de pesquisas históricas.` },
    ],
    correct: 'C',
    explanation: `No poema de Brecht, o trabalhador que lê questiona quem realmente construiu as grandes obras da história (Tebas, Babilônia, a Muralha da China, Roma). A crítica é que esses monumentos foram erguidos pelo trabalho anônimo das massas, mas a memória histórica os vincula apenas aos reis e governantes das sociedades que os construíram — por isso C está correta. A e B reproduzem justamente a visão criticada (a história dos heróis e dos nomes de reis); D e E distorcem o sentido, afirmando que os trabalhadores veem a história como incompreensível ou que tais civilizações não teriam sido estudadas.`,
    subject: ['his'],
    topics: ['Cidadania, movimentos sociais e trabalho na história', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As ruínas do povoado de Canudos, no sertão norte da Bahia, além de significativas para a identidade cultural dessa região, são úteis às investigações sobre a Guerra de Canudos e o modo de vida dos antigos revoltosos.

Essas ruínas foram reconhecidas como patrimônio cultural material pelo Iphan (Instituto do Patrimônio Histórico e Artístico Nacional) porque reúnem um conjunto de`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `objetos arqueológicos e paisagísticos.` },
      { id: 'B', type: 'text', value: `acervos museológicos e bibliográficos.` },
      { id: 'C', type: 'text', value: `núcleos urbanos e etnográficos.` },
      { id: 'D', type: 'text', value: `práticas e representações de uma sociedade.` },
      { id: 'E', type: 'text', value: `expressões e técnicas de uma sociedade extinta.` },
    ],
    correct: 'A',
    explanation: `As ruínas de Canudos foram reconhecidas como patrimônio cultural material pelo Iphan por reunirem vestígios físicos — objetos arqueológicos e elementos paisagísticos — que permitem investigar a Guerra de Canudos e o modo de vida dos antigos revoltosos. Patrimônio material refere-se a bens tangíveis, daí a alternativa A. B (acervos museológicos e bibliográficos) e C (núcleos urbanos e etnográficos) não descrevem ruínas; D (práticas e representações) e E (expressões e técnicas) remetem ao patrimônio imaterial, e não ao caráter arqueológico e paisagístico das ruínas.`,
    subject: ['his'],
    topics: ['República Velha', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Substitui-se, então, uma história crítica profunda por uma crônica de detalhes, onde o patriotismo e a bravura dos nossos soldados encobrem a vilania dos motivos que levaram a Inglaterra a armar brasileiros e argentinos para a destruição da mais gloriosa república que já se viu na América Latina: a do Paraguai.

CHIAVENATTO, J. J. Genocídio americano: A Guerra do Paraguai. São Paulo: Brasiliense, 1979 (adaptado).

O imperialismo inglês "destruindo o Paraguai, mantém o status quo na América Meridional, impedindo a ascensão do seu único Estado economicamente livre". Essa teoria conspiratória vai contra a realidade dos fatos e não tem provas documentais. Contudo, essa teoria tem alguma repercussão.

DORATIOTO, F. Maldita guerra: nova história da Guerra do Paraguai. São Paulo: Cia das Letras, 2002 (adaptado).

Uma leitura dessas narrativas divergentes demonstra que ambas estão refletindo sobre`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a carência de fontes para a pesquisa sobre os reais motivos dessa Guerra.` },
      { id: 'B', type: 'text', value: `o caráter positivista das diferentes versões sobre essa Guerra.` },
      { id: 'C', type: 'text', value: `o resultado das intervenções britânicas nos cenários de batalha.` },
      { id: 'D', type: 'text', value: `a dificuldade de elaborar explicações convincentes sobre os motivos dessa Guerra.` },
      { id: 'E', type: 'text', value: `o nível de crueldade das ações do exército brasileiro e argentino durante o conflito.` },
    ],
    correct: 'D',
    explanation: `Os dois textos apresentam versões divergentes sobre as causas da Guerra do Paraguai: um atribui a culpa ao patriotismo encobridor e à vilania das potências; o outro critica a teoria conspiratória do imperialismo inglês por falta de provas documentais. O que ambas as narrativas revelam é a dificuldade de elaborar explicações convincentes e consensuais sobre os motivos dessa guerra — alternativa D. A (carência de fontes) não procede, pois há interpretações baseadas em fontes; B (caráter positivista) e C (resultado das intervenções britânicas) não são o ponto comum; e E (crueldade do exército) desloca a discussão dos motivos para a conduta.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Negro, filho de escrava e fidalgo português, o baiano Luiz Gama fez da lei e das letras suas armas na luta pela liberdade. Foi vendido ilegalmente como escravo pelo seu pai para cobrir dívidas de jogo. Sabendo ler e escrever aos 18 anos de idade, conseguiu provas de que havia nascido livre. Autodidata, advogado sem diploma, fez do direito o seu oficio e transformou-se, em pouco tempo, em proeminente advogado da causa abolicionista.

AZEVEDO, E. O Orfeu de carapinha. In: Revista de História. Ano 1, n. 3. Rio de Janeiro: Biblioteca Nacional, jan. 2004 (adaptado).

A conquista da liberdade pelos afro-brasileiros na segunda metade do séc. XIX foi resultado de importantes lutas sociais condicionadas historicamente. A biografia de Luiz Gama exemplifica a`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `impossibilidade de ascensão social do negro forro em uma sociedade escravocrata, mesmo sendo alfabetizado.` },
      { id: 'B', type: 'text', value: `extrema dificuldade de projeção dos intelectuais negros nesse contexto e a utilização do Direito como canal de luta pela liberdade.` },
      { id: 'C', type: 'text', value: `rigidez de uma sociedade assentada na escravidão, que inviabilizava os mecanismos de ascensão social.` },
      { id: 'D', type: 'text', value: `possibilidade de ascensão social viabilizada pelo apoio das elites dominantes a um mestiço, filho de pai português.` },
      { id: 'E', type: 'text', value: `troca de favores entre um representante negro e a elite agrária escravista, que outorgara o direito advocatício ao mesmo.` },
    ],
    correct: 'B',
    explanation: `Luiz Gama, negro e autodidata, tornou-se advogado e fez do Direito seu instrumento de luta pela liberdade e pela abolição, apesar das enormes dificuldades impostas a um intelectual negro numa sociedade escravista. Sua trajetória exemplifica tanto a extrema dificuldade de projeção dos intelectuais negros quanto a utilização do Direito como canal de luta pela liberdade — alternativa B. A e C negam qualquer possibilidade de ascensão, o que a própria biografia contraria; D atribui o êxito ao apoio das elites dominantes; e E reduz tudo a uma troca de favores, desconsiderando o protagonismo e a luta de Luiz Gama.`,
    subject: ['his'],
    topics: ['Escravidão, resistência e abolição', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Eu, o Príncipe Regente, faço saber aos que o presente Alvará virem que, desejando promover e adiantar a riqueza nacional, e sendo um dos mananciais dela as manufaturas e a indústria, sou servido abolir e revogar toda e qualquer proibição que haja a este respeito no Estado do Brasil.

Alvará de liberdade para as indústrias, 1º de Abril de 1808. In: Bonavides, P.; Amaral, R. Textos políticos da História do Brasil. Vol. 1. Brasília: Senado Federal, 2002 (adaptado).

O projeto industrializante de D. João, conforme expresso no alvará, não se concretizou. Que características desse período explicam esse fato?`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `A ocupação de Portugal pelas tropas francesas e o fechamento das manufaturas portuguesas.` },
      { id: 'B', type: 'text', value: `A dependência portuguesa da Inglaterra e o predomínio industrial inglês sobre suas redes de comércio.` },
      { id: 'C', type: 'text', value: `A desconfiança da burguesia industrial colonial diante da chegada da família real portuguesa.` },
      { id: 'D', type: 'text', value: `O confronto entre a França e a Inglaterra e a posição dúbia assumida por Portugal no comércio internacional.` },
      { id: 'E', type: 'text', value: `O atraso industrial da colônia, provocado pela perda de mercados para as indústrias portuguesas.` },
    ],
    correct: 'B',
    explanation: `Embora o Alvará de 1808 autorizasse a instalação de manufaturas no Brasil, o projeto industrializante de D. João não se concretizou porque Portugal era economicamente dependente da Inglaterra, cujo predomínio industrial e comercial — reforçado por tratados como o de 1810 — inviabilizava a indústria local, inundada por produtos ingleses. Por isso B está correta. A (ocupação francesa e fechamento das manufaturas portuguesas) não explica o fracasso industrial na colônia; e C, D e E deslocam os fatores (desconfiança da burguesia, posição dúbia de Portugal, perda de mercados), sem captar a dependência inglesa como causa central.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Em 2008, foram comemorados os 200 anos da mudança da família real portuguesa para o Brasil, onde foi instalada a sede do reino. Uma sequência de eventos importantes ocorreu no período de 1808-1821, durante os 13 anos em que D. João VI e a família real portuguesa permaneceram no Brasil.

Entre esses eventos, destacam-se os seguintes:
1. Bahia — 1808: Parada do navio que trazia a família real portuguesa para o Brasil, sob a proteção da marinha britânica, fugindo de um possível ataque de Napoleão.
2. Rio de Janeiro — 1808: desembarque da família real portuguesa na cidade onde residiriam durante sua permanência no Brasil.
3. Salvador — 1810: D. João VI assina a carta régia de abertura dos portos ao comércio de todas as nações amigas, ato antecipadamente negociado com a Inglaterra em troca da escolta dada à esquadra portuguesa.
4. Rio de Janeiro — 1816: D. João VI torna-se rei do Brasil e de Portugal devido à morte de sua mãe, D. Maria I.
5. Pernambuco — 1817: As tropas de D. João VI sufocam a revolução republicana.

GOMES, L. 1808: como uma rainha louca, um príncipe medroso e uma corte corrupta enganaram Napoleão e mudaram a história de Portugal e do Brasil. São Paulo: Editora Planeta, 2007 (adaptado).

Uma das consequências desses eventos foi`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a decadência do império britânico, em razão do contrabando de produtos ingleses através dos portos brasileiros.` },
      { id: 'B', type: 'text', value: `o fim do comércio de escravos no Brasil, porque a Inglaterra decretara, em 1806, a proibição do tráfico de escravos em seus domínios.` },
      { id: 'C', type: 'text', value: `a conquista da região do rio da Prata, em represália à aliança entre a Espanha e a França de Napoleão.` },
      { id: 'D', type: 'text', value: `a abertura de estradas, que permitiu o rompimento do isolamento que vigorava entre as províncias do país, o que dificultava a comunicação antes de 1808.` },
      { id: 'E', type: 'text', value: `o grande desenvolvimento econômico de Portugal após a vinda de D. João VI para o Brasil, uma vez que cessaram as despesas de manutenção do rei e de sua família.` },
    ],
    correct: 'C',
    explanation: `Entre 1808 e 1821, a política externa joanina, alinhada à Inglaterra e hostil a Napoleão, levou o Brasil a avançar sobre territórios vizinhos ligados à Espanha e à França — como a conquista da Banda Oriental (região do Prata) e de Caiena. A conquista da região do Prata, em represália à aliança entre a Espanha e a França napoleônica, foi assim uma consequência desses eventos — alternativa C. As demais são factualmente erradas: a vinda da corte não causou a decadência britânica (A), nem o fim do tráfico de escravos (B), nem o rompimento do isolamento interno por estradas (D), nem o desenvolvimento de Portugal (E), que ficou empobrecido.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `I. Para consolidar-se como governo, a República precisava eliminar as arestas, conciliar-se com o passado monarquista, incorporar distintas vertentes do republicanismo. Tiradentes não deveria ser visto como herói republicano radical, mas sim como herói cívico-religioso, como mártir integrador, portador da imagem do povo inteiro.

CARVALHO, J. M. C. A formação das almas: O imaginário da República no Brasil. São Paulo: Companhia das Letras, 1990.

I. — Ei-lo o gigante da praça! O Cristo da multidão! É Tiradentes quem passa! Deixem passar o Titão!

ALVES, C. Gonzaga ou a revolução de Minas. In: CARVALHO, J. M. C. A formação das almas: O imaginário da República no Brasil. São Paulo: Companhia das Letras, 1990.

A 1ª República brasileira, nos seus primórdios, precisava constituir uma figura heroica capaz de congregar diferenças e sustentar simbolicamente o novo regime. Optando pela figura de Tiradentes, deixou de lado figuras como Frei Caneca ou Bento Gonçalves. A transformação do inconfidente em herói nacional evidencia que o esforço de construção de um simbolismo por parte da República estava relacionado`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `ao caráter nacionalista e republicano da Inconfidência, evidenciado nas ideias e na atuação de Tiradentes.` },
      { id: 'B', type: 'text', value: `à identificação da Conjuração Mineira como o movimento precursor do positivismo brasileiro.` },
      { id: 'C', type: 'text', value: `ao fato de a proclamação da República ter sido um movimento de poucas raízes populares, que precisava de legitimação.` },
      { id: 'D', type: 'text', value: `à semelhança física entre Tiradentes e Jesus, que proporcionaria a um povo católico, como o brasileiro, uma fácil identificação.` },
      { id: 'E', type: 'text', value: `ao fato de Frei Caneca e Bento Gonçalves terem liderado movimentos separatistas no Nordeste e no Sul do país.` },
    ],
    correct: 'C',
    explanation: `A escolha de Tiradentes como herói cívico-religioso, em vez de figuras como Frei Caneca ou Bento Gonçalves, mostra que a República recém-proclamada precisava de um símbolo capaz de legitimá-la e congregar diferentes vertentes, já que a Proclamação de 1889 tivera poucas raízes populares. Por isso C está correta. A exagera o caráter nacionalista e republicano da Inconfidência; B liga indevidamente Tiradentes ao positivismo; D reduz tudo à semelhança física com Jesus; e E inverte o argumento, pois Frei Caneca e Bento Gonçalves foram justamente preteridos por seu caráter separatista regional.`,
    subject: ['his'],
    topics: ['República Velha', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O artigo 402 do Código penal Brasileiro de 1890 dizia:

Fazer nas ruas e praças públicas exercícios de agilidade e destreza corporal conhecidos pela denominação de capoeiragem; andar em correrias, com armas ou instrumentos capazes de produzir uma lesão corporal, provocando tumulto ou desordens.
Pena: Prisão de dois a seis meses.

SOARES, C. E. L. A Negregada instituição: os capoeiras no Rio de Janeiro: 1850-1890. Rio de Janeiro: Secretaria Municipal de Cultura, 1994 (adaptado).

O artigo do primeiro Código Penal Republicano naturaliza medidas socialmente excludentes. Nesse contexto, tal regulamento expressava`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a manutenção de parte da legislação do Império, com vistas ao controle da criminalidade urbana.` },
      { id: 'B', type: 'text', value: `a defesa do retorno do cativeiro e escravidão pelos primeiros governos do período republicano.` },
      { id: 'C', type: 'text', value: `o caráter disciplinador de uma sociedade industrializada, desejosa de um equilíbrio entre progresso e civilização.` },
      { id: 'D', type: 'text', value: `a criminalização de práticas culturais e a persistência de valores que vinculavam certos grupos ao passado de escravidão.` },
      { id: 'E', type: 'text', value: `o poder do regime escravista, que mantinha os negros como categoria social inferior, discriminada e segregada.` },
    ],
    correct: 'D',
    explanation: `O artigo 402 do Código Penal de 1890 criminalizava a capoeiragem, prática cultural de forte presença entre a população negra recém-libertada. Isso revela a criminalização de práticas culturais e a persistência de valores que vinculavam certos grupos ao passado de escravidão, mantendo-os sob controle e exclusão social — alternativa D. A e B tratam de manutenção da legislação do Império ou de retorno ao cativeiro, o que não se aplica; C associa a medida a uma sociedade industrializada em busca de equilíbrio; e E, embora toque na inferiorização do negro, não capta o cerne, que é a criminalização de uma prática cultural.`,
    subject: ['his'],
    topics: ['Escravidão, resistência e abolição', 'República Velha', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Em nosso país, queremos substituir o egoísmo pela moral, a honra pela probidade, os usos pelos princípios, as conveniências pelos deveres, a tirania da moda pelo império da razão, o desprezo à desgraça pelo desprezo ao vício, a insolência pelo orgulho, a vaidade pela grandeza de alma, o amor ao dinheiro pelo amor à glória, a boa companhia pelas boas pessoas, a intriga pelo mérito, o espirituoso pelo gênio, o brilho pela verdade, o tédio da volúpia pelo encanto da felicidade, a mesquinharia dos grandes pela grandeza do homem.

HUNT, L. Revolução Francesa e Vida Privada. In: PERROT, M. (Org.). História da Vida Privada: da Revolução Francesa à Primeira Guerra. Vol. 4. São Paulo: Companhia das Letras, 1991 (adaptado).

O discurso de Robespierre, de 5 de fevereiro de 1794, do qual o trecho transcrito é parte, relaciona-se a qual dos grupos político-sociais envolvidos na Revolução Francesa?`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `À alta burguesia, que desejava participar do poder legislativo francês como força política dominante.` },
      { id: 'B', type: 'text', value: `Ao clero francês, que desejava justiça social e era ligado à alta burguesia.` },
      { id: 'C', type: 'text', value: `A militares oriundos da pequena e média burguesia, que derrotaram as potências rivais e queriam reorganizar a França internamente.` },
      { id: 'D', type: 'text', value: `À nobreza esclarecida, que, em função do seu contato com os intelectuais iluministas, desejava extinguir o absolutismo francês.` },
      { id: 'E', type: 'text', value: `Aos representantes da pequena e média burguesia e das camadas populares, que desejavam justiça social e direitos políticos.` },
    ],
    correct: 'E',
    explanation: `O discurso de Robespierre, líder jacobino, em 1794 defendia substituir o egoísmo pela moral e os privilégios pela virtude e pela igualdade, posicionando-se em nome dos interesses populares. Ele relaciona-se aos representantes da pequena e média burguesia e às camadas populares (sans-culottes), que desejavam justiça social e direitos políticos — alternativa E. A (alta burguesia) e D (nobreza esclarecida) representam grupos que os jacobinos combatiam; B (clero ligado à alta burguesia) e C (militares que reorganizariam a França) não correspondem ao grupo jacobino-popular expresso no discurso.`,
    subject: ['his'],
    topics: ['Iluminismo e Revoluções', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A política foi inicialmente a arte de impedir as pessoas de se ocuparem do que lhes diz respeito. Posteriormente, passou a ser a arte de compelir as pessoas a decidirem sobre aquilo de que nada entendem.

VALÉRY, P. Cadernos. Apud BENEVIDES, M. V. M. A cidadania ativa. São Paulo: Ática, 1996.

Nessa definição, o autor entende que a história da política está dividida em dois momentos principais: um primeiro, marcado pelo autoritarismo excludente, e um segundo, caracterizado por uma democracia incompleta.

Considerando o texto, qual é o elemento comum a esses dois momentos da história política?`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `A distribuição equilibrada do poder.` },
      { id: 'B', type: 'text', value: `O impedimento da participação popular.` },
      { id: 'C', type: 'text', value: `O controle das decisões por uma minoria.` },
      { id: 'D', type: 'text', value: `A valorização das opiniões mais competentes.` },
      { id: 'E', type: 'text', value: `A sistematização dos processos decisórios.` },
    ],
    correct: 'C',
    explanation: `Segundo Valéry, a política foi primeiro a arte de impedir as pessoas de cuidarem do que lhes diz respeito (autoritarismo excludente) e, depois, a de compeli-las a decidir sobre o que não entendem (democracia incompleta). O elemento comum aos dois momentos é que, em ambos, as decisões permanecem sob o controle de uma minoria — alternativa C. B (impedimento da participação popular) descreve bem apenas o primeiro momento, pois no segundo há participação, ainda que manipulada; e A, D e E não expressam esse traço compartilhado de concentração do poder decisório.`,
    subject: ['soc'],
    topics: ['Estado, poder, cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O príncipe, portanto, não deve se incomodar com a reputação de cruel, se seu propósito é manter o povo unido e leal. De fato, com uns poucos exemplos duros, poderá ser mais clemente do que outros que, por muita piedade, permitem os distúrbios que levem ao assassínio e ao roubo.

MAQUIAVEL, N. O Príncipe. São Paulo: Martin Claret, 2009.

No século XVI, Maquiavel escreveu O Príncipe, reflexão sobre a Monarquia e a função do governante. A manutenção da ordem social, segundo esse autor, baseava-se na`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `inércia do julgamento de crimes polêmicos.` },
      { id: 'B', type: 'text', value: `bondade em relação ao comportamento dos mercenários.` },
      { id: 'C', type: 'text', value: `compaixão quanto à condenação de transgressões religiosas.` },
      { id: 'D', type: 'text', value: `neutralidade diante da condenação dos servos.` },
      { id: 'E', type: 'text', value: `conveniência entre o poder tirânico e a moral do príncipe.` },
    ],
    correct: 'E',
    explanation: `Em O Príncipe, Maquiavel defende que a manutenção da ordem social justifica o uso pragmático da força: o governante não deve temer a fama de cruel se poucos atos de rigor mantiverem o povo unido e leal, evitando desordens maiores (assassínios e roubos). A ordem, portanto, baseia-se na conveniência entre o exercício do poder, inclusive tirânico, e a moral do príncipe, subordinada aos fins políticos — alternativa E. As demais (inércia no julgamento de crimes, bondade com mercenários, compaixão em transgressões religiosas, neutralidade diante dos servos) não traduzem o realismo político maquiaveliano de que os fins justificam os meios.`,
    subject: ['fil'],
    topics: ['Filosofia moderna: política', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Após a abdicação de D. Pedro I, o Brasil atravessou um período marcado por inúmeras crises: as diversas forças políticas lutavam pelo poder e as reivindicações populares eram por melhores condições de vida e pelo direito de participação na vida política do país. Os conflitos representavam também o protesto contra a centralização do governo. Nesse período, ocorreu também a expansão da cultura cafeeira e o surgimento do poderoso grupo dos "barões do café", para o qual era fundamental a manutenção da escravidão e do tráfico negreiro.

O contexto do Período Regencial foi marcado`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `por revoltas populares que reclamavam a volta da monarquia.` },
      { id: 'B', type: 'text', value: `por várias crises e pela submissão das forças políticas ao poder central.` },
      { id: 'C', type: 'text', value: `pela luta entre os principais grupos políticos que reivindicavam melhores condições de vida.` },
      { id: 'D', type: 'text', value: `pelo governo dos chamados regentes, que promoveram a ascensão social dos "barões do café".` },
      { id: 'E', type: 'text', value: `pela convulsão política e por novas realidades econômicas que exigiam o reforço de velhas realidades sociais.` },
    ],
    correct: 'E',
    explanation: `O Período Regencial (1831-1840) foi marcado por intensa instabilidade: disputas entre grupos políticos, revoltas populares e provinciais e tensões entre centralização e descentralização, num contexto de transformações econômicas (expansão cafeeira) que, contudo, exigiam a manutenção de velhas estruturas sociais, como a escravidão. Por isso E está correta, ao falar em convulsão política e novas realidades econômicas que reforçavam realidades sociais antigas. A reduz o período à volta da monarquia; B afirma submissão das forças ao poder central, o oposto da fragmentação regencial; e C e D simplificam ou distorcem o papel dos grupos políticos e do governo regencial.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `De março de 1931 a fevereiro de 1940, foram decretadas mais de 150 leis novas de proteção social e de regulamentação do trabalho em todos os seus setores. Todas elas têm sido simplesmente uma dádiva do governo. Desde aí, o trabalhador brasileiro encontra, nos quadros gerais do regime, o seu verdadeiro lugar.

DANTAS, M. A força nacionalizadora do Estado Novo. Rio de Janeiro: DIP, 1942. Apud BERCITO, S. R. Nos tempos de Getúlio: da revolução de 30 ao fim do Estado Novo. São Paulo: Atual, 1990.

A adoção de novas políticas públicas e as mudanças jurídico-institucionais ocorridas no Brasil com a ascensão de Getúlio Vargas ao poder evidenciam o papel histórico de certas lideranças e a importância das lutas sociais na conquista da cidadania. Desse processo resultou a`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `criação do Ministério do Trabalho, Indústria e Comércio, que garantiu ao operariado autonomia para o exercício de atividades sindicais.` },
      { id: 'B', type: 'text', value: `legislação previdenciária que proibiu migrantes de ocuparem cargos de direção nos sindicatos.` },
      { id: 'C', type: 'text', value: `criação da Justiça do Trabalho para coibir ideologias consideradas perturbadoras da "harmonia social".` },
      { id: 'D', type: 'text', value: `legislação trabalhista que atendeu reivindicações dos operários, garantindo-lhes vários direitos e formas de proteção.` },
      { id: 'E', type: 'text', value: `decretação da Consolidação das Leis do Trabalho (CLT), que impediu o controle estatal sobre as atividades políticas da classe operária.` },
    ],
    correct: 'D',
    explanation: `A ascensão de Getúlio Vargas foi acompanhada da criação de ampla legislação trabalhista que atendeu a diversas reivindicações históricas dos operários (jornada, férias, salário mínimo, previdência), garantindo-lhes direitos e formas de proteção — alternativa D. A erra ao afirmar que o Ministério do Trabalho deu autonomia sindical, quando o sindicalismo foi atrelado ao Estado; B e C distorcem o sentido da legislação previdenciária e da Justiça do Trabalho; e E erra sobre a CLT, que regulou as relações de trabalho sob tutela estatal e não impediu o controle do Estado sobre a classe operária.`,
    subject: ['his'],
    topics: ['Era Vargas', 'Cidadania, movimentos sociais e trabalho na história', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Não é difícil entender o que ocorreu no Brasil nos anos imediatamente anteriores ao golpe militar de 1964. A diminuição da oferta de empregos e a desvalorização dos salários, provocadas pela inflação, levaram a uma intensa mobilização política popular, marcada por sucessivas ondas grevistas de várias categorias profissionais, o que aprofundou as tensões sociais. Dessa vez, as classes trabalhadoras se recusaram a pagar o pato pelas "sobras" do modelo econômico juscelinista.

MENDONÇA, S. R. A Industrialização Brasileira. São Paulo: Moderna, 2002 (adaptado).

Segundo o texto, os conflitos sociais ocorridos no início dos anos 1960 decorreram principalmente`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `da manipulação política empreendida pelo governo João Goulart.` },
      { id: 'B', type: 'text', value: `das contradições econômicas do modelo desenvolvimentista.` },
      { id: 'C', type: 'text', value: `do poder político adquirido pelos sindicatos populistas.` },
      { id: 'D', type: 'text', value: `da desmobilização das classes dominantes frente ao avanço das greves.` },
      { id: 'E', type: 'text', value: `da recusa dos sindicatos em aceitar mudanças na legislação trabalhista.` },
    ],
    correct: 'B',
    explanation: `O texto aponta que, antes de 1964, a inflação corroía salários e empregos, gerando intensa mobilização e greves. Esses conflitos decorreram, principalmente, das contradições econômicas do modelo desenvolvimentista (a industrialização acelerada do período JK), que concentrou renda e gerou desequilíbrios sociais agravados pela inflação — alternativa B. A atribui tudo à manipulação do governo Goulart; C e D superestimam ou invertem o papel dos sindicatos e das classes dominantes; e E foca na recusa sindical a mudanças legais, que não é a causa estrutural apontada pelo texto.`,
    subject: ['his'],
    topics: ['República Populista', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A lei não nasce da natureza, junto das fontes frequentadas pelos primeiros pastores: a lei nasce das batalhas reais, das vitórias, dos massacres, das conquistas que têm sua data e seus heróis de horror: a lei nasce das cidades incendiadas, das terras devastadas; ela nasce com os famosos inocentes que agonizam no dia que está amanhecendo.

FOUCAULT, M. Aula de 14 de janeiro de 1976. In: Em defesa da sociedade. São Paulo: Martins Fontes, 1999.

O filósofo Michel Foucault (séc. XX) inova ao pensar a política e a lei em relação ao poder e à organização social. Com base na reflexão de Foucault, a finalidade das leis na organização das sociedades modernas é`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `combater ações violentas na guerra entre as nações.` },
      { id: 'B', type: 'text', value: `coagir e servir para refrear a agressividade humana.` },
      { id: 'C', type: 'text', value: `criar limites entre a guerra e a paz praticadas entre os indivíduos de uma mesma nação.` },
      { id: 'D', type: 'text', value: `estabelecer princípios éticos que regulamentam as ações bélicas entre países inimigos.` },
      { id: 'E', type: 'text', value: `organizar as relações de poder na sociedade e entre os Estados.` },
    ],
    correct: 'E',
    explanation: `Para Foucault, a lei não nasce da natureza nem de uma razão pacificadora, mas das batalhas reais, das conquistas, dos massacres e das relações de força. Assim, a finalidade das leis é organizar e institucionalizar as relações de poder na sociedade e entre os Estados, cristalizando resultados de conflitos — alternativa E. A, B, C e D partem de uma visão idealizada ou contratualista da lei como instrumento de paz, ética ou contenção da agressividade, justamente o que Foucault recusa ao enfatizar o poder e o conflito como origem do direito.`,
    subject: ['fil'],
    topics: ['Filosofia contemporânea', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Opinião

Podem me prender
Podem me bater
Podem até deixar-me sem comer
Que eu não mudo de opinião.
Aqui do morro eu não saio não
Aqui do morro eu não saio não.

Se não tem água
Eu furo um poço

Se não tem carne
Eu compro um osso e ponho na sopa
E deixa andar, deixa andar...

Falem de mim
Quem quiser falar
Aqui eu não pago aluguel
Se eu morrer amanhã seu doutor,
Estou pertinho do céu

Zé Kéti. Opinião. Disponível em: http://www.mpbnet.com.br. Acesso em: 28 abr. 2010.

Essa música fez parte de um importante espetáculo teatral, que estreou no ano de 1964, no Rio de Janeiro. O papel exercido pela Música Popular Brasileira (MPB) nesse contexto, evidenciado pela letra de música citada, foi o de`,
    image: null,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `entretenimento para os grupos intelectuais.` },
      { id: 'B', type: 'text', value: `valorização do progresso econômico do país.` },
      { id: 'C', type: 'text', value: `crítica à passividade dos setores populares.` },
      { id: 'D', type: 'text', value: `denúncia da situação social e política do país.` },
      { id: 'E', type: 'text', value: `mobilização dos setores que apoiavam a Ditadura Militar.` },
    ],
    correct: 'D',
    explanation: `A canção Opinião, de Zé Ketti, apresentada em 1964 no início da ditadura militar, expressa a resistência e a voz dos excluídos ("aqui do morro eu não saio não"). O papel da MPB nesse contexto foi o de denúncia da situação social e política do país, funcionando como instrumento de crítica e resistência — alternativa D. A (entretenimento para intelectuais) e B (valorização do progresso) banalizam a canção; C inverte o sentido, pois a música valoriza a resistência popular em vez de criticá-la; e E associa a MPB ao apoio à ditadura, o contrário do que a letra expressa.`,
    subject: ['soc'],
    topics: ['Cultura, identidade e diversidade', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A chegada da televisão

A caixa de pandora tecnológica penetra nos lares e libera suas cabeças falantes, astros, novelas, noticiários e as fabulosas, irresistíveis garotas-propaganda, versões modernizadas do tradicional homem-sanduíche.

SEVCENKO, N. (Org.). História da Vida Privada no Brasil 3. República: da Belle Époque à Era do Rádio. São Paulo: Cia das Letras, 1998.

A TV, a partir da década de 1950, entrou nos lares brasileiros, provocando mudanças consideráveis nos hábitos da população. Certos episódios da história brasileira revelaram que a TV, especialmente como espaço de ação da imprensa, tornou-se também veículo de utilidade pública a favor da democracia, na medida em que`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `amplificou os discursos nacionalistas e autoritários durante o governo Vargas.` },
      { id: 'B', type: 'text', value: `revelou para o país casos de corrupção na esfera política de vários governos.` },
      { id: 'C', type: 'text', value: `maquiou indicadores sociais negativos durante as décadas de 1970 e 1980.` },
      { id: 'D', type: 'text', value: `apoiou, no governo Castelo Branco, as iniciativas de fechamento do parlamento.` },
      { id: 'E', type: 'text', value: `corroborou a construção de obras faraônicas durante os governos militares.` },
    ],
    correct: 'B',
    explanation: `O texto apresenta a TV como veículo de utilidade pública a favor da democracia. Isso se evidencia quando a imprensa televisiva, ao investigar e expor casos de corrupção política em vários governos, cumpre papel fiscalizador e fortalece o controle social sobre o poder — alternativa B. A, D e E associam a TV ao autoritarismo (governo Vargas, fechamento do parlamento, obras faraônicas dos militares), contrariando a ideia de serviço à democracia; e C afirma que a TV maquiou indicadores sociais, o oposto de utilidade pública.`,
    subject: ['soc'],
    topics: ['Meios de comunicação, tecnologia e sociedade', 'Estado, poder, cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Os meios de comunicação funcionam como um elo entre os diferentes segmentos de uma sociedade. Nas últimas décadas, acompanhamos a inserção de um novo meio de comunicação que supera em muito outros já existentes, visto que pode contribuir para a democratização da vida social e política da sociedade, à medida que possibilita a instituição de mecanismos eletrônicos para a efetiva participação política e disseminação de informações.

Constitui o exemplo mais expressivo desse novo conjunto de redes informacionais a`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Internet.` },
      { id: 'B', type: 'text', value: `fibra ótica.` },
      { id: 'C', type: 'text', value: `TV digital.` },
      { id: 'D', type: 'text', value: `telefonia móvel.` },
      { id: 'E', type: 'text', value: `portabilidade telefônica.` },
    ],
    correct: 'A',
    explanation: `O novo meio de comunicação que supera os anteriores e favorece a democratização da vida social e política — criando mecanismos eletrônicos de participação e ampla disseminação de informações — é a Internet, núcleo das redes informacionais contemporâneas, por isso A está correta. A fibra ótica (B) é apenas infraestrutura de transmissão; a TV digital (C) e a telefonia móvel (D) são meios mais restritos; e a portabilidade telefônica (E) é um serviço, não um novo meio de comunicação em rede.`,
    subject: ['soc'],
    topics: ['Meios de comunicação, tecnologia e sociedade', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A poluição e outras ofensas ambientais ainda não tinham esse nome, mas já eram largamente notadas no século XIX, nas grandes cidades inglesas e continentais. E a própria chegada ao campo das estradas de ferro suscitou protestos. A reação antimaquinista, protagonizada pelos diversos luddismos, antecipa a batalha atual dos ambientalistas. Esse era, então, o combate social contra os miasmas urbanos.

SANTOS, M. A natureza do espaço: técnica e tempo, razão e emoção. São Paulo: EDUSP, 2002 (adaptado).

O crescente desenvolvimento técnico-produtivo impõe modificações na paisagem e nos objetos culturais vivenciados pelas sociedades. De acordo com o texto, pode-se dizer que tais movimentos sociais emergiram e se expressaram por meio`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `das ideologias conservacionistas, com milhares de adeptos no meio urbano.` },
      { id: 'B', type: 'text', value: `das políticas governamentais de preservação dos objetos naturais e culturais.` },
      { id: 'C', type: 'text', value: `das teorias sobre a necessidade de harmonização entre técnica e natureza.` },
      { id: 'D', type: 'text', value: `dos boicotes aos produtos das empresas exploradoras e poluentes.` },
      { id: 'E', type: 'text', value: `da contestação à degradação do trabalho, das tradições e da natureza.` },
    ],
    correct: 'E',
    explanation: `Milton Santos mostra que o avanço técnico-produtivo, já no século XIX, provocou reações sociais contra seus efeitos — do ludismo (quebra de máquinas) aos ambientalistas atuais. Esses movimentos emergiram e se expressaram pela contestação à degradação do trabalho, das tradições e da natureza impostas pela modernização — alternativa E. A e B atribuem os movimentos a ideologias conservadoras ou a políticas governamentais; C fala em harmonização entre técnica e natureza, posição teórica e não de contestação; e D restringe tudo a boicotes a produtos, reduzindo o alcance dos movimentos descritos.`,
    subject: ['soc'],
    topics: ['Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A ética precisa ser compreendida como um empreendimento coletivo a ser constantemente retomado e rediscutido, porque é produto da relação interpessoal e social. A ética supõe ainda que cada grupo social se organize, sentindo-se responsável por todos e que crie condições para o exercício de um pensar e agir autônomos. A relação entre ética e política é também uma questão de educação e luta pela soberania dos povos. É necessária uma ética renovada que se construa a partir da natureza dos valores sociais, para organizar também uma nova prática política.

CORDI et al. Para filosofar. São Paulo: Scipione, 2007 (adaptado).

O Século XX teve de repensar a ética para enfrentar novos problemas oriundos de diferentes crises sociais, conflitos ideológicos e contradições da realidade. Sob esse enfoque e a partir do texto, a ética pode ser compreendida como`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `instrumento de garantia da cidadania, porque através dela os cidadãos passam a pensar e agir de acordo com valores coletivos.` },
      { id: 'B', type: 'text', value: `mecanismo de criação de direitos humanos, porque é da natureza do homem ser ético e virtuoso.` },
      { id: 'C', type: 'text', value: `meio para resolver os conflitos sociais no cenário da globalização, pois a partir do entendimento do que é efetivamente a ética, a política internacional se realiza.` },
      { id: 'D', type: 'text', value: `parâmetro para assegurar o exercício político, primando pelos interesses e ação privada dos cidadãos.` },
      { id: 'E', type: 'text', value: `aceitação de valores universais implícitos numa sociedade que busca dimensionar sua vinculação à outras sociedades.` },
    ],
    correct: 'A',
    explanation: `Para o texto de Cordi, a ética é um empreendimento coletivo que torna cada grupo responsável por todos e cria condições para o pensar e agir autônomos, articulando-se à política e à cidadania. Assim, a ética é compreendida como instrumento de garantia da cidadania, pois por meio dela os cidadãos passam a pensar e agir de acordo com valores coletivos — alternativa A. B deriva a ética de direitos humanos de modo naturalista; C e D a subordinam aos conflitos da globalização ou a interesses privados; e E a reduz à aceitação de valores universais implícitos, sem o caráter coletivo e político destacado no texto.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Homens da Inglaterra, por que arar para os senhores que vos mantêm na miséria?
Por que tecer com esforços e cuidado as ricas roupas que vossos tiranos vestem?
Por que alimentar, vestir e poupar, do berço até o túmulo, esses parasitas ingratos que exploram vosso suor — ah, que bebem vosso sangue?

SHELLEY. Os homens da Inglaterra. Apud HUBERMAN, L. História da Riqueza do Homem. Rio de Janeiro: Zahar, 1982.

A análise do trecho permite identificar que o poeta romântico Shelley (1792-1822) registrou uma contradição nas condições socioeconômicas da nascente classe trabalhadora inglesa durante a Revolução Industrial. Tal contradição está identificada`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `na pobreza dos empregados, que estava dissociada da riqueza dos patrões.` },
      { id: 'B', type: 'text', value: `no salário dos operários, que era proporcional aos seus esforços nas indústrias.` },
      { id: 'C', type: 'text', value: `na burguesia, que tinha seus negócios financiados pelo proletariado.` },
      { id: 'D', type: 'text', value: `no trabalho, que era considerado uma garantia de liberdade.` },
      { id: 'E', type: 'text', value: `na riqueza, que não era usufruída por aqueles que a produziam.` },
    ],
    correct: 'E',
    explanation: `O poema de Shelley denuncia a contradição da Revolução Industrial: os trabalhadores ingleses produzem a riqueza (tecem roupas, cultivam, alimentam), mas vivem na miséria, enquanto os parasitas (patrões) usufruem do que não produziram. A contradição está, portanto, na riqueza que não era usufruída por aqueles que a produziam — alternativa E. A e B restringem a crítica à pobreza ou ao salário; C inverte a relação (burguesia financiada pelo proletariado); e D distorce ao apresentar o trabalho como garantia de liberdade, quando o sentido do poema é a exploração, não a liberdade.`,
    subject: ['his'],
    topics: ['Iluminismo e Revoluções', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `"Pecado nefando" era expressão correntemente utilizada pelos inquisidores para a sodomia. Nefandus: o que não pode ser dito. A Assembleia de clérigos reunida em Salvador em 1707 considerou a sodomia "tão péssimo e horrendo crime", tão contrário à lei da natureza, que "era indigno de ser nomeado" e, por isso mesmo, nefando.

NOVAIS, F.; MELLO e SOUZA, L. História da Vida Privada no Brasil 1. São Paulo: Companhia das Letras, 1997 (adaptado).

O número de homossexuais assassinados no Brasil bateu o recorde histórico em 2009. De acordo com o Relatório Anual de Assassinato de Homossexuais LGBT — Lésbicas, Gays, Bissexuais e Travestis —, nesse ano foram registrados 195 mortos por motivação homofóbica no País.

Disponível em: www.alemdanoticia.com.br/ultimas_noticias.php?codnoticia=3871. Acesso em: 29 abr. 2010 (adaptado).

A homofobia é a rejeição e menosprezo à orientação sexual do outro e, muitas vezes, expressa-se sob a forma de comportamentos violentos. Os textos indicam que as condenações públicas, perseguições e assassinatos de homossexuais no país estão associadas`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `à baixa representatividade política de grupos organizados que defendem os direitos de cidadania dos homossexuais.` },
      { id: 'B', type: 'text', value: `à falência da democracia no país, que torna impeditiva a divulgação de estatísticas relacionadas à violência contra homossexuais.` },
      { id: 'C', type: 'text', value: `à Constituição de 1988, que exclui do tecido social os homossexuais, além de impedi-los de exercer seus direitos políticos.` },
      { id: 'D', type: 'text', value: `a um passado histórico marcado pela demonização do corpo e por formas recorrentes de tabus e intolerância.` },
      { id: 'E', type: 'text', value: `a uma política eugênica desenvolvida pelo Estado, justificada a partir dos posicionamentos de correntes filosófico-científicas.` },
    ],
    correct: 'D',
    explanation: `A perseguição histórica à sodomia como pecado nefando, punida desde a Inquisição, revela que as condenações, perseguições e assassinatos de homossexuais estão associados a um passado histórico marcado pela demonização do corpo e por formas recorrentes de tabus e intolerância, que se perpetuam na homofobia atual — alternativa D. A e B atribuem a violência à baixa representatividade política ou à falência da democracia; C acusa erroneamente a Constituição de 1988 de excluir os homossexuais; e E restringe a homofobia a uma política eugênica estatal, perdendo a dimensão histórico-cultural de longa duração.`,
    subject: ['soc'],
    topics: ['Gênero e sexualidade', 'Violência, direitos humanos e controle social', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Judiciário contribuiu com ditadura no Chile, diz Juiz Guzmán Tapia

As cortes de apelação rejeitaram mais de 10 mil habeas corpus nos casos das pessoas desaparecidas. Nos tribunais militares, todas as causas foram concluídas com suspensões temporárias ou definitivas, e os desaparecimentos políticos tiveram apenas trâmite formal na Justiça. Assim, o Poder Judiciário contribuiu para que os agentes estatais ficassem impunes.

Disponível em: http://www.cartamaior.com.br. Acesso em: 20 jul. 2010 (adaptado).

Segundo o texto, durante a ditadura chilena, na década de 1970, a relação entre os poderes Executivo e Judiciário caracterizava-se pela`,
    image: null,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `preservação da autonomia institucional entre os poderes.` },
      { id: 'B', type: 'text', value: `valorização da atuação independente de alguns juízes.` },
      { id: 'C', type: 'text', value: `manutenção da interferência jurídica nos atos executivos.` },
      { id: 'D', type: 'text', value: `transferência das funções dos juízes para o chefe de Estado.` },
      { id: 'E', type: 'text', value: `subordinação do poder judiciário aos interesses políticos dominantes.` },
    ],
    correct: 'E',
    explanation: `O texto mostra que, na ditadura chilena, os tribunais rejeitaram milhares de habeas corpus e deram apenas trâmite formal aos casos de desaparecidos, garantindo a impunidade dos agentes do Estado. Isso caracteriza a subordinação do poder Judiciário aos interesses políticos dominantes (do Executivo ditatorial), e não sua independência — alternativa E. A e B afirmam autonomia ou independência, contrariadas pelos fatos; C inverte o sentido (interferência jurídica sobre o Executivo); e D fala em transferência das funções dos juízes ao chefe de Estado, o que não corresponde à cumplicidade descrita.`,
    subject: ['his'],
    topics: ['Guerra Fria e descolonização', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Um banco inglês decidiu cobrar de seus clientes cinco libras toda vez que recorressem aos funcionários de suas agências. E o motivo disso é que, na verdade, não querem clientes em suas agências: o que querem é reduzir o número de agências, fazendo com que os clientes usem as máquinas automáticas em todo o tipo de transações. Em suma, eles querem se livrar de seus funcionários.

HOBSBAWM, E. O novo século. São Paulo: Companhia das Letras, 2000 (adaptado).

O exemplo mencionado permite identificar um aspecto da adoção de novas tecnologias na economia capitalista contemporânea. Um argumento utilizado pelas empresas e uma consequência social de tal aspecto estão em`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `qualidade total e estabilidade no trabalho.` },
      { id: 'B', type: 'text', value: `pleno emprego e enfraquecimento dos sindicatos.` },
      { id: 'C', type: 'text', value: `diminuição dos custos e insegurança no emprego.` },
      { id: 'D', type: 'text', value: `responsabilidade social e redução do desemprego.` },
      { id: 'E', type: 'text', value: `maximização dos lucros e aparecimento de empregos.` },
    ],
    correct: 'C',
    explanation: `O exemplo do banco que cobra para desestimular o atendimento humano ilustra a adoção de novas tecnologias (automação) na economia capitalista contemporânea com o objetivo de reduzir custos, substituindo funcionários por máquinas. A consequência social é a insegurança e a precarização do emprego (desemprego estrutural/tecnológico) — alternativa C. A (estabilidade no trabalho), D (redução do desemprego) e E (aparecimento de empregos) contrariam o efeito descrito; e B, embora cite o enfraquecimento dos sindicatos, afirma pleno emprego, incompatível com a eliminação de postos de trabalho.`,
    subject: ['soc'],
    topics: ['Trabalho e sociedade', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Na ética contemporânea, o sujeito não é mais um sujeito substancial, soberano e absolutamente livre, nem um sujeito empírico puramente natural. Ele é simultaneamente os dois, na medida em que é um sujeito histórico-social. Assim, a ética adquire um dimensionamento político, uma vez que a ação do sujeito não pode mais ser vista e avaliada fora da relação social coletiva. Desse modo, a ética se entrelaça, necessariamente, com a política, entendida esta como a área de avaliação dos valores que atravessam as relações sociais e que interliga os indivíduos entre si.

SEVERINO, A. J. Filosofia. São Paulo: Cortez, 1992 (adaptado).

O texto, ao evocar a dimensão histórica do processo de formação da ética na sociedade contemporânea, ressalta`,
    image: null,
    alternatives: [
      { id: 'A', type: 'text', value: `os conteúdos éticos decorrentes das ideologias político-partidárias.` },
      { id: 'B', type: 'text', value: `o valor da ação humana derivada de preceitos metafísicos.` },
      { id: 'C', type: 'text', value: `a sistematização de valores desassociados da cultura.` },
      { id: 'D', type: 'text', value: `o sentido coletivo e político das ações humanas individuais.` },
      { id: 'E', type: 'text', value: `o julgamento da ação ética pelos políticos eleitos democraticamente.` },
    ],
    correct: 'D',
    explanation: `Para Severino, na ética contemporânea o sujeito é histórico-social, de modo que suas ações individuais só podem ser avaliadas dentro da relação social coletiva, entrelaçando-se necessariamente com a política. O texto ressalta, assim, o sentido coletivo e político das ações humanas individuais — alternativa D. A reduz a ética a ideologias político-partidárias; B a fundamenta em preceitos metafísicos; C a desassocia da cultura; e E a submete ao julgamento dos políticos eleitos — todas contrariando a dimensão histórico-social e coletiva defendida pelo autor.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `QUINO. Toda Mafalda. São Paulo: Martins Fontes, 1991.

Democracia: "regime político no qual a soberania é exercida pelo povo, pertence ao conjunto dos cidadãos."

JAPIASSÚ, H.; MARCONDES, D. Dicionário Básico de Filosofia. Rio de Janeiro: Zahar, 2006.

Uma suposta "vacina" contra o despotismo, em um contexto democrático, tem por objetivo`,
    images: ['/enem/2010/images/enem_2010_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `impedir a contratação de familiares para o serviço público.` },
      { id: 'B', type: 'text', value: `reduzir a ação das instituições constitucionais.` },
      { id: 'C', type: 'text', value: `combater a distribuição equilibrada de poder.` },
      { id: 'D', type: 'text', value: `evitar a escolha de governantes autoritários.` },
      { id: 'E', type: 'text', value: `restringir a atuação do Parlamento.` },
    ],
    correct: 'D',
    explanation: `Na tirinha da Mafalda e na definição de democracia (soberania exercida pelo povo), a suposta vacina contra o despotismo simboliza os mecanismos democráticos que previnem o poder absoluto e arbitrário. Seu objetivo é evitar a escolha e a ascensão de governantes autoritários, protegendo a soberania popular e a distribuição equilibrada do poder — alternativa D. A restringe o sentido ao nepotismo; e B, C e E vão contra a própria democracia (reduzir instituições constitucionais, combater a distribuição equilibrada do poder e restringir o Parlamento), sendo incompatíveis com uma vacina contra o despotismo.`,
    subject: ['fil'],
    topics: ['Filosofia moderna: política', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A vacina, o soro e os antibióticos submetem os organismos a processos biológicos diferentes. Pessoas que viajam para regiões em que ocorrem altas incidências de febre amarela, de picadas de cobras peçonhentas e de leptospirose e querem evitar ou tratar problemas de saúde relacionados a essas ocorrências devem seguir determinadas orientações. Ao procurar um posto de saúde, um viajante deveria ser orientado por um médico a tomar preventivamente ou como medida de tratamento`,
    alternatives: [
      { id: 'A', type: 'text', value: `antibiótico contra o vírus da febre amarela, soro antiofídico caso seja picado por uma cobra e vacina contra a leptospirose.` },
      { id: 'B', type: 'text', value: `vacina contra o vírus da febre amarela, soro antiofídico caso seja picado por uma cobra e antibiótico caso entre em contato com a Leptospira sp.` },
      { id: 'C', type: 'text', value: `soro contra o vírus da febre amarela, antibiótico caso seja picado por uma cobra e soro contra toxinas bacterianas.` },
      { id: 'D', type: 'text', value: `antibiótico ou soro, tanto contra o vírus da febre amarela como para veneno de cobras, e vacina contra a leptospirose.` },
      { id: 'E', type: 'text', value: `soro antiofídico e antibiótico contra a Leptospira sp e vacina contra a febre amarela caso entre em contato como vírus causador da doença.` },
    ],
    correct: 'B',
    explanation: `A febre amarela é causada por vírus, por isso só a vacina (e não soro ou antibiótico) atua preventivamente contra ela. Contra a peçonha da picada de cobra usa-se o soro antiofídico, que neutraliza as toxinas injetadas. A leptospirose é bacteriana (bactéria Leptospira sp.), sendo combatida com antibiótico. A alternativa B é a única que associa corretamente: vacina para a febre amarela (viral), soro antiofídico caso seja picado por cobra e antibiótico caso haja contato com a Leptospira. As demais trocam as medidas, como usar antibiótico contra vírus ou soro de forma inadequada.`,
    subject: ['bio'],
    topics: ['Imunologia', 'Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As ondas eletromagnéticas, como a luz visível e as ondas de rádio, viajam em linha reta em um meio homogêneo. Então, as ondas de rádio emitidas na região litorânea do Brasil não alcançariam a região amazônica do Brasil por causa da curvatura da Terra. Entretanto sabemos que é possível transmitir ondas de rádio entre essas localidades devido à ionosfera. Com a ajuda da ionosfera, a transmissão de ondas planas entre o litoral do Brasil e a região amazônica é possível por meio da`,
    alternatives: [
      { id: 'A', type: 'text', value: `reflexão.` },
      { id: 'B', type: 'text', value: `refração.` },
      { id: 'C', type: 'text', value: `difração.` },
      { id: 'D', type: 'text', value: `polarização.` },
      { id: 'E', type: 'text', value: `interferência.` },
    ],
    correct: 'A',
    explanation: `Ondas de rádio viajam em linha reta num meio homogêneo, mas a Terra é curva, de modo que o sinal tenderia a escapar para o espaço. A ionosfera é uma camada condutora que funciona como um espelho para certas ondas de rádio: ela as reflete de volta à superfície, permitindo que o sinal contorne a curvatura terrestre e alcance regiões distantes. Trata-se, portanto, do fenômeno da reflexão (A). Refração seria o desvio ao mudar de meio e difração o contorno de obstáculos, fenômenos que não explicam o retorno do sinal ao solo.`,
    subject: ['fis'],
    topics: ['Ondulatória e acústica', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Todo carro possui uma caixa de fusíveis, que são utilizados para proteção dos circuitos elétricos. Os fusíveis são constituídos de um material de baixo ponto de fusão, como o estanho, por exemplo, e se fundem quando percorridos por uma corrente elétrica igual ou maior do que aquela que são capazes de suportar. O quadro a seguir mostra uma série de fusíveis e os valores de corrente por eles suportados. Um farol usa uma lâmpada de gás halogênio de 55 W de potência que opera com 36 V. Os dois faróis são ligados separadamente, com um fusível para cada um, mas, após um mau funcionamento, o motorista passou a conectá-los em paralelo, usando apenas um fusível. Dessa forma, admitindo-se que a fiação suporte a carga dos dois faróis, o menor valor de fusível adequado para proteção desse novo circuito é o`,
    images: ['/enem/2010/images/enem_2010_d1_q48.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `azul.` },
      { id: 'B', type: 'text', value: `preto.` },
      { id: 'C', type: 'text', value: `laranja.` },
      { id: 'D', type: 'text', value: `amarelo.` },
      { id: 'E', type: 'text', value: `vermelho.` },
    ],
    correct: 'C',
    explanation: `Cada lâmpada de farol tem potência 55 W sob 36 V, logo a corrente em cada farol é i = P/V = 55/36 ≈ 1,53 A. Ligando os dois faróis em paralelo com um único fusível, a corrente total que o atravessa é i_total = 2 × 1,53 ≈ 3,06 A. O fusível adequado deve suportar corrente igual ou maior que 3,06 A; o amarelo (2,5 A) fundiria. O menor valor da tabela capaz de suportar 3,06 A é o laranja (5,0 A), portanto a resposta é C.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A cárie dental resulta da atividade de bactérias que degradam os açúcares e os transformam em ácidos que corroem a porção mineralizada dos dentes. O flúor, juntamente com o cálcio e um açúcar chamado xilitol, agem inibindo esse processo. Quando não se escovam os dentes corretamente e neles acumulam-se restos de alimentos, as bactérias que vivem na boca aderem aos dentes, formando a placa bacteriana ou biofilme. Na placa, elas transformam o açúcar dos restos de alimentos em ácidos, que corroem o esmalte do dente formando uma cavidade, que é a cárie. Vale lembrar que a placa bacteriana se forma mesmo na ausência de ingestão de carboidratos fermentáveis, pois as bactérias possuem polissacarídeos intracelulares de reserva. Disponível em: http://www.diariodasaude.com.br. Acesso em: 11 ago 2010 (adaptado). cárie 1 . destruição de um osso por corrosão progressiva. * cárie dentária: efeito da destruição da estrutura dentária por bactérias. HOUAISS, Antônio. Dicionário eletrônico. Versão 1.0. Editora Objetiva, 2001 (adaptado). A partir da leitura do texto, que discute as causas do aparecimento de cáries, e da sua relação com as informações do dicionário, conclui-se que a cárie dental resulta, principalmente, de`,
    alternatives: [
      { id: 'A', type: 'text', value: `falta de flúor e de cálcio na alimentação diária da população brasileira.` },
      { id: 'B', type: 'text', value: `consumo exagerado do xilitol, um açúcar, na dieta alimentar diária do indivíduo.` },
      { id: 'C', type: 'text', value: `redução na proliferação bacteriana quando a saliva é desbalanceada pela má alimentação.` },
      { id: 'D', type: 'text', value: `uso exagerado do flúor, um agente que em alta quantidade torna-se tóxico à formação dos dentes.` },
      { id: 'E', type: 'text', value: `consumo excessivo de açúcares na alimentação e má higienização bucal, que contribuem para a proliferação de bactérias.` },
    ],
    correct: 'E',
    explanation: `O texto mostra que a cárie é provocada por bactérias que, na presença de restos de açúcar (carboidratos fermentáveis) mal removidos pela escovação, produzem ácidos que corroem o esmalte. Assim, os fatores determinantes são o consumo excessivo de açúcares e a má higienização bucal, que favorecem a proliferação bacteriana (alternativa E). O flúor e o cálcio inibem o processo, de modo que sua falta não é a causa principal (A e D invertem o papel do flúor). O xilitol não é um açúcar fermentável prejudicial (B), e a cárie não decorre apenas de saliva desbalanceada (C).`,
    subject: ['bio'],
    topics: ['Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Em nosso cotidiano, utilizamos as palavras “calor” e “temperatura” de forma diferente de como elas são usadas no meio científico. Na linguagem corrente, calor é identificado como “algo quente” e temperatura mede a “quantidade de calor de um corpo”. Esses significados, no entanto, não conseguem explicar diversas situações que podem ser verificadas na prática. Do ponto de vista científico, que situação prática mostra a limitação dos conceitos corriqueiros de calor e temperatura?`,
    alternatives: [
      { id: 'A', type: 'text', value: `A temperatura da água pode ficar constante durante o tempo em que estiver fervendo.` },
      { id: 'B', type: 'text', value: `Uma mãe coloca a mão na água da banheira do bebê para verificar a temperatura da água.` },
      { id: 'C', type: 'text', value: `A chama de um fogão pode ser usada para aumentar a temperatura da água em uma panela.` },
      { id: 'D', type: 'text', value: `A água quente que está em uma caneca é passada para outra caneca a fim de diminuir sua temperatura.` },
      { id: 'E', type: 'text', value: `Um forno pode fornecer calor para uma vasilha de água que está em seu interior com menor temperatura do que a dele.` },
    ],
    correct: 'A',
    explanation: `Cientificamente, calor é energia em trânsito e temperatura mede a agitação das partículas; os conceitos do senso comum falham em certas situações. Durante a ebulição (mudança de estado), o sistema recebe calor continuamente, mas a temperatura permanece constante, pois a energia é usada para romper as ligações entre as moléculas e não para aquecê-las. A situação A (a temperatura da água pode ficar constante enquanto ferve) evidencia essa limitação dos conceitos corriqueiros. As demais alternativas descrevem usos cotidianos coerentes dos termos, sem expor contradição.`,
    subject: ['fis'],
    topics: ['Calorimetria, termometria e dilatação', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O texto “O vôo das Folhas” traz uma visão dos índios Ticunas para um fenômeno usualmente observado na natureza: O vôo das Folhas Com o vento as folhas se movimentam. E quando caem no chão ficam paradas em silêncio. Assim se forma o ngaura . O ngaura cobre o chão da floresta, enriquece a terra e alimenta as árvores.] As folhas velhas morrem para ajudar o crescimento das folhas novas.] Dentro do ngaura vivem aranhas, formigas, escorpiões, centopeias, minhocas, cogumelos e vários tipos de outros seres muito pequenos.] As folhas também caem nos lagos, nos igarapés e igapós. A natureza segundo os Ticunas/Livro das Arvores . Organização Geral dos Professores Bilíngues Ticunas, 2000. Na visão dos índios Ticunas, a descrição sobre o ngaura permite classificá-lo como um produto diretamente relacionado ao ciclo`,
    alternatives: [
      { id: 'A', type: 'text', value: `da água.` },
      { id: 'B', type: 'text', value: `do oxigênio.` },
      { id: 'C', type: 'text', value: `do fósforo.` },
      { id: 'D', type: 'text', value: `do carbono.` },
      { id: 'E', type: 'text', value: `do nitrogênio.` },
    ],
    correct: 'D',
    explanation: `O ngaura é a camada de folhas que caem, cobrem o chão, se decompõem, enriquecem a terra e alimentam as árvores, já que as folhas velhas morrem para ajudar o crescimento das novas. Esse fluxo de matéria orgânica (produção de biomassa vegetal, queda, decomposição e devolução ao solo para novo crescimento) caracteriza o ciclo do carbono, elemento estruturante da matéria orgânica. Por isso o ngaura relaciona-se diretamente ao ciclo do carbono (D), e não ao da água, do oxigênio, do fósforo ou do nitrogênio.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Com o objetivo de se testar a eficiência de fornos de micro-ondas, planejou-se o aquecimento em 10 ºC de amostras de diferentes substâncias, cada uma com determinada massa, em cinco fornos de marcas distintas. Nesse teste, cada forno operou à potência máxima. O forno mais eficiente foi aquele que`,
    alternatives: [
      { id: 'A', type: 'text', value: `forneceu a maior quantidade de energia às amostras.` },
      { id: 'B', type: 'text', value: `cedeu energia à amostra de maior massa em mais tempo.` },
      { id: 'C', type: 'text', value: `forneceu a maior quantidade de energia em menos tempo.` },
      { id: 'D', type: 'text', value: `cedeu energia à amostra de menor calor específico mais lentamente.` },
      { id: 'E', type: 'text', value: `forneceu a menor quantidade de energia às amostras em menos tempo.` },
    ],
    correct: 'C',
    explanation: `Todos os fornos operaram à potência máxima e elevaram a temperatura das amostras em 10 °C. O forno mais eficiente é o que realiza esse aquecimento desperdiçando menos energia, ou seja, entregando a energia necessária às amostras no menor tempo. Como P = energia/tempo e a potência é máxima, menor tempo indica melhor aproveitamento da energia fornecida. Logo, o forno mais eficiente forneceu a maior quantidade de energia em menos tempo (C). As massas e os calores específicos variam entre as amostras, mas a eficiência se avalia pela rapidez em entregar a energia útil.`,
    subject: ['fis'],
    topics: ['Calorimetria, termometria e dilatação', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O fósforo, geralmente representado pelo íon de fosfato ( ), é um ingrediente insubstituível da vida, já que é parte constituinte das membranas celulares e das moléculas do DNA e do trifosfato de adenosina (ATP), principal forma de armazenamento de energia das células. O fósforo utilizado nos fertilizantes agrícolas é extraído de minas, cujas reservas estão cada vez mais escassas. Certas práticas agrícolas aceleram a erosão do solo, provocando o transporte de fósforo para sistemas aquáticos, que fica imobilizado nas rochas. Ainda, a colheita das lavouras e o transporte dos restos alimentares para os lixões diminuem a disponibilidade dos íons no solo. Tais fatores têm ameaçado a sustentabilidade desse íon. Uma medida que amenizaria esse problema seria:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Incentivar a reciclagem de resíduos biológicos, utilizando dejetos animais e restos de culturas para produção de adubo.` },
      { id: 'B', type: 'text', value: `Repor o estoque retirado das minas com um íon sintético de fósforo para garantir o abastecimento da indústria de fertilizantes.` },
      { id: 'C', type: 'text', value: `Aumentar a importação de íons fosfato dos países ricos para suprir as exigências das indústrias nacionais de fertilizantes.` },
      { id: 'D', type: 'text', value: `Substituir o fósforo dos fertilizantes por outro elemento com a mesma função para suprir as necessidades do uso de seus íons.` },
      { id: 'E', type: 'text', value: `Proibir, por meio de lei federal, o uso de fertilizantes com fósforo pelos agricultores, para diminuir sua extração das reservas naturais.` },
    ],
    correct: 'A',
    explanation: `O texto mostra que o fósforo é um recurso finito e cada vez mais escasso, e que certas práticas agrícolas e o descarte em lixões o imobilizam, reduzindo sua disponibilidade no solo. Uma medida sustentável é fechar o ciclo do fósforo reaproveitando resíduos biológicos (dejetos animais e restos de culturas) como adubo, devolvendo o nutriente ao solo (A). Repor com íon sintético (B) não é solução viável, importar (C) não resolve a escassez global, substituir o fósforo por outro elemento (D) é inviável por suas funções biológicas serem insubstituíveis, e proibir fertilizantes (E) não repõe o nutriente.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Júpiter, conhecido como o gigante gasoso, perdeu uma das suas listras mais proeminentes, deixando o seu hemisfério sul estranhamente vazio. Observe a região em que a faixa sumiu, destacada pela seta. Disponível em: http://www.inovacaotecnologica.com.br. Acesso em: 12 maio 2010 (adaptado). A aparência de Júpiter é tipicamente marcada por duas faixas escuras em sua atmosfera - uma no hemisfério norte e outra no hemisfério sul. Como o gás está constantemente em movimento, o desaparecimento da faixa no planeta relaciona-se ao movimento das diversas camadas de nuvens em sua atmosfera. A luz do Sol, refletida nessas nuvens, gera a imagem que é captada pelos telescópios, no espaço ou na Terra. O desaparecimento da faixa sul pode ter sido determinado por uma alteração`,
    images: ['/enem/2010/images/enem_2010_d1_q54.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `na temperatura da superfície do planeta.` },
      { id: 'B', type: 'text', value: `no formato da camada gasosa do planeta.` },
      { id: 'C', type: 'text', value: `no campo gravitacional gerado pelo planeta.` },
      { id: 'D', type: 'text', value: `na composição química das nuvens do planeta.` },
      { id: 'E', type: 'text', value: `na densidade das nuvens que compõem o planeta.` },
    ],
    correct: 'E',
    explanation: `O texto afirma que a imagem das faixas de Júpiter é formada pela luz do Sol refletida nas nuvens em movimento de sua atmosfera. Se uma faixa (região de nuvens) deixa de ser vista, é porque mudou a maneira como a luz é refletida naquela camada. Isso pode ser explicado por uma alteração na densidade das nuvens que compõem o planeta (E), modificando a reflexão da luz e, portanto, o aspecto visível. A temperatura da superfície, o campo gravitacional ou o formato global do planeta não explicam o sumiço localizado da faixa.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Em visita a uma usina sucroalcooleira, um grupo de alunos pôde observar a série de processos de beneficiamento da cana-de-açúcar, entre os quais se destacam: 1. A cana chega cortada da lavoura por meio de caminhões e é despejada em mesas alimentadoras que a conduzem para as moendas. Antes de ser esmagada para a retirada do caldo açucarado, toda a cana é transportada por esteiras e passada por um eletroimã para a retirada de materiais metálicos. 2. Após se esmagar a cana, o bagaço segue para as caldeiras, que geram vapor e energia para toda a usina. 3. O caldo primário, resultante do esmagamento, é passado por filtros e sofre tratamento para transformar-se em açúcar refinado e etanol. Com base nos destaques da observação dos alunos, quais operações físicas de separação de materiais foram realizadas nas etapas de beneficiamento da cana- de-açúcar?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Separação mecânica, extração, decantação.` },
      { id: 'B', type: 'text', value: `Separação magnética, combustão, filtração.` },
      { id: 'C', type: 'text', value: `Separação magnética, extração, filtração.` },
      { id: 'D', type: 'text', value: `Imantação, combustão, peneiração.` },
      { id: 'E', type: 'text', value: `Imantação, destilação, filtração.` },
    ],
    correct: 'C',
    explanation: `As três operações citadas são separações físicas de misturas. O eletroímã que retira os materiais metálicos realiza uma separação magnética (imantação). O esmagamento da cana nas moendas para retirar o caldo açucarado é uma extração. A passagem do caldo primário por filtros é uma filtração. Logo, a sequência correta é separação magnética, extração e filtração (C). A combustão (presente em B e D) é transformação química, não separação física, o que elimina essas opções.`,
    subject: ['qui'],
    topics: ['Propriedades da matéria e separação de misturas', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `ZIEGLER, M.F. Energia Sustentável. Revista IstoE . 28 abr. 2010. A fonte de energia representada na figura, considerada uma das mais limpas e sustentáveis do mundo, é extraída do calor gerado`,
    images: ['/enem/2010/images/enem_2010_d1_q56.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `pela circulação do magma no subsolo.` },
      { id: 'B', type: 'text', value: `pelas erupções constantes dos vulcões.` },
      { id: 'C', type: 'text', value: `pelo sol que aquece as águas com radiação ultravioleta.` },
      { id: 'D', type: 'text', value: `pela queima do carvão e combustíveis fósseis.` },
      { id: 'E', type: 'text', value: `pelos detritos e cinzas vulcânicas.` },
    ],
    correct: 'A',
    explanation: `A figura representa a energia geotérmica: em regiões onde o magma está próximo da superfície, o calor interno da Terra aquece a água subterrânea, gerando vapor que impulsiona turbinas e produz eletricidade. Portanto, a fonte de energia é o calor gerado pela circulação do magma no subsolo (A). Não há queima de combustíveis fósseis (D) nem dependência de radiação ultravioleta (C); erupções e cinzas vulcânicas (B e E) não são a fonte do calor aproveitado.`,
    subject: ['fis'],
    topics: ['Energia: geração e transformação', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O despejo de dejetos de esgotos domésticos e industriais vem causando sérios problemas aos rios brasileiros. Esses poluentes são ricos em substâncias que contribuem para a eutrofização de ecossistemas, que é um enriquecimento da água por nutrientes, o que provoca um grande crescimento bacteriano e, por fim, pode promover escassez de oxigênio. Uma maneira de evitar a diminuição da concentração de oxigênio no ambiente é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Aquecer as águas dos rios para aumentar a velocidade de decomposição dos dejetos.` },
      { id: 'B', type: 'text', value: `Retirar do esgoto os materiais ricos em nutrientes para diminuir a sua concentração nos rios.` },
      { id: 'C', type: 'text', value: `Adicionar bactérias anaeróbicas às águas dos rios para que elas sobrevivam mesmo sem o oxigênio.` },
      { id: 'D', type: 'text', value: `Substituir produtos não degradáveis por biodegradáveis para que as bactérias possam utilizar os nutrientes.` },
      { id: 'E', type: 'text', value: `Aumentar a solubilidade dos dejetos no esgoto para que os nutrientes fiquem mais acessíveis às bactérias.` },
    ],
    correct: 'B',
    explanation: `A eutrofização é o enriquecimento da água por nutrientes (presentes nos esgotos), que provoca crescimento bacteriano excessivo e consumo do oxigênio dissolvido. Para evitar a queda de oxigênio, deve-se remover do esgoto os materiais ricos em nutrientes antes do lançamento nos rios, reduzindo sua concentração (B). Aquecer a água (A) e aumentar a solubilidade dos dejetos (E) acelerariam a decomposição e piorariam o consumo de O₂; adicionar bactérias anaeróbicas (C) não resolve o problema; trocar por biodegradáveis (D) ainda forneceria nutrientes às bactérias.`,
    subject: ['bio'],
    topics: ['Impactos ambientais e conservação', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Sob pressão normal (ao nível do mar), a água entra em ebulição à temperatura de 100 o C. Tendo por base essa informação, um garoto residente em uma cidade litorânea fez a seguinte experiência: • Colocou uma caneca metálica contendo água no fogareiro do fogão de sua casa. • Quando a água começou a ferver, encostou cuidadosamente a extremidade mais estreita de uma seringa de injeção, desprovida de agulha, na superfície do líquido e, erguendo o êmbolo da seringa, aspirou certa quantidade de água para seu interior, tapando-a em seguida. • Verificando após alguns instantes que a água da seringa havia parado de ferver, ele ergueu o êmbolo da seringa, constatando, intrigado, que a água voltou a ferver após um pequeno deslocamento do êmbolo. Considerando o procedimento anterior, a água volta a ferver porque esse deslocamento`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `permite a entrada de calor do ambiente externo para o interior da seringa.` },
      { id: 'B', type: 'text', value: `provoca, por atrito, um aquecimento da água contida na seringa.` },
      { id: 'C', type: 'text', value: `produz um aumento de volume que aumenta o ponto de ebulição da água.` },
      { id: 'D', type: 'text', value: `proporciona uma queda de pressão no interior da seringa que diminui o ponto de ebulição da água.` },
      { id: 'E', type: 'text', value: `possibilita uma diminuição da densidade da água que facilita sua ebulição.` },
    ],
    correct: 'D',
    explanation: `Ao nível do mar a água ferve a 100 °C porque sua pressão de vapor iguala a pressão externa. Ao puxar o êmbolo da seringa fechada, aumenta-se o volume e, consequentemente, diminui-se a pressão sobre o líquido em seu interior. Com a pressão menor, o ponto de ebulição cai, e a água, ainda quente, volta a ferver mesmo sem receber calor. Logo, o deslocamento do êmbolo proporciona uma queda de pressão que diminui o ponto de ebulição (D). Não há entrada de calor (A) nem aquecimento por atrito (B).`,
    subject: ['fis'],
    topics: ['Calorimetria, termometria e dilatação', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As cidades industrializadas produzem grandes proporções de gases como o CO₂ , o principal gás causador do efeito estufa. Isso ocorre por causa da quantidade de combustíveis fósseis queimados, principalmente no transporte, mas também em caldeiras industriais. Além disso, nessas cidades concentram-se as maiores áreas com solos asfaltados e concretados, o que aumenta a retenção de calor, formando o que se conhece por “ilhas de calor”. Tal fenômeno ocorre porque esses materiais absorvem o calor e o devolvem para o ar sob a forma de radiação térmica. Em áreas urbanas, devido à atuação conjunta do efeito estufa e das “ilhas de calor”, espera-se que o consumo de energia elétrica`,
    alternatives: [
      { id: 'A', type: 'text', value: `diminua devido à utilização de caldeiras por indústrias metalúrgicas.` },
      { id: 'B', type: 'text', value: `aumente devido ao bloqueio da luz do sol pelos gases do efeito estufa.` },
      { id: 'C', type: 'text', value: `diminua devido à não necessidade de aquecer a água utilizada em indústrias.` },
      { id: 'D', type: 'text', value: `aumente devido à necessidade de maior refrigeração de indústrias e residências.` },
      { id: 'E', type: 'text', value: `diminua devido à grande quantidade de radiação térmica reutilizada.` },
    ],
    correct: 'D',
    explanation: `O efeito estufa e as ilhas de calor elevam a temperatura nas áreas urbanas, pois gases e materiais como asfalto e concreto retêm calor e o reemitem como radiação térmica. Com ambientes mais quentes, cresce a necessidade de refrigeração (ar-condicionado) em indústrias e residências, o que aumenta o consumo de energia elétrica (D). As alternativas que preveem diminuição do consumo contrariam o aquecimento descrito, e o bloqueio da luz solar (B) não é o mecanismo do maior gasto energético.`,
    subject: ['fis'],
    topics: ['Propagação de calor', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A lavoura arrozeira na planície costeira da região sul do Brasil comumente sofre perdas elevadas devido à salinização da água de irrigação, que ocasiona prejuízos diretos, como a redução de produção da lavoura. Solos com processo de salinização avançado não são indicados, por exemplo, para o cultivo de arroz. As plantas retiram a água do solo quando as forças de embebição dos tecidos das raízes  são superiores às forças com que a água é retida no solo. WINKEL, H.L.;TSCHIEDEL, M. Cultura do arroz: salinização de solos em cultivos de arroz . Disponível em: http://agropage.tripod.com/saliniza.hml. Acesso em: 25 jun. 2010 (adaptado). A presença de sais  na solução do solo faz com que seja dificultada a absorção de água pelas plantas, o que provoca o fenômeno conhecido por seca fisiológica, caracterizado pelo(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumento da salinidade, em que a água do solo atinge uma concentração de sais maior que a das células das raízes das plantas, impedindo, assim, que a água seja absorvida.` },
      { id: 'B', type: 'text', value: `aumento da salinidade, em que o solo atinge um nível muito baixo de água, e as plantas não têm força de sucção para absorver a água.` },
      { id: 'C', type: 'text', value: `diminuição da salinidade, que atinge um nível em que as plantas não têm força de sucção, fazendo com que a água não seja absorvida.` },
      { id: 'D', type: 'text', value: `aumento da salinidade, que atinge um nível em que as plantas têm muita sudação, não tendo força de sucção para superá-la.` },
      { id: 'E', type: 'text', value: `diminuição da salinidade, que atinge um nível em que as plantas ficam túrgidas e não têm força de sudação para superá-la.` },
    ],
    correct: 'A',
    explanation: `A seca fisiológica ocorre quando há água no solo, mas a planta não consegue absorvê-la. Com a salinização, a concentração de sais na solução do solo fica maior que a do interior das células das raízes; por osmose, a água se desloca do meio menos concentrado para o mais concentrado, de modo que ela deixa de entrar (ou sai) da raiz. Assim, o aumento da salinidade impede a absorção de água pela planta (A), caracterizando a seca fisiológica. As opções que citam diminuição da salinidade (C e E) contrariam o enunciado.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `No ano de 2000, um vazamento em dutos de óleo na baía de Guanabara (RJ) causou um dos maiores acidentes ambientais do Brasil. Além de afetar a fauna e a flora, o acidente abalou o equilíbrio da cadeia alimentar de toda a baía. O petróleo forma uma película na superfície da água, o que prejudica as trocas gasosas da atmosfera com a água e desfavorece a realização de fotossíntese pelas algas, que estão na base da cadeia alimentar hídrica. Além disso, o derramamento de óleo contribuiu para o envenenamento das árvores e, consequentemente, para a intoxicação da fauna e flora aquáticas, bem como conduziu à morte diversas espécies de animais, entre outras formas de vida, afetando também a atividade pesqueira. LAUBIER, L. Diversidade da Maré Negra. In: Scientific American Brasil . 4(39), ago. 2005 (adaptado). A situação exposta no texto e suas implicações`,
    alternatives: [
      { id: 'A', type: 'text', value: `indicam a independência da espécie humana com relação ao ambiente marinho.` },
      { id: 'B', type: 'text', value: `alertam para a necessidade do controle da poluição ambiental para redução do efeito estufa.` },
      { id: 'C', type: 'text', value: `ilustram a interdependência das diversas formas de vida (animal, vegetal e outras) e o seu habitat.` },
      { id: 'D', type: 'text', value: `indicam a alta resistência do meio ambiente à ação do homem, além de evidenciar a sua sustentabilidade mesmo em condições extremas de poluição.` },
      { id: 'E', type: 'text', value: `evidenciam a grande capacidade animal de se adaptar às mudanças ambientais, em contraste com a baixa capacidade das espécies vegetais, que estão na base da cadeia alimentar hídrica.` },
    ],
    correct: 'C',
    explanation: `O vazamento de óleo formou uma película na superfície da água, prejudicando as trocas gasosas e a fotossíntese das algas (base da cadeia alimentar), e contaminou fauna e flora, afetando inclusive a pesca. Isso mostra que todas as formas de vida e o ambiente estão interligados: um dano na base ou no meio repercute em toda a cadeia e nas atividades humanas. Portanto, a situação ilustra a interdependência das diversas formas de vida (animal, vegetal e outras) e o seu habitat (C). As demais negam essa interdependência ou a suposta resistência do ambiente, contrariando o texto.`,
    subject: ['bio'],
    topics: ['Impactos ambientais e conservação', 'Ecologia', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Para explicar a absorção de nutrientes, bem como a função das microvilosidades das membranas das células que revestem as paredes internas do intestino delgado, um estudante realizou o seguinte experimento: Colocou 200 mℓ de água em dois recipientes. No primeiro recipiente, mergulhou, por 5 segundos, um pedaço de papel liso, como na FIGURA 1; no segundo recipiente, fez o mesmo com um pedaço de papel com dobras simulando as microvilosidades, conforme FIGURA 2. Os dados obtidos foram: a quantidade de água absorvida pelo papel liso foi de 8 mℓ, enquanto pelo papel dobrado foi de 12 mℓ. FIGURA 1 FIGURA 2 Com base nos dados obtidos, infere-se que a função das microvilosidades intestinais com relação à absorção de nutrientes pelas células das paredes internas do intestino é a de`,
    images: ['/enem/2010/images/enem_2010_d1_q62.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `manter o volume de absorção.` },
      { id: 'B', type: 'text', value: `aumentar a superfície de absorção.` },
      { id: 'C', type: 'text', value: `diminuir a velocidade de absorção.` },
      { id: 'D', type: 'text', value: `aumentar o tempo de absorção.` },
      { id: 'E', type: 'text', value: `manter a seletividade na absorção.` },
    ],
    correct: 'B',
    explanation: `No experimento, o papel com dobras (que simula as microvilosidades) absorveu mais água (12 mL) que o papel liso (8 mL), embora ambos ocupassem a mesma área externa (10 × 5 cm). As dobras aumentam a área de contato disponível para a absorção. Por analogia, as microvilosidades das células intestinais aumentam enormemente a superfície de absorção, permitindo captar mais nutrientes (B). Elas não servem apenas para manter o volume (A), diminuir a velocidade (C) ou aumentar o tempo (D) de absorção.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O crescimento da produção de energia elétrica ao longo do tempo tem influenciado decisivamente o progresso da humanidade, mas também tem criado uma séria preocupação: o prejuízo ao meio ambiente. Nos próximos anos, uma nova tecnologia de geração de energia elétrica deverá ganhar espaço: as células a combustível hidrogênio/oxigênio. VILLULLAS, H. M; TICIANELLI, E. A; GONZÁLEZ, E. R. Química Nova Na Escola. N o 15, maio 2002. Com base no texto e na figura, a produção de energia elétrica por meio da célula a combustível hidrogênio/ oxigênio diferencia-se dos processos convencionais porque`,
    images: ['/enem/2010/images/enem_2010_d1_q63.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `transforma energia química em energia elétrica, sem causar danos ao meio ambiente, porque o principal subproduto formado é a água.` },
      { id: 'B', type: 'text', value: `converte a energia química contida nas moléculas dos componentes em energia térmica, sem que ocorra a produção de gases poluentes nocivos ao meio ambiente.` },
      { id: 'C', type: 'text', value: `transforma energia química em energia elétrica, porém emite gases poluentes da mesma forma que a produção de energia a partir dos combustíveis fósseis.` },
      { id: 'D', type: 'text', value: `converte energia elétrica proveniente dos combustíveis fósseis em energia química, retendo os gases poluentes produzidos no processo sem alterar a qualidade do meio ambiente.` },
      { id: 'E', type: 'text', value: `converte a energia potencial acumulada nas moléculas de água contidas no sistema em energia química, sem que ocorra a produção de gases poluentes nocivos ao meio ambiente.` },
    ],
    correct: 'A',
    explanation: `Na célula a combustível, o H₂ é oxidado e o O₂ é reduzido, convertendo diretamente energia química em energia elétrica (processo eletroquímico). Diferentemente das usinas que queimam combustíveis fósseis, o único subproduto dessa reação é a água (2 H₂ + O₂ → 2 H₂O), sem emissão de gases poluentes. Por isso a alternativa A está correta: transforma energia química em elétrica sem danos ambientais, tendo a água como principal subproduto. As demais erram ao afirmar emissão de poluentes (C), produção apenas de energia térmica (B) ou o sentido inverso da conversão (D e E).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Alguns anfíbios e répteis são adaptados à vida subterrânea. Nessa situação, apresentam algumas características corporais como, por exemplo, ausência de patas, corpo anelado que facilita o deslocamento no subsolo e, em alguns casos, ausência de olhos. Suponha que um biólogo tentasse explicar a origem das adaptações mencionadas no texto utilizando conceitos da teoria evolutiva de Lamarck. Ao adotar esse ponto de vista, ele diria que`,
    alternatives: [
      { id: 'A', type: 'text', value: `as características citadas no texto foram originadas pela seleção natural.` },
      { id: 'B', type: 'text', value: `a ausência de olhos teria sido causada pela falta de uso dos mesmos, segundo a lei do uso e desuso.` },
      { id: 'C', type: 'text', value: `o corpo anelado é uma característica fortemente adaptativa, mas seria transmitida apenas à primeira geração de descendentes.` },
      { id: 'D', type: 'text', value: `as patas teriam sido perdidas pela falta de uso e, em seguida, essa característica foi incorporada ao patrimônio genético e então transmitidas aos descendentes.` },
      { id: 'E', type: 'text', value: `as características citadas no texto foram adquiridas por meio de mutações e depois, ao longo do tempo, foram selecionadas por serem mais adaptadas ao ambiente em que os organismos se encontram.` },
    ],
    correct: 'B',
    explanation: `Lamarck propôs a lei do uso e desuso: órgãos usados se desenvolvem e os não usados atrofiam, e essas mudanças seriam transmitidas aos descendentes (herança dos caracteres adquiridos). Sob essa ótica, a ausência de olhos nos animais subterrâneos seria explicada pela falta de uso dos olhos no ambiente escuro (B). As alternativas que citam seleção natural (A) ou mutações seguidas de seleção (E) são explicações darwinistas/neodarwinistas, e não lamarckistas.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As misturas efervescentes, em pó ou em comprimidos, são comuns para a administração de vitamina C ou de medicamentos para azia. Essa forma farmacêutica sólida foi desenvolvida para facilitar o transporte, aumentar a estabilidade de substâncias e, quando em solução, acelerar a absorção do fármaco pelo organismo. As matérias-primas que atuam na efervescência são, em geral, o ácido tartárico ou o ácido cítrico que reagem com um sal de caráter básico, como o bicarbonato de sódio (NaHCO₃), quando em contato com a água. A partir do contato da mistura efervescente com a água, ocorre uma série de reações químicas simultâneas: liberação de íons, formação de ácido e liberação do gás carbônico - gerando a efervescência. As equações a seguir representam as etapas da reação da mistura efervescente na água, em que foram omitidos os estados de agregação dos reagentes, e H₃A representa o ácido cítrico. I- NaHCO₃ → Na⁺ + II- H₂CO₃ U H₂O + CO₂ III- + H⁺ U H₂CO₃ IV- H₃A U 3H⁺ + A ionização, a dissociação iônica, a formação do ácido e a liberação do gás ocorrem, respectivamente, nas seguintes etapas:`,
    images: ['/enem/2010/images/enem_2010_d1_q65.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `IV, I, II e III` },
      { id: 'B', type: 'text', value: `I, IV, III e II` },
      { id: 'C', type: 'text', value: `IV, III, I e II` },
      { id: 'D', type: 'text', value: `I, IV, II e III` },
      { id: 'E', type: 'text', value: `IV, I, III e II` },
    ],
    correct: 'E',
    explanation: `Analisando as etapas: IV (H3A ⇌ 3 H+ + A3-) é a ionização do ácido cítrico, molécula que libera H+; I (NaHCO3 → Na+ + HCO₃-) é a dissociação iônica do sal; III (HCO₃- + H+ ⇌ H₂CO₃) é a formação do ácido carbônico; II (H₂CO₃ ⇌ H₂O + CO₂) é a liberação do gás carbônico, responsável pela efervescência. Assim, ionização, dissociação iônica, formação do ácido e liberação do gás correspondem, respectivamente, a IV, I, III e II (E).`,
    subject: ['qui'],
    topics: ['Funções inorgânicas', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Um ambiente capaz de asfixiar todos os animais conhecidos do planeta foi colonizado por pelo menos três espécies diferentes de invertebrados marinhos. Descobertos a mais de 3 000 m de profundidade no Mediterrâneo, eles são os primeiros membros do reino animal a prosperar mesmo diante da ausência total de oxigênio. Até agora, achava-se que só bactérias pudessem ter esse estilo de vida. Não admira que os bichos pertençam a um grupo pouco conhecido, o dos loricíferos, que mal chegam a 1,0 mm. Apesar do tamanho, possuem cabeça, boca, sistema digestivo e uma carapaça. A adaptação dos bichos à vida no sufoco é tão profunda que suas células dispensaram as chamadas mitocôndrias. LOPES, R. J. Italianos descobrem animal que vive em água sem oxigênio . Disponível em: http://www1.folha.uol.com.br. Acesso em: 10 abr. 2010 (adaptado). Que substâncias poderiam ter a mesma função do O₂ na respiração celular realizada pelos loricíferos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `S e CH₄` },
      { id: 'B', type: 'text', value: `S e NO₃⁻` },
      { id: 'C', type: 'text', value: `H₂ e NO₃⁻` },
      { id: 'D', type: 'text', value: `CO₂ e CH₄` },
      { id: 'E', type: 'text', value: `H₂ e CO₂` },
    ],
    correct: 'B',
    explanation: `Na respiração celular, a função do O₂ é ser o aceptor final de elétrons, ou seja, atuar como agente oxidante ao fim da cadeia respiratória. Para substituí-lo, outras substâncias precisam também ser oxidantes (capazes de receber elétrons). Entre as opções, o enxofre (S) e o nitrato (NO₃-) são oxidantes usados como aceptores finais na respiração anaeróbica de certas bactérias (B). O H₂ é redutor (doador de elétrons) e o CH₄ é produto já reduzido, por isso não desempenham o papel do O₂, o que elimina as demais alternativas.`,
    subject: ['bio'],
    topics: ['Bioenergética', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O abastecimento de nossas necessidades energéticas futuras dependerá certamente do desenvolvimento de tecnologias para aproveitar a energia solar com maior eficiência. A energia solar é a maior fonte de energia mundial. Num dia ensolarado, por exemplo, aproximadamente 1 kJ de energia solar atinge cada metro quadrado da superfície terrestre por segundo. No entanto, o aproveitamento dessa energia é difícil porque ela é diluída (distribuída por uma área muito extensa) e oscila com o horário e as condições climáticas. O uso efetivo da energia solar depende de formas de estocar a energia coletada para uso posterior. BROWN, T. Química a Ciência Central . São Paulo: Pearson Prentice Hall, 2005. Atualmente, uma das formas de se utilizar a energia solar tem sido armazená-la por meio de processos químicos endotérmicos que mais tarde podem ser revertidos para liberar calor. Considerando a reação: CH₄(g) + H₂O(v) + calor ⇌ CO(g) + 3 H₂(g) e analisando-a como potencial mecanismo para o aproveitamento posterior da energia solar, conclui-se que se trata de uma estratégia`,
    alternatives: [
      { id: 'A', type: 'text', value: `insatisfatória, pois a reação apresentada não permite que a energia presente no meio externo seja absorvida pelo sistema para ser utilizada posteriormente.` },
      { id: 'B', type: 'text', value: `insatisfatória, uma vez que há formação de gases poluentes e com potencial poder explosivo, tornando-a uma reação perigosa e de difícil controle.` },
      { id: 'C', type: 'text', value: `insatisfatória, uma vez que há formação de gás CO que não possui conteúdo energético passível de ser aproveitado posteriormente e é considerado um gás poluente.` },
      { id: 'D', type: 'text', value: `satisfatória, uma vez que a reação direta ocorre com absorção de calor e promove a formação das substâncias combustíveis que poderão ser utilizadas posteriormente para obtenção de energia e realização de trabalho útil.` },
      { id: 'E', type: 'text', value: `satisfatória, uma vez que a reação direta ocorre com liberação de calor havendo ainda a formação das substâncias combustíveis que poderão ser utilizadas posteriormente para obtenção de energia e realização de trabalho útil.` },
    ],
    correct: 'D',
    explanation: `A reação CH₄(g) + H₂O(v) + calor ⇌ CO(g) + 3 H₂(g) é endotérmica no sentido direto (absorve calor). Isso permite armazenar a energia solar na forma de ligações químicas: a energia captada é usada para formar substâncias combustíveis (CO e H₂). Mais tarde, a reação inversa (exotérmica) libera essa energia como calor, que pode ser aproveitado para realizar trabalho útil. Portanto, é uma estratégia satisfatória, pois a reação direta ocorre com absorção de calor e promove a formação de combustíveis utilizáveis posteriormente (D).`,
    subject: ['qui'],
    topics: ['Termoquímica', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A energia elétrica consumida nas residências é medida, em quilowatt-hora, por meio de um relógio medidor de consumo. Nesse relógio, da direita para esquerda, tem-se o ponteiro da unidade, da dezena, da centena e do milhar. Se um ponteiro estiver entre dois números, considera-se o último número ultrapassado pelo ponteiro. Suponha que as medidas indicadas nos esquemas seguintes tenham sido feitas em uma cidade em que o preço do quilowatt-hora fosse de R$ 0,20. FILHO , A.G.; BAROLLI, E. Instalação Elétrica. São Paulo: Scipione,1997. O valor a ser pago pelo consumo de energia elétrica registrado seria de`,
    images: ['/enem/2010/images/enem_2010_d1_q68.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 41,80.` },
      { id: 'B', type: 'text', value: `R$ 42,00.` },
      { id: 'C', type: 'text', value: `R$ 43,00.` },
      { id: 'D', type: 'text', value: `R$ 43,80.` },
      { id: 'E', type: 'text', value: `R$ 44,00.` },
    ],
    correct: 'E',
    explanation: `O consumo é a diferença entre a leitura atual e a leitura do mês passado registradas nos ponteiros do medidor, resultando em 220 kWh consumidos. Multiplicando pelo preço do quilowatt-hora: 220 kWh × R$ 0,20 = R$ 44,00. Logo, o valor a ser pago pelo consumo registrado é R$ 44,00 (E).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `No que tange à tecnologia de combustíveis alternativos, muitos especialistas em energia acreditam que os alcoóis vão crescer em importância em um futuro próximo. Realmente, alcoóis como metanol e etanol têm encontrado alguns nichos para uso doméstico como combustíveis há muitas décadas e, recentemente, vêm obtendo uma aceitação cada vez maior como aditivos, ou mesmo como substitutos para gasolina em veículos. Algumas das propriedades físicas desses combustíveis são mostradas no quadro seguinte. BAIRD, C. Química Ambiental . São Paulo: Artmed, 1995 (adaptado). Dados: Massas molares em g/mol: H = 1,0; C = 12,0; O = 16,0. Considere que, em pequenos volumes, o custo de produção de ambos os alcoóis seja o mesmo. Dessa forma, do ponto de vista econômico, é mais vantajoso utilizar`,
    images: ['/enem/2010/images/enem_2010_d1_q69_1.jpg', '/enem/2010/images/enem_2010_d1_q69_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `metanol, pois sua combustão completa fornece aproximadamente 22,7 kJ de energia por litro de combustível queimado.` },
      { id: 'B', type: 'text', value: `etanol, pois sua combustão completa fornece aproximadamente 29,7 kJ de energia por litro de combustível queimado.` },
      { id: 'C', type: 'text', value: `metanol, pois sua combustão completa fornece aproximadamente 17,9 MJ de energia por litro de combustível queimado.` },
      { id: 'D', type: 'text', value: `etanol, pois sua combustão completa fornece aproximadamente 23,5 MJ de energia por litro de combustível queimado.` },
      { id: 'E', type: 'text', value: `etanol, pois sua combustão completa fornece aproximadamente 33,7 MJ de energia por litro de combustível queimado.` },
    ],
    correct: 'D',
    explanation: `Calcula-se a energia liberada por litro de cada álcool. Ambos têm densidade 0,79 g/mL = 790 g/L. Etanol (C2H6O, M = 46 g/mol): 790/46 ≈ 17,2 mol/L; energia = 17,2 × 1367 ≈ 23 500 kJ ≈ 23,5 MJ/L. Metanol (CH4O, M = 32 g/mol): 790/32 ≈ 24,7 mol/L; energia = 24,7 × 726 ≈ 17 900 kJ ≈ 17,9 MJ/L. Como o custo de produção é o mesmo, o etanol é mais vantajoso por fornecer mais energia por litro (≈ 23,5 MJ/L), alternativa D.`,
    subject: ['qui'],
    topics: ['Termoquímica', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Observe a tabela seguinte. Ela traz especificações técnicas constantes no manual de instruções fornecido pelo fabricante de uma torneira elétrica.
Disponível em: http://www.cardal.com.br/manualprod/Manuais/Torneira%20Suprema/-Manual_Torneira_Suprema_roo.pdf
Considerando que o modelo de maior potência da versão 220 V da torneira suprema foi inadvertidamente conectada a uma rede com tensão nominal de 127 V, e que o aparelho está configurado para trabalhar em sua máxima potência. Qual o valor aproximado da potência ao ligar a torneira?`,
    images: ['/enem/2010/images/enem_2010_d1_q70.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.830 W` },
      { id: 'B', type: 'text', value: `2.800 W` },
      { id: 'C', type: 'text', value: `3.200 W` },
      { id: 'D', type: 'text', value: `4.030 W` },
      { id: 'E', type: 'text', value: `5.500 W` },
    ],
    correct: 'A',
    explanation: `A potência de um resistor é P = V²/R, com R constante. Pelos dados nominais do modelo 220 V na potência máxima (função quente, 5500 W): R = V²/P = 220²/5500 = 48400/5500 = 8,8 Ω. Ligando esse aparelho à rede de 127 V: P = V²/R = 127²/8,8 = 16129/8,8 ≈ 1832 W ≈ 1830 W (A). Como a tensão aplicada caiu, a potência diminui bastante em relação à nominal.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O uso prolongado de lentes de contato, sobretudo durante a noite, aliado a condições precárias de higiene representam fatores de risco para o aparecimento de uma infecção denominada ceratite microbiana, que causa ulceração inflamatória da córnea. Para interromper o processo da doença, é necessário tratamento antibiótico. De modo geral, os fatores de risco provocam a diminuição da oxigenação corneana e determinam mudanças no seu metabolismo, de um estado aeróbico para anaeróbico. Como decorrência, observa-se a diminuição no número e na velocidade de mitoses do epitélio, o que predispõe ao aparecimento de defeitos epiteliais e à invasão bacteriana. CRESTA, F. Lente de contato e infecção ocular. Revista Sinopse de Oftalmologia. São Paulo: Moreira Jr.,v.04, n.04, 2002 (adaptado). A instalação das bactérias e o avanço do processo infeccioso na córnea estão relacionados a algumas características gerais desses microrganismos, tais como:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `A grande capacidade de adaptação, considerando as constantes mudanças no ambiente em que se reproduzem e o processo aeróbico como a melhor opção desses microrganismos para a obtenção de energia.` },
      { id: 'B', type: 'text', value: `A grande capacidade de sofrer mutações, aumentando a probabilidade do aparecimento de formas resistentes e o processo anaeróbico da fermentação como a principal via de obtenção de energia.` },
      { id: 'C', type: 'text', value: `A diversidade morfológica entre as bactérias, aumentando a variedade de tipos de agentes infecciosos e a nutrição heterotrófica, como forma de esses microrganismos obterem matéria-prima e energia.` },
      { id: 'D', type: 'text', value: `O alto poder de reprodução, aumentando a variabilidade genética dos milhares de indivíduos e a nutrição heterotrófica, como única forma de obtenção de matéria- prima e energia desses microrganismos.` },
      { id: 'E', type: 'text', value: `O alto poder de reprodução, originando milhares de descendentes geneticamente idênticos entre si e a diversidade metabólica, considerando processos aeróbicos e anaeróbicos para a obtenção de energia.` },
    ],
    correct: 'E',
    explanation: `As bactérias têm alto poder de reprodução (divisão assexuada), originando rapidamente milhares de descendentes geneticamente idênticos, o que favorece a colonização da córnea. Além disso, apresentam grande diversidade metabólica, realizando tanto processos aeróbicos quanto anaeróbicos para obter energia, o que lhes permite sobreviver conforme a oxigenação do tecido diminui. Essas características (reprodução rápida e versatilidade metabólica) explicam a instalação e o avanço da infecção (E). As demais atribuem a adaptação a mecanismos incorretos ou a uma única via, como só mutação ou só fermentação.`,
    subject: ['bio'],
    topics: ['Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Todos os organismos necessitam de água e grande parte deles vive em rios, lagos e oceanos. Os processos biológicos, como respiração e fotossíntese, exercem profunda influência na química das águas naturais em todo o planeta. O oxigênio é ator dominante na química e na bioquímica da hidrosfera. Devido a sua baixa solubilidade em água (9,0 mg/ℓ a 20ºC) a disponibilidade de oxigênio nos ecossistemas aquáticos estabelece o limite entre a vida aeróbica e anaeróbica. Nesse contexto, um parâmetro chamado Demanda Bioquímica de Oxigênio (DBO) foi definido para medir a quantidade de matéria orgânica presente em um sistema hídrico. A DBO corresponde à massa de O₂ em miligramas necessária para realizar a oxidação total do carbono orgânico em um litro de água. BAIRD, C. Química Ambiental . Ed. Bookmam, 2005 (adaptado). Dados: Massas molares em g/mol: C = 12; H = 1; O = 16. Suponha que 10 mg de açúcar (fórmula mínima CH₂O e massa molar igual a 30 g/mol) são dissolvidos em um litro de água; em quanto a DBO será aumentada?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 mg de O 2 /litro` },
      { id: 'B', type: 'text', value: `1,7 mg de O 2 / litro` },
      { id: 'C', type: 'text', value: `2,7 mg de O 2 / litro` },
      { id: 'D', type: 'text', value: `9,4 mg de O 2 / litro` },
      { id: 'E', type: 'text', value: `10,7 mg de O 2 / litro` },
    ],
    correct: 'E',
    explanation: `A DBO é a massa de O₂ necessária para oxidar totalmente a matéria orgânica presente em 1 litro de água. A oxidação do açúcar (fórmula mínima CH₂O, M = 30 g/mol) é CH₂O + O₂ → CO₂ + H₂O, na proporção de 1 mol de CH₂O para 1 mol de O₂. Para 10 mg de CH₂O, a massa de O₂ (M = 32 g/mol) é 10 × (32/30) ≈ 10,7 mg. Logo, a DBO aumenta em aproximadamente 10,7 mg de O₂/litro (E).`,
    subject: ['qui'],
    topics: ['Estequiometria e cálculos químicos', 'Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A composição média de uma bateria automotiva esgotada é de aproximadamente 32% Pb, 3% PbO, 17% PbO₂ e 36% PbSO₄. A média de massa da pasta residual de uma bateria usada é de 6 kg, onde 19% é PbO₂, 60% PbSO₄ e 21% Pb. Entre todos os compostos de chumbo presentes na pasta, o que mais preocupa é o sulfato de chumbo (II), pois nos processos pirometalúrgicos, em que os compostos de chumbo (placas das baterias) são fundidos, há a conversão de sulfato em dióxido de enxofre, gás muito poluente. Para reduzir o problema das emissões de SO₂(g), a indústria pode utilizar uma planta mista, ou seja, utilizar o processo hidrometalúrgico, para a dessulfuração antes da fusão do composto de chumbo. Nesse caso, a redução de sulfato presente no PbSO₄ é feita via lixiviação com solução de carbonato de sódio (Na₂CO₃) 1M a 45 ºC, em que se obtém o carbonato de chumbo (II) com rendimento de 91%. Após esse processo, o material segue para a fundição para obter o chumbo metálico. PbSO₄ + Na₂CO₃ → PbCO₃ + Na₂SO₄ Dados: Massas Molares em g/mol Pb = 207; S = 32; Na = 23; O = 16; C = 12 ARAÚJO, R. V. V.; TINDADE, R. B. E.; SOARES, P. S. M. Reciclagem de chumbo de bateria auto- motiva: estudo de caso. Disponível em: http://www.iqsc.usp.br. Acesso em: 17 abr. 2010 (adaptado). Segundo as condições do processo apresentado para a obtenção de carbonato de chumbo (II) por meio da lixiviação por carbonato de sódio e considerando uma massa de pasta residual de uma bateria de 6 kg, qual quantidade aproximada, em quilogramas, de PbCO₃ é obtida?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,7 kg` },
      { id: 'B', type: 'text', value: `1,9 kg` },
      { id: 'C', type: 'text', value: `2,9 kg` },
      { id: 'D', type: 'text', value: `3,3 kg` },
      { id: 'E', type: 'text', value: `3,6 kg` },
    ],
    correct: 'C',
    explanation: `Na pasta de 6 kg, o PbSO4 corresponde a 60%: 0,60 × 6000 g = 3600 g. A reação é PbSO4 + Na2CO₃ → PbCO3 + Na2SO₄ (proporção 1:1). Massas molares: PbSO4 = 207 + 32 + 64 = 303 g/mol; PbCO3 = 207 + 12 + 48 = 267 g/mol. Mols de PbSO4 = 3600/303 ≈ 11,88 mol, que geram teoricamente 11,88 × 267 ≈ 3172 g de PbCO3. Com rendimento de 91%: 3172 × 0,91 ≈ 2887 g ≈ 2,9 kg (C).`,
    subject: ['qui'],
    topics: ['Estequiometria e cálculos químicos', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `A eletrólise é muito empregada na indústria com o objetivo de reaproveitar parte dos metais sucateados. O cobre, por exemplo, é um dos metais com maior rendimento no processo de eletrólise, com uma recuperação de aproximadamente 99,9%. Por ser um metal de alto valor comercial e de múltiplas aplicações, sua recuperação torna-se viável economicamente. Suponha que, em um processo de recuperação de cobre puro, tenha-se eletrolisado uma solução de sulfato de cobre (II) (CuSO₄) durante 3 h, empregando-se uma corrente elétrica de intensidade igual a 10 A. A massa de cobre puro recuperada é de aproximadamente Dados: Constante de Faraday F = 96 500 C/mol; Massa molar em g/mol: Cu = 63,5.`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,02 g.` },
      { id: 'B', type: 'text', value: `0,04 g.` },
      { id: 'C', type: 'text', value: `2,40 g.` },
      { id: 'D', type: 'text', value: `35,5 g.` },
      { id: 'E', type: 'text', value: `71,0 g.` },
    ],
    correct: 'D',
    explanation: `Na eletrólise vale a relação m = (M · I · t)/(n · F). Dados: I = 10 A; t = 3 h = 10800 s; semirreação Cu²+ + 2 e⁻ → Cu (n = 2); M = 63,5 g/mol; F = 96500 C/mol. A carga é Q = I · t = 10 × 10800 = 108000 C. A massa é m = (63,5 × 108000)/(2 × 96500) = 6 858 000/193 000 ≈ 35,5 g (D).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Dois pesquisadores percorreram os trajetos marcados no mapa. A tarefa deles foi analisar os ecossistemas e, encontrando problemas, relatar e propor medidas de recuperação. A seguir, são reproduzidos trechos aleatórios extraídos dos relatórios desses dois pesquisadores. Trechos aleatórios extraídos do relatório do pesquisador P 1 : I. “Por causa da diminuição drástica das espécies vegetais deste ecossistema, como os pinheiros, a gralha azul também está em processo de extinção”. II. “As árvores de troncos tortuosos e cascas grossas que predominam nesse ecossistema estão sendo utilizadas em carvoarias”. Trechos aleatórios extraídos do relatório do pesquisador P 2 : III. “Das palmeiras que predominam nesta região podem ser extraídas substâncias importantes para a economia regional”. IV. “Apesar da aridez desta região, em que encontramos muitas plantas espinhosas, não se pode desprezar a sua biodiversidade.” Ecossistemas brasileiros: mapa da distribuição dos ecossistemas . Disponível em: http://educação.uol.com.br/ciências/ult1686u52.jhtm. Acesso em: 20 abr. 2010 (adaptado). Os trechos I, II, III e IV referem-se, pela ordem, aos seguintes ecossistemas:`,
    images: ['/enem/2010/images/enem_2010_d1_q75.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Caatinga, Cerrado, Zona dos cocais e Floresta Amazônica.` },
      { id: 'B', type: 'text', value: `Mata de Araucárias, Cerrado, Zona dos cocais e Caatinga.` },
      { id: 'C', type: 'text', value: `Manguezais, Zona dos cocais, Cerrado e Mata Atlântica.` },
      { id: 'D', type: 'text', value: `Floresta Amazônica, Cerrado, Mata Atlântica e Pampas.` },
      { id: 'E', type: 'text', value: `Mata Atlântica, Cerrado, Zona dos cocais e Pantanal.` },
    ],
    correct: 'B',
    explanation: `Associando os trechos aos ecossistemas: I (pinheiros/Araucária e gralha-azul) corresponde à Mata de Araucárias; II (árvores de troncos tortuosos e cascas grossas, usadas em carvoarias) ao Cerrado; III (palmeiras das quais se extraem substâncias de valor econômico) à Zona dos Cocais; IV (região árida com plantas espinhosas) à Caatinga. Na ordem I, II, III e IV, tem-se Mata de Araucárias, Cerrado, Zona dos Cocais e Caatinga (B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Investigadores das Universidades de Oxford e da Califórnia desenvolveram uma variedade de Aedes aegypti geneticamente modificada que é candidata para uso na busca de redução na transmissão do vírus da dengue. Nessa nova variedade de mosquito, as fêmeas não conseguem voar devido à interrupção do desenvolvimento do músculo das asas. A modificação genética introduzida é um gene dominante condicional, isso é, o gene tem expressão dominante (basta apenas uma cópia do alelo) e este só atua nas fêmeas. FU, G. et al. Female-specific flightless phenotype for mosquito control. PNAS 107 (10): 4550-4554, 2010. Prevê-se, porém, que a utilização dessa variedade de Aedes aegypti demore ainda anos para ser implementada, pois há demanda de muitos estudos com relação ao impacto ambiental. A liberação de machos de Aedes aegypti dessa variedade geneticamente modificada reduziria o número de casos de dengue em uma determinada região porque`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `diminuiria o sucesso reprodutivo desses machos transgênicos.` },
      { id: 'B', type: 'text', value: `restringiria a área geográfica de voo dessa espécie de mosquito.` },
      { id: 'C', type: 'text', value: `dificultaria a contaminação e reprodução do vetor natural da doença.` },
      { id: 'D', type: 'text', value: `tornaria o mosquito menos resistente ao agente etiológico da doença.` },
      { id: 'E', type: 'text', value: `dificultaria a obtenção de alimentos pelos machos geneticamente modificados.` },
    ],
    correct: 'C',
    explanation: `A variedade transgênica possui um gene dominante condicional que impede as fêmeas de voar, pois o músculo das asas não se desenvolve. Como somente as fêmeas de Aedes aegypti transmitem a dengue e, sem voar, não se dispersam nem picam, a liberação de machos transgênicos introduz esse alelo na população: a prole fêmea resultante não voa. Com isso, dificulta-se a reprodução e a atuação do vetor natural da doença, reduzindo os casos de dengue (C). Os machos não se alimentam de sangue nem transmitem a doença, o que elimina as alternativas sobre resistência ou alimentação.`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `No ano de 2004, diversas mortes de animais por envenenamento no zoológico de São Paulo foram evidenciadas. Estudos técnicos apontam suspeita de intoxicação por monofluoracetato de sódio, conhecido como composto 1080 e ilegalmente comercializado como raticida. O monofluoracetato de sódio é um derivado do ácido monofluoracético e age no organismo dos mamíferos bloqueando o ciclo de Krebs, que pode levar à parada da respiração celular oxidativa e ao acúmulo de amônia na circulação. monofluoracetato de sódio. Disponível em: http://www1.folha.uol.com.br. Acesso em: 05 ago. 2010 (adaptado). O monofluoracetato de sódio pode ser obtido pela`,
    images: ['/enem/2010/images/enem_2010_d1_q77.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `desidratação do ácido monofluoracético, com liberação de água.` },
      { id: 'B', type: 'text', value: `hidrólise do ácido monofluoracético, sem formação de água.` },
      { id: 'C', type: 'text', value: `perda de íons hidroxila do ácido monofluoracético, com liberação de hidróxido de sódio.` },
      { id: 'D', type: 'text', value: `neutralização do ácido monofluoracético usando hidróxido de sódio, com liberação de água.` },
      { id: 'E', type: 'text', value: `substituição dos íons hidrogênio por sódio na estrutura do ácido monofluoracético, sem formação de água.` },
    ],
    correct: 'D',
    explanation: `O monofluoracetato de sódio é o sal do ácido monofluoracético. Ele se forma por uma reação de neutralização (ácido + base), em que o ácido monofluoracético reage com hidróxido de sódio (NaOH): o H+ do grupo carboxila é substituído por Na+, formando o sal e liberando água (D). Não se trata de desidratação (A) nem de simples troca de íons sem base, e o processo ocorre com formação de água, o que elimina as demais opções.`,
    subject: ['qui'],
    topics: ['Funções inorgânicas', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Duas irmãs que dividem o mesmo quarto de estudos combinaram de comprar duas caixas com tampas para guardarem seus pertences dentro de suas caixas, evitando, assim, a bagunça sobre a mesa de estudos. Uma delas comprou uma metálica, e a outra, uma caixa de madeira de área e espessura lateral diferentes, para facilitar a identificação. Um dia as meninas foram estudar para a prova de Física e, ao se acomodarem na mesa de estudos, guardaram seus celulares ligados dentro de suas caixas. Ao longo desse dia, uma delas recebeu ligações telefônicas, enquanto os amigos da outra tentavam ligar e recebiam a mensagem de que o celular estava fora da área de cobertura ou desligado. Para explicar essa situação, um físico deveria afirmar que o material da caixa, cujo telefone celular não recebeu as ligações é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `madeira, e o telefone não funcionava porque a madeira não é um bom condutor de eletricidade.` },
      { id: 'B', type: 'text', value: `metal, e o telefone não funcionava devido à blindagem eletrostática que o metal proporcionava.` },
      { id: 'C', type: 'text', value: `metal, e o telefone não funcionava porque o metal refletia todo tipo de radiação que nele incidia.` },
      { id: 'D', type: 'text', value: `metal, e o telefone não funcionava porque a área lateral da caixa de metal era maior.` },
      { id: 'E', type: 'text', value: `madeira, e o telefone não funcionava porque a espessura desta caixa era maior que a espessura da caixa de metal.` },
    ],
    correct: 'B',
    explanation: `O celular que não recebeu as ligações estava na caixa de metal. Um invólucro metálico funciona como uma gaiola de Faraday: por blindagem eletrostática, o campo elétrico das ondas eletromagnéticas do sinal não penetra no interior do condutor, impedindo a comunicação. Por isso, o físico diria que o aparelho não funcionou devido à blindagem eletrostática proporcionada pelo metal (B). A caixa de madeira, por ser isolante, não blinda o sinal, razão pela qual o outro telefone funcionou.`,
    subject: ['fis'],
    topics: ['Eletrostática', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As mobilizações para promover um planeta melhor para as futuras gerações são cada vez mais frequentes. A maior parte dos meios de transporte de massa é atualmente movida pela queima de um combustível fóssil. A título de exemplificação do ônus causado por essa prática, basta saber que um carro produz, em média, cerca de 200 g de dióxido de carbono por km percorrido. Revista Aquecimento Global. Ano 2, nº 8. Publicação do Instituto Brasileiro de Cultura Ltda. Um dos principais constituintes da gasolina é o octano (C₈H₁₈). Por meio da combustão do octano é possível a liberação de energia, permitindo que o carro entre em movimento. A equação que representa a reação química desse processo demonstra que`,
    alternatives: [
      { id: 'A', type: 'text', value: `no processo há liberação de oxigênio, sob a forma de O₂.` },
      { id: 'B', type: 'text', value: `o coeficiente estequiométrico para a água é de 8 para 1 do octano.` },
      { id: 'C', type: 'text', value: `no processo há consumo de água, para que haja liberação de energia.` },
      { id: 'D', type: 'text', value: `o coeficiente estequiométrico para o oxigênio é de 12,5 para 1 do octano.` },
      { id: 'E', type: 'text', value: `o coeficiente estequiométrico para o gás carbônico é de 9 para 1 do octano.` },
    ],
    correct: 'D',
    explanation: `A combustão completa do octano é 2 C8H18 + 25 O₂ → 16 CO₂ + 18 H₂O. Dividindo por 2 para referir tudo a 1 mol de octano: C8H18 + 12,5 O₂ → 8 CO₂ + 9 H₂O. Assim, o coeficiente estequiométrico do oxigênio é 12,5 para 1 do octano (D). Não há liberação de O₂ (ele é consumido) nem consumo de água (ela é produzida), e para 1 octano formam-se 8 CO₂ (e não 9) e 9 H₂O, o que elimina as outras alternativas.`,
    subject: ['qui'],
    topics: ['Reações químicas e balanceamento', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Os pesticidas modernos são divididos em várias classes, entre as quais se destacam os organofosforados, materiais que apresentam efeito tóxico agudo para os seres humanos. Esses pesticidas contêm um átomo central de fósforo ao qual estão ligados outros átomos ou grupo de átomos como oxigênio, enxofre, grupos metoxi ou etoxi, ou um radical orgânico de cadeia longa. Os organofosforados são divididos em três subclasses: Tipo A , na qual o enxofre não se incorpora na molécula; Tipo B , na qual o oxigênio, que faz dupla ligação com fósforo, é substituído pelo enxofre; e Tipo C , no qual dois
oxigênios são substituídos por enxofre.
BAIRD, C. Química Ambiental. Bookmam, 2005.
Um exemplo de pesticida organofosforado Tipo B , que
apresenta grupo etoxi em sua fórmula estrutural, está
representado em:`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2010/images/enem_2010_d1_q80_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2010/images/enem_2010_d1_q80_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2010/images/enem_2010_d1_q80_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2010/images/enem_2010_d1_q80_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2010/images/enem_2010_d1_q80_E.jpg` },
    ],
    correct: 'E',
    explanation: `Nos organofosforados do Tipo B, o oxigênio da dupla ligação com o fósforo (P=O) é substituído por enxofre, resultando em P=S. O grupo etoxi é -O-CH₂CH₃. A estrutura E apresenta justamente a ligação P=S e dois grupos etoxi (OCH2CH₃) ligados ao fósforo, satisfazendo as duas condições do enunciado. A estrutura A possui P=O, e as demais não combinam a ligação P=S com grupos etoxi, por isso E é a correta.`,
    subject: ['qui'],
    topics: ['Funções orgânicas e nomenclatura', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Durante uma obra em um clube, um grupo de trabalhadores teve de remover uma escultura de ferro maciço colocada no fundo de uma piscina vazia. Cinco trabalhadores amarraram cordas à escultura e tentaram puxá-la para cima, sem sucesso. Se a piscina for preenchida com água, ficará mais fácil para os trabalhadores removerem a escultura, pois a`,
    alternatives: [
      { id: 'A', type: 'text', value: `escultura flutuará. Dessa forma, os homens não precisarão fazer força para remover a escultura do fundo.` },
      { id: 'B', type: 'text', value: `escultura ficará com peso menor. Dessa forma, a intensidade da força necessária para elevar a escultura será menor.` },
      { id: 'C', type: 'text', value: `água exercerá uma força na escultura proporcional a sua massa, e para cima. Esta força se somará à força que os trabalhadores fazem para anular a ação da força peso da escultura.` },
      { id: 'D', type: 'text', value: `água exercerá uma força na escultura para baixo, e esta passará a receber uma força ascendente do piso da piscina. Esta força ajudará a anular a ação da força peso na escultura.` },
      { id: 'E', type: 'text', value: `água exercerá uma força na escultura proporcional ao seu volume, e para cima. Esta força se somará à força que os trabalhadores fazem, podendo resultar em uma força ascendente maior que o peso da escultura.` },
    ],
    correct: 'E',
    explanation: `Ao encher a piscina, a escultura submersa passa a sofrer o empuxo, força vertical para cima cuja intensidade é igual ao peso do volume de água deslocado (Princípio de Arquimedes), ou seja, proporcional ao volume da escultura. Esse empuxo se soma à força que os trabalhadores fazem para erguer a peça, podendo inclusive resultar numa força ascendente maior que o peso, facilitando a remoção (E). O empuxo depende do volume (e não da massa, como afirma C), e a escultura de ferro maciço não flutua (A).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `As baterias de Ni-Cd muito utilizadas no nosso cotidiano não devem ser descartadas em lixos comuns uma vez que uma considerável quantidade de cádmio é volatilizada e emitida para o meio ambiente quando as baterias gastas são incineradas como componente do lixo. Com o objetivo de evitar a emissão de cádmio para a atmosfera durante a combustão é indicado que seja feita a reciclagem dos materiais dessas baterias. Uma maneira de separar o cádmio dos demais compostos presentes na bateria é realizar o processo de lixiviação ácida. Nela, tanto os metais (Cd, Ni e eventualmente Co) como os hidróxidos de íons metálicos Cd(OH)₂(s) , Ni(OH)₂(s) , Co(OH)₂(s) presentes na bateria, reagem com uma mistura ácida e são solubilizados. Em função da baixa seletividade (todos os íons metálicos são solubilizados), após a digestão ácida, é realizada uma etapa de extração dos metais com solventes orgânicos de acordo com a reação: M²⁺ (aq) + 2 HR (org) U MR₂(org) + 2 H⁺ (aq) Onde : M²⁺ = Cd²⁺ , Ni²⁺ ou Co²⁺ HR = C₁₆ H₃₄ -PO₂ H : identificado no gráfico por X HR = C₁₂ H₁₂ -PO₂ H : identificado no gráfico por Y O gráfico mostra resultado da extração utilizando os solventes orgânicos X e Y em diferentes pH. Disponível em: http://www.scielo.br. Acesso em 28 abr. 2010. A reação descrita no texto mostra o processo de extração dos metais por meio da reação com moléculas orgânicas, X e Y. Considerando-se as estruturas de X e Y e o processo de separação descrito, pode-se afirmar que`,
    images: ['/enem/2010/images/enem_2010_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `as moléculas X e Y atuam como extratores catiônicos uma vez que a parte polar da molécula troca o íon H⁺ pelo cátion do metal.` },
      { id: 'B', type: 'text', value: `as moléculas X e Y atuam como extratores aniônicos uma vez que a parte polar da molécula troca o íon H⁺ pelo cátion do metal.` },
      { id: 'C', type: 'text', value: `as moléculas X e Y atuam como extratores catiônicos uma vez que a parte apolar da molécula troca o íon pelo cátion do metal.` },
      { id: 'D', type: 'text', value: `as moléculas X e Y atuam como extratores aniônicos uma vez que a parte polar da molécula troca o íon pelo cátion do metal.` },
      { id: 'E', type: 'text', value: `as moléculas X e Y fazem ligações com os íons metálicos resultando em compostos com caráter apolar o que justifica a eficácia da extração.` },
    ],
    correct: 'A',
    explanation: `A reação M²+ + 2 HR ⇌ MR2 + 2 H+ mostra que a molécula orgânica HR cede dois íons H+ e capta o cátion metálico M²+, formando MR2. Como a parte polar da molécula troca o íon H+ pelo cátion do metal, X e Y atuam como extratores catiônicos (captam o cátion). Logo, a alternativa correta é A. As opções que falam em extratores aniônicos contrariam a troca pelo cátion, e a troca não envolve o íon PO2²⁻ nem uma parte apolar, o que elimina as demais.`,
    subject: ['qui'],
    topics: ['Ligações químicas e forças intermoleculares', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Ao colocar um pouco de açúcar na água e mexer até a obtenção de uma só fase, prepara-se uma solução. O mesmo acontece ao se adicionar um pouquinho de sal à água e misturar bem. Uma substância capaz de dissolver o soluto é denominada solvente; por exemplo, a água é um solvente para o açúcar, para o sal e para várias outras substâncias. A figura a seguir ilustra essa citação. Disponível em: www.sobiologia.com.br. Acesso em: 27 abr. 2010. Suponha que uma pessoa, para adoçar seu cafezinho, tenha utilizado 3,42 g de sacarose (massa molar igual a 342 g/mol) para uma xícara de 50 mℓ do líquido. Qual é a concentração final, em mol/ℓ, de sacarose nesse cafezinho?`,
    images: ['/enem/2010/images/enem_2010_d1_q83.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,02` },
      { id: 'B', type: 'text', value: `0,2` },
      { id: 'C', type: 'text', value: `2` },
      { id: 'D', type: 'text', value: `200` },
      { id: 'E', type: 'text', value: `2000` },
    ],
    correct: 'B',
    explanation: `A concentração em mol/L é C = n/V. O número de mols de sacarose é n = massa/massa molar = 3,42/342 = 0,01 mol. O volume é 50 mL = 0,05 L. Portanto, C = 0,01/0,05 = 0,2 mol/L (B).`,
    subject: ['qui'],
    topics: ['Soluções e concentração', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Um grupo de cientistas liderado por pesquisadores do Instituto de Tecnologia da Califórnia (Caltech), nos Estados Unidos, construiu o primeiro metamaterial que apresenta valor negativo do índice de refração relativo para a luz visível. Denomina-se metamaterial um material óptico artificial, tridimensional, formado por pequenas estruturas menores do que o comprimento de onda da luz, o que lhe dá propriedades e comportamentos que não são encontrados em materiais naturais. Esse material tem sido chamado de “canhoto”. Disponível em: http://www.inovacaotecnologica.com.br. Acesso em: 28 abr. 2010 (adaptado). Considerando o
comportamento
atípico
desse
metamaterial, qual é a figura que representa a refração
da luz ao passar do ar para esse meio?`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2010/images/enem_2010_d1_q84_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2010/images/enem_2010_d1_q84_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2010/images/enem_2010_d1_q84_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2010/images/enem_2010_d1_q84_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2010/images/enem_2010_d1_q84_E.jpg` },
    ],
    correct: 'D',
    explanation: `Em meios comuns (índice de refração positivo), ao passar do ar para o meio mais refringente, o raio refratado se aproxima da normal, porém permanece do lado oposto da normal em relação ao raio incidente. No metamaterial de índice de refração negativo, o raio refratado sai para o mesmo lado da normal que o raio incidente (refração negativa), comportamento atípico. A figura que representa o raio refratado desviado para o mesmo lado da normal que o incidente é a D.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Decisão de asfaltamento da rodovia MG-010, acompanhada da introdução de espécies exóticas, e a prática de incêndios criminosos, ameaçam o sofisticado ecossistema do campo rupestre da reserva da Serra do Espinhaço. As plantas nativas desta região, altamente adaptadas a uma alta concentração de alumínio, que inibe o crescimento das raízes e dificultam a absorção de nutrientes e água, estão sendo substituídas por espécies invasoras que não teriam naturalmente adaptação para este ambiente, no entanto elas estão dominando as margens da rodovia, equivocadamente chamada de “estrada ecológica”. Possivelmente a entrada de espécies de plantas exóticas neste ambiente foi provocada pelo uso, neste empreendimento, de um tipo de asfalto (cimento-solo), que possui uma mistura rica em cálcio, que causou modificações químicas aos solos adjacentes à rodovia MG-010. Scientific American. Brasil . Ano 7, nº 79, 2008 (adaptado). Essa afirmação baseia-se no uso de cimento-solo, mistura rica em cálcio que`,
    alternatives: [
      { id: 'A', type: 'text', value: `inibe a toxicidade do alumínio, elevando o pH dessas áreas.` },
      { id: 'B', type: 'text', value: `inibe a toxicidade do alumínio, reduzindo o pH dessas áreas.` },
      { id: 'C', type: 'text', value: `aumenta a toxicidade do alumínio, elevando o pH dessas áreas.` },
      { id: 'D', type: 'text', value: `aumenta a toxicidade do alumínio, reduzindo o pH dessas áreas.` },
      { id: 'E', type: 'text', value: `neutraliza a toxicidade do alumínio, reduzindo o pH dessas áreas.` },
    ],
    correct: 'A',
    explanation: `O alumínio é tóxico às raízes e sua disponibilidade aumenta em solos ácidos (baixo pH). O cimento-solo, rico em cálcio, de caráter básico, eleva o pH do solo, tornando-o menos ácido; com pH mais alto, o Al³+ fica menos solúvel e menos disponível, inibindo sua toxicidade. Assim, a mistura inibe a toxicidade do alumínio elevando o pH dessas áreas (A), o que favorece as espécies invasoras em detrimento das nativas, adaptadas à alta concentração de alumínio.`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Três dos quatro tipos de testes atualmente empregados para a detecção de príons patogênicos em tecidos cerebrais de gado morto são mostrados nas figuras a seguir. Uma vez identificado um animal morto infectado, funcionários das agências de saúde pública e fazendeiros podem removê-lo do suprimento alimentar ou rastrear os alimentos infectados que o animal possa ter consumido. Legenda : PrP SC - proteínas do Príon Scientific American. Brasil , ago. 2004 (adaptado). Analisando os testes I, II e III, para a detecção de príons patogênicos, identifique as condições em que os resultados foram positivos para a presença de príons nos três testes:`,
    images: ['/enem/2010/images/enem_2010_d1_q86.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Animal A, lâmina B e gel A.` },
      { id: 'B', type: 'text', value: `Animal A, lâmina A e gel B.` },
      { id: 'C', type: 'text', value: `Animal B, lâmina A e gel B.` },
      { id: 'D', type: 'text', value: `Animal B, lâmina B e gel A.` },
      { id: 'E', type: 'text', value: `Animal A, lâmina B e gel B.` },
    ],
    correct: 'C',
    explanation: `No Teste I, injeta-se a amostra em um camundongo; havendo príons patogênicos, o animal adoece e morre, o que corresponde ao resultado positivo no animal B. No Teste II, o anticorpo reconhece o príon patogênico na lâmina, de modo que a lâmina que exibe a marcação (reação) é a positiva: lâmina A. No Teste III, após a ação da protease, o marcador revela bandas no gel quando há príon resistente, sendo o gel com bandas o positivo: gel B. Logo, os resultados positivos são Animal B, lâmina A e gel B (C).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `De 15% a 20% da área de um canavial precisa ser renovada anualmente. Entre o período de corte e o de plantação de novas canas, os produtores estão optando por plantar leguminosas, pois elas fixam nitrogênio no solo, um adubo natural para a cana. Essa opção de rotação é agronomicamente favorável, de forma que municípios canavieiros são hoje grandes produtores de soja, amendoim e feijão. As encruzilhadas da fome. Planeta . São Paulo, ano 36, n°. 430, jul. 2008 (adaptado). A rotação de culturas citada no texto pode beneficiar economicamente os produtores de cana porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `a decomposição da cobertura morta dessas culturas resulta em economia na aquisição de adubos industrializados.` },
      { id: 'B', type: 'text', value: `o plantio de cana-de-açúcar propicia um solo mais adequado para o cultivo posterior da soja, do amendoim e do feijão.` },
      { id: 'C', type: 'text', value: `as leguminosas absorvem do solo elementos químicos diferentes dos absorvidos pela cana, restabelecendo o equilíbrio do solo.` },
      { id: 'D', type: 'text', value: `a queima dos restos vegetais do cultivo da cana-de-açúcar transforma-se em cinzas, sendo reincorporadas ao solo, o que gera economia na aquisição de adubo.` },
      { id: 'E', type: 'text', value: `a soja, o amendoim e o feijão, além de possibilitarem a incorporação ao solo de determinadas moléculas disponíveis na atmosfera, são grãos comercializados no mercado produtivo.` },
    ],
    correct: 'E',
    explanation: `As leguminosas (soja, amendoim e feijão) associam-se a bactérias fixadoras que capturam o nitrogênio do ar (N₂) e o incorporam ao solo, funcionando como adubo natural. Assim, a rotação de culturas beneficia economicamente o produtor de cana porque esses grãos, além de enriquecerem o solo com moléculas nitrogenadas provenientes da atmosfera, são comercializados no mercado produtivo (E). As alternativas que atribuem a economia de adubo à queima (D) ou à decomposição (A) não descrevem corretamente o benefício central, que é a fixação de nitrogênio somada à comercialização.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Diversos comportamentos e funções fisiológicas do nosso corpo são periódicos, sendo assim, são classificados como ritmo biológico. Quando o ritmo biológico responde a um período aproximado de 24 horas, ele é denominado ritmo circadiano. Esse ritmo diário é mantido pelas pistas ambientais de claro-escuro e determina comportamentos como o ciclo do sono-vigília e o da alimentação. Uma pessoa, em condições normais, acorda às 8 h e vai dormir às 21 h, mantendo seu ciclo de sono dentro do ritmo dia e noite. Imagine que essa mesma pessoa tenha sido mantida numa sala totalmente escura por mais de quinze dias. Ao sair de lá, ela dormia às 18 h e acordava às 3 h da manhã. Além disso, dormia mais vezes durante o dia, por curtos períodos de tempo, e havia perdido a noção da contagem dos dias, pois, quando saiu, achou que havia passado muito mais tempo no escuro. BRANDÃO, M. L. Psicofisiologia . São Paulo: Atheneu, 2000 (adaptado). Em função das características observadas, conclui-se que a pessoa`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresentou aumento do seu período de sono contínuo e passou a dormir durante o dia, pois seu ritmo biológico foi alterado apenas no período noturno.` },
      { id: 'B', type: 'text', value: `apresentou pouca alteração do seu ritmo circadiano, sendo que sua noção de tempo foi alterada somente pela sua falta de atenção à passagem do tempo.` },
      { id: 'C', type: 'text', value: `estava com seu ritmo já alterado antes de entrar na sala, o que significa que apenas progrediu para um estado mais avançado de perda do ritmo biológico no escuro.` },
      { id: 'D', type: 'text', value: `teve seu ritmo biológico alterado devido à ausência de luz e de contato como mundo externo, no qual a noção de tempo de um dia é modulada pela presença ou ausência do sol.` },
      { id: 'E', type: 'text', value: `deveria não ter apresentado nenhuma mudança do seu período de sono porque, na realidade, continua como seu ritmo normal, independentemente do ambiente em que seja colocada.` },
    ],
    correct: 'D',
    explanation: `O ritmo circadiano (ciclo de cerca de 24 h) é mantido por pistas ambientais, principalmente o ciclo claro-escuro (presença e ausência de luz solar). Isolada numa sala totalmente escura por mais de quinze dias, a pessoa perdeu essas pistas: passou a dormir e acordar em horários deslocados e perdeu a noção da passagem dos dias. Isso mostra que o ritmo biológico foi alterado pela ausência de luz e de contato com o mundo externo, já que a noção de tempo de um dia é modulada pela presença ou ausência do sol (D).`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `Deseja-se instalar uma estação de geração de energia elétrica em um município localizado no interior de um pequeno vale cercado de altas montanhas de difícil acesso. A cidade é cruzada por um rio, que é fonte de água para consumo, irrigação das lavouras de subsistência e pesca. Na região, que possui pequena extensão territorial, a incidência solar é alta o ano todo. A estação em questão irá abastecer apenas o município apresentado. Qual forma de obtenção de energia, entre as apresentadas, é a mais indicada para ser implantada nesse município de modo a causar o menor impacto ambiental?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Termelétrica, pois é possível utilizar a água do rio no sistema de refrigeração.` },
      { id: 'B', type: 'text', value: `Eólica, pois a geografia do local é própria para a captação desse tipo de energia.` },
      { id: 'C', type: 'text', value: `Nuclear, pois o modo de resfriamento de seus sistemas não afetaria a população.` },
      { id: 'D', type: 'text', value: `Fotovoltaica, pois é possível aproveitar a energia solar que chega à superfície do local.` },
      { id: 'E', type: 'text', value: `Hidrelétrica, pois o rio que corta o município é suficiente para abastecer a usina construída.` },
    ],
    correct: 'D',
    explanation: `O local tem alta incidência solar o ano todo, mas é um vale pequeno cercado de altas montanhas de difícil acesso. A energia eólica exige ventos adequados, não garantidos num vale cercado; a nuclear é inviável e de risco; a termelétrica polui; e a hidrelétrica de um rio pequeno teria pouca vazão e grande impacto, comprometendo o abastecimento de água e a pesca. A opção de menor impacto ambiental, aproveitando a característica mais favorável (sol abundante), é a energia fotovoltaica, que converte a luz solar que chega à superfície em eletricidade (D).`,
    subject: ['fis'],
    topics: ['Energia: geração e transformação', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2010,
    day: 1,
    text: `O lixão que recebia 130 toneladas de lixo e contaminava a região com o seu chorume (líquido derivado da decomposição de compostos orgânicos) foi recuperado, transformando-se em um aterro sanitário controlado, mudando a qualidade de vida e a paisagem e proporcionando condições dignas de trabalho para os que dele subsistiam. Revista Promoção da Saúde da Secretaria de Políticas de Saúde. Ano 1, nº 4, dez. 2000 (adaptado). Quais procedimentos técnicos tornam o aterro sanitário mais vantajoso que o lixão, em relação às problemáticas abordadas no texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O lixo é recolhido e incinerado pela combustão a altas temperaturas.` },
      { id: 'B', type: 'text', value: `O lixo hospitalar é separado para ser enterrado e sobre ele, colocada cal virgem.` },
      { id: 'C', type: 'text', value: `O lixo orgânico e inorgânico é encoberto, e o chorume canalizado para ser tratado e neutralizado.` },
      { id: 'D', type: 'text', value: `O lixo orgânico é completamente separado do lixo inorgânico, evitando a formação de chorume.` },
      { id: 'E', type: 'text', value: `O lixo industrial é separado e acondicionado de forma adequada, formando uma bolsa de resíduos.` },
    ],
    correct: 'C',
    explanation: `No aterro sanitário controlado, o lixo orgânico e inorgânico é compactado e encoberto, e o chorume (líquido tóxico da decomposição) é captado e canalizado para ser tratado e neutralizado, evitando a contaminação do solo e da água que ocorria no lixão. Esses procedimentos resolvem as problemáticas abordadas no texto (contaminação pelo chorume), o que corresponde à alternativa C. Incineração (A), separação do lixo hospitalar (B) ou impedir totalmente a formação de chorume (D) não descrevem o funcionamento do aterro apresentado.`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
];

export default ENEM_2010_D1;
