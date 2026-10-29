import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2011_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `No mundo árabe, países governados há décadas por 
regimes políticos centralizadores contabilizam metade 
da população com menos de 30 anos; desses, 56% 
têm acesso à internet. Sentindo-se sem perspectivas 
de futuro e diante da estagnação da economia, esses 
jovens incubam vírus sedentos por modernidade e 
democracia. Em meados de dezembro, um tunisiano 
de 26 anos, vendedor de frutas, põe fogo no próprio 
corpo em protesto por trabalho, justiça e liberdade. Uma 
série de manifestações eclode na Tunísia e, como uma 
epidemia, o vírus libertário começa a se espalhar pelos 
países vizinhos, derrubando em seguida o presidente 
do Egito, Hosni Mubarak. Sites e redes sociais - 
como o Facebook e o Twitter - ajudaram a mobilizar 
manifestantes do norte da África a ilhas do Golfo Pérsico. 
SEQUEIRA, C. D.; VILLAMÉA, L. A epidemia da Liberdade. Istoé Internacional . 2 mar. 2011 (adaptado). 
Considerando os movimentos políticos mencionados no 
texto, o acesso à internet permitiu aos jovens árabes`,
    alternatives: [
      { id: 'A', type: 'text', value: `reforçar a atuação dos regimes políticos existentes.` },
      { id: 'B', type: 'text', value: `tomar conhecimento dos fatos sem se envolver.` },
      { id: 'C', type: 'text', value: `manter o distanciamento necessário à sua segurança.` },
      { id: 'D', type: 'text', value: `disseminar vírus capazes de destruir programas dos computadores.` },
      { id: 'E', type: 'text', value: `difundir ideias revolucionárias que mobilizaram a população.` },
    ],
    correct: 'E',
    explanation: `O texto trata da Primavera Árabe, em que jovens da Tunísia, do Egito e de países vizinhos, sem perspectivas e diante de regimes autoritários, usaram a internet e as redes sociais (Facebook, Twitter) para se mobilizar. Nesse contexto, o acesso à rede permitiu difundir ideias revolucionárias e articular manifestações que mobilizaram a população e derrubaram governantes, por isso a alternativa E está correta. A está errada porque a internet enfraqueceu, e não reforçou, os regimes centralizadores; B e C contrariam o texto, pois os jovens se envolveram e se expuseram, em vez de manter distanciamento; e D interpreta literalmente a palavra 'vírus', que no texto é metáfora para a propagação das ideias libertárias.`,
    subject: ['his'],
    topics: ['Mundo contemporâneo e tempo presente', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O brasileiro tem noção clara dos comportamentos 
éticos e morais adequados, mas vive sob o espectro da 
corrupção, revela pesquisa. Se o país fosse resultado dos 
padrões morais que as pessoas dizem aprovar, pareceria 
mais com a Escandinávia do que com Bruzundanga 
(corrompida nação fictícia de Lima Barreto). 
FRAGA, P. Ninguém é inocente. Folha de S. Paulo . 4 out. 2009 (adaptado). 
O distanciamento entre “reconhecer” e “cumprir” 
efetivamente o que é moral constitui uma ambiguidade 
inerente ao humano, porque as normas morais são`,
    alternatives: [
      { id: 'A', type: 'text', value: `decorrentes da vontade divina e, por esse motivo, utópicas.` },
      { id: 'B', type: 'text', value: `parâmetros idealizados, cujo cumprimento é destituído de obrigação.` },
      { id: 'C', type: 'text', value: `amplas e vão além da capacidade de o indivíduo conseguir cumpri-las integralmente.` },
      { id: 'D', type: 'text', value: `criadas pelo homem, que concede a si mesmo a lei à qual deve se submeter.` },
      { id: 'E', type: 'text', value: `cumpridas por aqueles que se dedicam inteiramente a observar as normas jurídicas.` },
    ],
    correct: 'D',
    explanation: `A pergunta parte da distância entre reconhecer e cumprir o que é moral e pede a natureza das normas morais. A resposta correta é a D: as normas morais são criadas pelo próprio homem, que concede a si mesmo a lei à qual deve se submeter, noção de autonomia moral (o sujeito é, ao mesmo tempo, autor e destinatário da norma). A está errada por atribuir as normas à vontade divina e chamá-las de utópicas; B e C negam seu caráter obrigatório ou as tornam inatingíveis; e E confunde normas morais com normas jurídicas, que têm fundamento e sanção distintos.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Movimento dos Caras-Pintadas 
Disponível em: http://www1.folha.uol.com.br. Acesso em: 17 abr. 2010 (adaptado). 
O movimento representado na imagem, do início dos 
anos de 1990, arrebatou milhares de jovens no Brasil. 
Nesse contexto, a juventude, movida por um forte 
sentimento cívico,`,
    images: ['/enem/2011/images/enem_2011_d1_q3.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `aliou-se aos partidos de oposição e organizou a campanha Diretas Já.` },
      { id: 'B', type: 'text', value: `manifestou-se contra a corrupção e pressionou pela aprovação da Lei da Ficha Limpa.` },
      { id: 'C', type: 'text', value: `engajou-se nos protestos relâmpago e utilizou a internet para agendar suas manifestações.` },
      { id: 'D', type: 'text', value: `espelhou-se no movimento estudantil de 1968 e protagonizou ações revolucionárias armadas.` },
      { id: 'E', type: 'text', value: `tornou-se porta-voz da sociedade e influenciou no processo de impeachment do então presidente Collor.` },
    ],
    correct: 'E',
    explanation: `A imagem retrata o movimento dos Caras-Pintadas, protagonizado por jovens no início dos anos 1990. Movida por forte sentimento cívico, essa juventude ocupou as ruas, tornou-se porta-voz da sociedade contra a corrupção e pressionou pelo impeachment do presidente Fernando Collor, em 1992, por isso a alternativa E está correta. A confunde o movimento com as Diretas Já (1984); B o associa à Lei da Ficha Limpa (2010); C descreve mobilizações atuais agendadas pela internet, inexistente na época; e D remete, equivocadamente, ao movimento estudantil de 1968 e à luta armada.`,
    subject: ['his'],
    topics: ['Nova República e redemocratização', 'Cidadania, movimentos sociais e trabalho na história', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A Floresta Amazônica, com toda a sua imensidão, não vai estar aí para sempre. Foi preciso alcançar toda essa
taxa de desmatamento de quase 20 mil quilômetros quadrados ao ano, na última década do século XX, para que uma
pequena parcela de brasileiros se desse conta de que o maior patrimônio natural do país está sendo torrado.
AB'SABER, A. Amazônia: do discurso à práxis. São Paulo: EdUSP, 1996.
Um processo econômico que tem contribuído na atualidade para acelerar o problema ambiental descrito é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Expansão do Projeto Grande Carajás, com incentivos à chegada de novas empresas mineradoras.` },
      { id: 'B', type: 'text', value: `Difusão do cultivo da soja com a implantação de monoculturas mecanizadas.` },
      { id: 'C', type: 'text', value: `Construção da rodovia Transamazônica, com o objetivo de interligar a região Norte ao restante do país.` },
      { id: 'D', type: 'text', value: `Criação de áreas extrativistas do látex das seringueiras para os chamados povos da floresta.` },
      { id: 'E', type: 'text', value: `Ampliação do polo industrial da Zona Franca de Manaus, visando atrair empresas nacionais e estrangeiras.` },
    ],
    correct: 'B',
    explanation: `O texto denuncia o elevado desmatamento da Amazônia. O processo econômico que, na atualidade, acelera esse problema é a difusão do cultivo da soja com monoculturas mecanizadas, que avança sobre a floresta e amplia a derrubada da vegetação, por isso a alternativa B está correta. A (Projeto Grande Carajás) e C (rodovia Transamazônica) referem-se a iniciativas mais antigas; D trata de áreas extrativistas, que são de conservação, e não de degradação; e E (Zona Franca de Manaus) é um polo industrial concentrado, que não explica o avanço recente do desmatamento.`,
    subject: ['geo'],
    topics: ['Questões ambientais', 'Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O Centro-Oeste apresentou-se como extremamente receptivo aos novos fenômenos da urbanização, já que era 
praticamente virgem, não possuindo infraestrutura de monta, nem outros investimentos fixos vindos do passado. 
Pôde, assim, receber uma infraestrutura nova, totalmente a serviço de uma economia moderna. 
O texto trata da ocupação de uma parcela do território brasileiro. O processo econômico diretamente associado a 
essa ocupação foi o avanço da`,
    alternatives: [
      { id: 'A', type: 'text', value: `industrialização voltada para o setor de base.` },
      { id: 'B', type: 'text', value: `economia da borracha no sul da Amazônia.` },
      { id: 'C', type: 'text', value: `fronteira agropecuária que degradou parte do cerrado.` },
      { id: 'D', type: 'text', value: `exploração mineral na Chapada dos Guimarães.` },
      { id: 'E', type: 'text', value: `extrativismo na região pantaneira.` },
    ],
    correct: 'C',
    explanation: `O trecho de Milton Santos descreve a ocupação recente do Centro-Oeste, região 'virgem' que recebeu infraestrutura nova a serviço de uma economia moderna. O processo econômico diretamente associado a essa ocupação foi o avanço da fronteira agropecuária, que degradou parte do Cerrado ao incorporá-lo à produção mecanizada de grãos, por isso a alternativa C está correta. A (industrialização de base) não corresponde à vocação agrícola da região; B (borracha) e E (extrativismo pantaneiro) referem-se a outras áreas e atividades; e D restringe a ocupação à mineração na Chapada dos Guimarães, o que não traduz o processo descrito.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `TEIXEIRA, W. et al. Decifrando a Terra. São Paulo: Nacional, 2009 (adaptado).
O gráfico relaciona diversas variáveis ao processo de formação de solos. A interpretação dos dados mostra que a 
água é um dos importantes fatores de pedogênese, pois nas áreas`,
    images: ['/enem/2011/images/enem_2011_d1_q6.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `de clima temperado ocorrem alta pluviosidade e grande profundidade de solos.` },
      { id: 'B', type: 'text', value: `tropicais ocorre menor pluviosidade, o que se relaciona com a menor profundidade das rochas inalteradas.` },
      { id: 'C', type: 'text', value: `de latitudes em torno de 30° ocorrem as maiores profundidades de solo, visto que há maior umidade.` },
      { id: 'D', type: 'text', value: `tropicais a profundidade do solo é menor, o que evidencia menor intemperismo químico da água sobre as rochas.` },
      { id: 'E', type: 'text', value: `de menor latitude ocorrem as maiores precipitações, assim como a maior profundidade dos solos.` },

    ],
    correct: 'E',
    explanation: `O gráfico relaciona precipitação, temperatura e profundidade do intemperismo na formação dos solos. A leitura mostra que, nas áreas de menor latitude (clima tropical e equatorial), ocorrem as maiores precipitações e também as maiores profundidades de solo, pois a abundância de água intensifica o intemperismo químico das rochas, por isso a alternativa E está correta. A erra ao atribuir grande profundidade ao clima temperado; B e D invertem a relação ao afirmar menor pluviosidade ou menor intemperismo nos trópicos; e C associa as maiores profundidades às latitudes próximas de 30°, onde predominam desertos e baixa umidade.`,
    subject: ['geo'],
    topics: ['Geologia, relevo e solos', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Uma empresa norte-americana de bioenergia está 
expandindo suas operações para o Brasil para explorar 
o mercado de pinhão manso. Com sede na Califórnia, 
a empresa desenvolveu sementes híbridas de pinhão 
manso, oleaginosa utilizada hoje na produção de 
biodiesel e de querosene de aviação. 
MAGOSSI, E. O Estado de São Paulo . 19 maio 2011 (adaptado). 
A partir do texto, a melhoria agronômica das sementes 
de pinhão manso abre para o Brasil a oportunidade 
econômica de`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliar as regiões produtoras pela adaptação do cultivo a diferentes condições climáticas.` },
      { id: 'B', type: 'text', value: `beneficiar os pequenos produtores camponeses de óleo pela venda direta ao varejo.` },
      { id: 'C', type: 'text', value: `abandonar a energia automotiva derivada do petróleo em favor de fontes alternativas.` },
      { id: 'D', type: 'text', value: `baratear cultivos alimentares substituídos pelas culturas energéticas de valor econômico superior.` },
      { id: 'E', type: 'text', value: `reduzir o impacto ambiental pela não emissão de gases do efeito estufa para a atmosfera.` },
    ],
    correct: 'A',
    explanation: `O texto informa que a empresa desenvolveu sementes híbridas de pinhão manso para biodiesel e querosene de aviação. A melhoria agronômica dessas sementes abre ao Brasil a oportunidade econômica de ampliar as regiões produtoras, já que variedades adaptadas a diferentes condições climáticas permitem cultivar a planta em novas áreas, por isso a alternativa A está correta. B foca a venda direta ao varejo, não tratada no texto; C é absoluta ao prever o abandono da energia derivada do petróleo; D sugere substituir culturas alimentares, o que não é a oportunidade apontada; e E atribui ao biodiesel a não emissão de gases de efeito estufa, o que não corresponde à questão econômica em foco.`,
    subject: ['geo'],
    topics: ['Energia', 'Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um dos principais objetivos de se dar continuidade às 
pesquisas em erosão dos solos é o de procurar resolver 
os problemas oriundos desse processo, que, em última 
análise, geram uma série de impactos ambientais. 
Além disso, para a adoção de técnicas de conservação 
dos solos, é preciso conhecer como a água executa 
seu trabalho de remoção, transporte e deposição de 
sedimentos. A erosão causa, quase sempre, uma série 
de problemas ambientais, em nível local ou até mesmo 
em grandes áreas. 
GUERRA, A. J. T. Processos erosivos nas encostas. In : GUERRA, A. J. T.; CUNHA, S. B. 
Geomorfologia : uma atualização de bases e conceitos. 
 Rio de Janeiro: Bertrand Brasil, 2007 (adaptado). 
A preservação do solo, principalmente em áreas de 
encostas, pode ser uma solução para evitar catástrofes 
em função da intensidade de fluxo hídrico. A prática 
humana que segue no caminho contrário a essa solução é`,
    alternatives: [
      { id: 'A', type: 'text', value: `a aração.` },
      { id: 'B', type: 'text', value: `o terraceamento.` },
      { id: 'C', type: 'text', value: `o pousio.` },
      { id: 'D', type: 'text', value: `a drenagem.` },
      { id: 'E', type: 'text', value: `o desmatamento.` },
    ],
    correct: 'E',
    explanation: `O texto defende a conservação do solo, sobretudo em encostas, para evitar catástrofes ligadas ao fluxo hídrico. A prática que vai no caminho contrário a essa solução é o desmatamento, pois a retirada da cobertura vegetal expõe o solo ao impacto da chuva e ao escoamento, acelerando a erosão, por isso a alternativa E está correta. Terraceamento (B), pousio (C) e drenagem (D) são técnicas conservacionistas que protegem o solo; a aração (A), embora possa favorecer a erosão quando malconduzida, não é a prática que o texto aponta como oposta à preservação, destacando-se o desmatamento como o principal fator de degradação.`,
    subject: ['geo'],
    topics: ['Geologia, relevo e solos', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O fenômeno de ilha de calor é o exemplo mais marcante da
modificação das condições iniciais do clima pelo processo de
urbanização, caracterizado pela modificação do solo e pelo
calor antropogênico, o qual inclui todas as atividades humanas
inerentes à sua vida na cidade. BARBOSA, R. V. R. Áreas verdes
e qualidade térmica em ambientes urbanos : estudo em
microclimas em Maceió. São Paulo: EdUSP, 2005. O texto
exemplifica uma importante alteração socioambiental, comum aos
centros urbanos. A maximização desse fenômeno ocorre`,
    alternatives: [
      { id: 'A', type: 'text', value: `pela reconstrução dos leitos originais dos cursos d’água antes canalizados.` },
      { id: 'B', type: 'text', value: `pela recomposição de áreas verdes nas áreas centrais dos centros urbanos.` },
      { id: 'C', type: 'text', value: `pelo uso de materiais com alta capacidade de reflexão no topo dos edifícios.` },
      { id: 'D', type: 'text', value: `pelo processo de impermeabilização do solo nas áreas centrais das cidades.` },
      { id: 'E', type: 'text', value: `pela construção de vias expressas e gerenciamento de tráfego terrestre.` },
    ],
    correct: 'D',
    explanation: `O texto descreve a ilha de calor, fenômeno de aquecimento maior nas áreas urbanizadas devido às alterações do solo e ao calor antropogênico. Sua intensificação ocorre pela impermeabilização do solo nas áreas centrais, pois o asfalto e o concreto reduzem a evaporação e a infiltração, retêm calor e elevam a temperatura local, por isso a alternativa D está correta. A (recuperar leitos de rios), B (recompor áreas verdes) e C (materiais com alta reflexão) são medidas que atenuariam o fenômeno, não o maximizariam; e E (vias expressas e gestão de tráfego) não é o fator central de ampliação da ilha de calor.`,
    subject: ['geo'],
    topics: ['Espaço urbano e urbanização', 'Clima e fenômenos atmosféricos', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O professor Paulo Saldiva pedala 6 km em 22 
minutos de casa para o trabalho, todos os dias. Nunca 
foi atingido por um carro. Mesmo assim, é vítima 
diária do trânsito de São Paulo: a cada minuto sobre 
a bicicleta, seus pulmões são envenenados com 
3,3 microgramas de poluição particulada - poeira, 
fumaça, fuligem, partículas de metal em suspensão, 
sulfatos, nitratos, carbono, compostos orgânicos e 
outras substâncias nocivas. 
ESCOBAR, H. Sem Ar. O Estado de São Paulo . Ago. 2008. 
A população de uma metrópole brasileira que vive nas 
mesmas condições socioambientais das do professor 
citado no texto apresentará uma tendência de`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação da taxa de fecundidade.` },
      { id: 'B', type: 'text', value: `diminuição da expectativa de vida.` },
      { id: 'C', type: 'text', value: `elevação do crescimento vegetativo.` },
      { id: 'D', type: 'text', value: `aumento na participação relativa de idosos.` },
      { id: 'E', type: 'text', value: `redução na proporção de jovens na sociedade.` },
    ],
    correct: 'B',
    explanation: `O texto mostra o professor exposto diariamente à poluição particulada do trânsito de São Paulo. Uma população que vive nas mesmas condições socioambientais tende a apresentar diminuição da expectativa de vida, pois a inalação crônica de poluentes agrava doenças respiratórias e cardiovasculares e eleva a mortalidade, por isso a alternativa B está correta. A (aumento da fecundidade), C (elevação do crescimento vegetativo) e E (redução da proporção de jovens) não decorrem diretamente da exposição à poluição; e D (aumento da participação de idosos) seria compatível com maior longevidade, o contrário do efeito esperado.`,
    subject: ['geo'],
    topics: ['Questões ambientais', 'População, demografia e migrações', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Disponível em: http://www.ra-bugio.org.br. Acesso em: 28 jul. 2010. 
A imagem retrata a araucária, árvore que faz parte de 
um importante bioma brasileiro que, no entanto, já foi 
bastante degradado pela ocupação humana. Uma 
das formas de intervenção humana relacionada à 
degradação desse bioma foi`,
    images: ['/enem/2011/images/enem_2011_d1_q11.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o avanço do extrativismo de minerais metálicos voltados para a exportação na região Sudeste.` },
      { id: 'B', type: 'text', value: `a contínua ocupação agrícola intensiva de grãos na região Centro-Oeste do Brasil.` },
      { id: 'C', type: 'text', value: `o processo de desmatamento motivado pela expansão da atividade canavieira no Nordeste brasileiro.` },
      { id: 'D', type: 'text', value: `o avanço da indústria de papel e celulose a partir da exploração da madeira, extraída principalmente no Sul do Brasil.` },
      { id: 'E', type: 'text', value: `o adensamento do processo de favelização sobre áreas da Serra do Mar na região Sudeste.` },
    ],
    correct: 'D',
    explanation: `A imagem mostra a araucária, árvore típica da Mata de Araucárias (Floresta Ombrófila Mista), bioma do Sul do Brasil muito degradado pela ocupação humana. Uma das formas dessa degradação foi o avanço da indústria de papel e celulose a partir da exploração da madeira extraída principalmente no Sul, que derrubou extensas áreas do pinheiro-do-paraná, por isso a alternativa D está correta. A (mineração no Sudeste), B (grãos no Centro-Oeste), C (cana no Nordeste) e E (favelização na Serra do Mar) referem-se a outras regiões e atividades, sem relação com a degradação específica desse bioma meridional.`,
    subject: ['geo'],
    topics: ['Biomas e domínios morfoclimáticos', 'Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `SOBRADINHO 
O homem chega, já desfaz a natureza 
Tira gente, põe represa, diz que tudo vai mudar 
O São Francisco lá pra cima da Bahia 
Diz que dia menos dia vai subir bem devagar 
E passo a passo vai cumprindo a profecia do beato que 
dizia que o Sertão ia alagar. 
SÁ e Guarabyra. Disco Pirão de peixe com pimenta . Som Livre, 1977 (adaptado). 
O trecho da música faz referência a uma importante 
obra na região do rio São Francisco. Uma consequência 
socioespacial dessa construção foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `a migração forçada da população ribeirinha.` },
      { id: 'B', type: 'text', value: `o rebaixamento do nível do lençol freático local.` },
      { id: 'C', type: 'text', value: `a preservação da memória histórica da região.` },
      { id: 'D', type: 'text', value: `a ampliação das áreas de clima árido.` },
      { id: 'E', type: 'text', value: `a redução das áreas de agricultura irrigada.` },
    ],
    correct: 'A',
    explanation: `O trecho da canção 'Sobradinho' faz referência à construção da barragem de Sobradinho, no rio São Francisco, cujo reservatório alagou cidades e áreas ribeirinhas ('dizia que o Sertão ia alagar'). Uma consequência socioespacial direta foi a migração forçada da população ribeirinha, desalojada pela formação do lago, por isso a alternativa A está correta. B, C, D e E contrariam os efeitos de uma grande represa: o lençol freático tende a se elevar, a memória histórica local foi submersa, a presença da água não amplia o clima árido e a barragem viabiliza, em vez de reduzir, a agricultura irrigada.`,
    subject: ['geo'],
    topics: ['População, demografia e migrações', 'Hidrografia e recursos hídricos', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Como os combustíveis energéticos, as tecnologias 
da informação são, hoje em dia, indispensáveis em 
todos os setores econômicos. Através delas, um 
maior número de produtores é capaz de inovar e a 
obsolescência de bens e serviços se acelera. Longe 
de estender a vida útil dos equipamentos e a sua 
capacidade de reparação, o ciclo de vida desses 
produtos diminui, resultando em maior necessidade de 
matéria-prima para a fabricação de novos. 
GROSSARD, C. Le Monde Diplomatique Brasil . Ano 3, nº 36, 2010 (adaptado). 
A postura consumista de nossa sociedade indica 
a crescente produção de lixo, principalmente nas 
áreas urbanas, o que, associado a modos incorretos 
de deposição,`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `provoca a contaminação do solo e do lençol freático, ocasionando assim graves problemas socioambientais, que se adensarão com a continuidade da cultura do consumo desenfreado.` },
      { id: 'B', type: 'text', value: `produz efeitos perversos nos ecossistemas, que são sanados por cadeias de organismos decompositores que assumem o papel de eliminadores dos resíduos depositados em lixões.` },
      { id: 'C', type: 'text', value: `multiplica o número de lixões a céu aberto, considerados atualmente a ferramenta capaz de resolver de forma simplificada e barata o problema de deposição de resíduos nas grandes cidades.` },
      { id: 'D', type: 'text', value: `estimula o empreendedorismo social, visto que um grande número de pessoas, os catadores, têm livre acesso aos lixões, sendo assim incluídos na cadeia produtiva dos resíduos tecnológicos.` },
      { id: 'E', type: 'text', value: `possibilita a ampliação da quantidade de rejeitos que podem ser destinados a associações e cooperativas de catadores de materiais recicláveis, financiados por instituições da sociedade civil ou pelo poder público.` },
    ],
    correct: 'A',
    explanation: `O texto associa a postura consumista à crescente produção de lixo urbano. Quando esses resíduos são depositados de modo incorreto, provocam a contaminação do solo e do lençol freático, gerando graves problemas socioambientais que se agravam com a continuidade do consumo desenfreado, por isso a alternativa A está correta. B é falsa ao sugerir que os ecossistemas sanam sozinhos os danos; C defende os lixões como solução barata, o que é incorreto; D idealiza o trabalho dos catadores nos lixões como empreendedorismo; e E desloca o foco para a destinação a cooperativas, sem tratar do efeito da deposição inadequada.`,
    subject: ['geo'],
    topics: ['Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O espaço mundial sob a “nova des-ordem” é um emaranhado de zonas, redes e “aglomerados”, espaços hegemônicos e contra-hegemônicos que se cruzam de forma complexa na face da Terra. Fica clara, de saída, a polêmica que envolve uma nova regionalização mundial. Como regionalizar um espaço tão heterogêneo e, em parte, fluido, como é o espaço mundial contemporâneo? HAESBAERT, R.; PORTO-GONÇALVES, C.W. A nova des-ordem mundial . São Paulo: UNESP, 2006. O mapa procura representar a lógica espacial do mundo contemporâneo pós-União Soviética, no contexto de avanço da globalização e do neoliberalismo, quando a divisão entre países socialistas e capitalistas se desfez e as categorias de “primeiro” e “terceiro” mundo perderam sua validade explicativa. Considerando esse objetivo interpretativo, tal distribuição espacial aponta para`,
    images: ['/enem/2011/images/enem_2011_d1_q14.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a estagnação dos Estados com forte identidade cultural.` },
      { id: 'B', type: 'text', value: `o alcance da racionalidade anticapitalista.` },
      { id: 'C', type: 'text', value: `a influência das grandes potências econômicas.` },
      { id: 'D', type: 'text', value: `a dissolução de blocos políticos regionais.` },
      { id: 'E', type: 'text', value: `o alargamento da força econômica dos países islâmicos.` },
    ],
    correct: 'C',
    explanation: `O mapa representa a 'nova des-ordem geográfica mundial', uma proposta de regionalização do espaço pós-União Soviética marcada por redes, economias-mundo, potências mundiais e oligopólios. Essa distribuição espacial aponta para a influência das grandes potências econômicas, que organizam e hierarquizam o espaço globalizado, por isso a alternativa C está correta. A (estagnação dos Estados com forte identidade cultural), B (racionalidade anticapitalista) e D (dissolução de blocos regionais) contrariam a lógica do mapa; e E restringe indevidamente o protagonismo aos países islâmicos, quando o eixo é o poder econômico das grandes potências.`,
    subject: ['geo'],
    topics: ['Globalização e economia mundial', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em 1872, Robert Angus Smith criou o termo 
“chuva ácida”, descrevendo precipitações ácidas em 
Manchester após a Revolução Industrial. Trata-se do 
acúmulo demasiado de dióxido de carbono e enxofre 
na atmosfera que, ao reagirem com compostos dessa 
camada, formam gotículas de chuva ácida e partículas 
de aerossóis. A chuva ácida não necessariamente 
ocorre no local poluidor, pois tais poluentes, ao serem 
lançados na atmosfera, são levados pelos ventos, 
podendo provocar a reação em regiões distantes. A 
água de forma pura apresenta pH 7, e, ao contatar 
agentes poluidores, reage modificando seu pH para 5,6 
e até menos que isso, o que provoca reações, deixando 
consequências. 
Disponível em: http://www.brasilescola.com. Acesso em: 18 maio 2010 (adaptado). 
O texto aponta para um fenômeno atmosférico causador 
de graves problemas ao meio ambiente: a chuva ácida 
(pluviosidade com pH baixo). Esse fenômeno tem como 
consequência`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a corrosão de metais, pinturas, monumentos históricos, destruição da cobertura vegetal e acidificação dos lagos.` },
      { id: 'B', type: 'text', value: `a diminuição do aquecimento global, já que esse tipo de chuva retira poluentes da atmosfera.` },
      { id: 'C', type: 'text', value: `a destruição da fauna e da flora, e redução dos recursos hídricos, com o assoreamento dos rios.` },
      { id: 'D', type: 'text', value: `as enchentes, que atrapalham a vida do cidadão urbano, corroendo, em curto prazo, automóveis e fios de cobre da rede elétrica.` },
      { id: 'E', type: 'text', value: `a degradação da terra nas regiões semiáridas, localizadas, em sua maioria, no Nordeste do nosso país.` },
    ],
    correct: 'A',
    explanation: `O texto define a chuva ácida, formada quando poluentes como dióxido de carbono e enxofre reagem na atmosfera e baixam o pH da precipitação. Suas consequências são a corrosão de metais, pinturas e monumentos históricos, a destruição da cobertura vegetal e a acidificação de lagos, por isso a alternativa A está correta. B é falsa, pois a chuva ácida não reduz o aquecimento global; C associa-a ao assoreamento, que tem outra causa; D fala em enchentes corroendo automóveis em curto prazo, confundindo os efeitos; e E remete à degradação de áreas semiáridas, fenômeno de desertificação, não de chuva ácida.`,
    subject: ['geo'],
    topics: ['Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Estamos testemunhando o reverso da tendência histórica da
assalariação do trabalho e socialização da produção, que foi
característica predominante na era industrial. A nova
organização social e econômica baseada nas tecnologias da
informação visa à administração descentralizadora, ao trabalho
individualizante e aos mercados personalizados. As novas
tecnologias da informação possibilitam, ao mesmo tempo, a
descentralização das tarefas e sua coordenação em uma rede
interativa de comunicação em tempo real, seja entre
continentes, seja entre os andares de um mesmo edifício.
CASTELLS, M. A sociedade em rede . São Paulo: Paz e Terra,
2006 (adaptado). No contexto descrito, as sociedades vivenciam
mudanças constantes nas ferramentas de comunicação que afetam
os processos produtivos nas empresas. Na esfera do trabalho,
tais mudanças têm provocado`,
    alternatives: [
      { id: 'A', type: 'text', value: `o aprofundamento dos vínculos dos operários com as linhas de montagem sob influência dos modelos orientais de gestão.` },
      { id: 'B', type: 'text', value: `o aumento das formas de teletrabalho como solução de larga escala para o problema do desemprego crônico.` },
      { id: 'C', type: 'text', value: `o avanço do trabalho flexível e da terceirização como respostas às demandas por inovação e com vistas à mobilidade dos investimentos.` },
      { id: 'D', type: 'text', value: `a autonomização crescente das máquinas e computadores em substituição ao trabalho dos especialistas técnicos e gestores.` },
      { id: 'E', type: 'text', value: `o fortalecimento do diálogo entre operários, gerentes, executivos e clientes com a garantia de harmonização das relações de trabalho.` },
    ],
    correct: 'C',
    explanation: `O texto de Castells descreve a sociedade em rede, em que as tecnologias da informação promovem administração descentralizada, trabalho individualizado e mercados personalizados. Na esfera do trabalho, essas mudanças provocam o avanço do trabalho flexível e da terceirização, respostas à demanda por inovação e à mobilidade dos investimentos, por isso a alternativa C está correta. A contraria o texto ao falar em aprofundamento dos vínculos nas linhas de montagem; B exagera ao ver o teletrabalho como solução para o desemprego crônico; D extrapola ao prever a substituição de técnicos e gestores por máquinas; e E idealiza uma harmonização das relações de trabalho que o texto não sustenta.`,
    subject: ['soc'],
    topics: ['Trabalho e sociedade', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Completamente analfabeto, ou quase, sem assistência médica,
não lendo jornais, nem revistas, nas quais se limita a ver as
figuras, o trabalhador rural, a não ser em casos esporádicos,
tem o patrão na conta de benfeitor. No plano político, ele
luta com o “coronel” e pelo “coronel”. Aí estão os votos de
cabresto, que resultam, em grande parte, da nossa organização
econômica rural. LEAL, V. N. Coronelismo, enxada e voto . São
Paulo: Alfa-Ômega, 1978 (adaptado). O coronelismo, fenômeno
político da Primeira República (1889-1930), tinha como uma de
suas principais características o controle do voto, o que
limitava, portanto, o exercício da cidadania. Nesse período,
esta prática estava vinculada a uma estrutura social`,
    alternatives: [
      { id: 'A', type: 'text', value: `igualitária, com um nível satisfatório de distribuição da renda.` },
      { id: 'B', type: 'text', value: `estagnada, com uma relativa harmonia entre as classes.` },
      { id: 'C', type: 'text', value: `tradicional, com a manutenção da escravidão nos engenhos como forma produtiva típica.` },
      { id: 'D', type: 'text', value: `ditatorial, perturbada por um constante clima de opressão mantido pelo exército e polícia.` },
      { id: 'E', type: 'text', value: `agrária, marcada pela concentração da terra e do poder político local e regional.` },
    ],
    correct: 'E',
    explanation: `O texto de Victor Nunes Leal trata do coronelismo, fenômeno da Primeira República (1889-1930) marcado pelo controle do voto (voto de cabresto) exercido pelo 'coronel' sobre o trabalhador rural dependente. Essa prática estava vinculada a uma estrutura social agrária, marcada pela concentração da terra e do poder político local e regional, por isso a alternativa E está correta. A (sociedade igualitária) e B (harmonia entre as classes) contrariam a desigualdade descrita; C associa o período à escravidão nos engenhos, já abolida; e D atribui o controle à opressão do exército e da polícia, quando o poder era dos grandes proprietários rurais.`,
    subject: ['his'],
    topics: ['República Velha', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Na década de 1990, os movimentos sociais 
camponeses e as ONGs tiveram destaque, ao lado de 
outros sujeitos coletivos. Na sociedade brasileira, a ação 
dos movimentos sociais vem construindo lentamente 
um conjunto de práticas democráticas no interior das 
escolas, das comunidades, dos grupos organizados e 
na interface da sociedade civil com o Estado. O diálogo, 
o confronto e o conflito têm sido os motores no processo 
de construção democrática. 
SOUZA, M. A. Movimentos sociais no Brasil contemporâneo : participação e possibilidades das 
práticas democráticas. Disponível em: http://www.ces.uc.pt. Acesso em: 30 abr. 2010 (adaptado). 
Segundo o texto, os movimentos sociais contribuem 
para o processo de construção democrática, porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `determinam o papel do Estado nas transformações socioeconômicas.` },
      { id: 'B', type: 'text', value: `aumentam o clima de tensão social na sociedade civil.` },
      { id: 'C', type: 'text', value: `pressionam o Estado para o atendimento das demandas da sociedade.` },
      { id: 'D', type: 'text', value: `privilegiam determinadas parcelas da sociedade em detrimento das demais.` },
      { id: 'E', type: 'text', value: `propiciam a adoção de valores éticos pelos órgãos do Estado.` },
    ],
    correct: 'C',
    explanation: `O texto afirma que, desde os anos 1990, os movimentos sociais vêm construindo práticas democráticas na relação entre a sociedade civil e o Estado, por meio do diálogo, do confronto e do conflito. Eles contribuem para a construção democrática porque pressionam o Estado a atender às demandas da sociedade, ampliando a participação popular, por isso a alternativa C está correta. A exagera ao dizer que determinam o papel do Estado; B restringe sua atuação ao aumento da tensão social; D os acusa de privilegiar parcelas em detrimento de outras; e E reduz seu papel à adoção de valores éticos pelos órgãos estatais, sem captar a pressão por demandas.`,
    subject: ['soc'],
    topics: ['Movimentos sociais', 'Estado, poder, cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Art. 92. São excluídos de votar nas Assembleias 
Paroquiais: 
I. Os menores de vinte e cinco anos, nos quais 
não se compreendam os casados, e Oficiais Militares, 
que forem maiores de vinte e um anos, os Bacharéis 
Formados e Clérigos de Ordens Sacras. 
IV. Os Religiosos, e quaisquer que vivam em 
Comunidade claustral. 
V. Os que não tiverem de renda líquida anual cem mil 
réis por bens de raiz, indústria, comércio ou empregos. 
Constituição Política do Império do Brasil (1824) . 
Disponível em: https://legislação.planalto.gov.br. Acesso em: 27 abr. 2010 (adaptado). 
A legislação espelha os conflitos políticos e sociais do 
contexto histórico de sua formulação. A Constituição 
de 1824 regulamentou o direito de voto dos “cidadãos 
brasileiros” com o objetivo de garantir`,
    alternatives: [
      { id: 'A', type: 'text', value: `o fim da inspiração liberal sobre a estrutura política brasileira.` },
      { id: 'B', type: 'text', value: `a ampliação do direito de voto para maioria dos brasileiros nascidos livres.` },
      { id: 'C', type: 'text', value: `a concentração de poderes na região produtora de café, o Sudeste brasileiro.` },
      { id: 'D', type: 'text', value: `o controle do poder político nas mãos dos grandes proprietários e comerciantes.` },
      { id: 'E', type: 'text', value: `a diminuição da interferência da Igreja Católica nas decisões político-administrativas.` },
    ],
    correct: 'D',
    explanation: `O Art. 92 da Constituição de 1824 excluía do voto os que não tivessem renda mínima e outras parcelas da população, instituindo o voto censitário. Ao regulamentar o direito de voto dos 'cidadãos brasileiros', a Carta buscava garantir o controle do poder político nas mãos dos grandes proprietários e comerciantes, únicos capazes de atender às exigências de renda, por isso a alternativa D está correta. A é falsa, pois a Constituição tinha inspiração liberal moderada; B contraria o caráter restritivo do voto; C projeta anacronicamente a concentração no Sudeste cafeeiro; e E atribui à Carta a redução da influência da Igreja, o que não era seu objetivo.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Embora o Brasil seja signatário de convenções 
e tratados internacionais contra a tortura e tenha 
incorporado em seu ordenamento jurídico uma lei 
tipificando o crime, ele continua a ocorrer em larga 
escala. Mesmo que a lei que tipifica a tortura esteja 
vigente desde 1997, até o ano 2000 não se conhece 
nenhum caso de condenação de torturadores julgado 
em última instância, embora tenham sido registrados 
nesse período centenas de casos, além de numerosos 
outros presumíveis, mas não registrados. 
Disponível em: http://www.dhnet.org.br. Acesso em: 16 jun. 2010 (adaptado). 
O texto destaca a questão da tortura no país, apontando que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a justiça brasileira, por meio de tratados e leis, tem conseguido inibir e, inclusive, extinguir a prática da tortura.` },
      { id: 'B', type: 'text', value: `a existência da lei não basta como garantia de justiça para as vítimas e testemunhas dos casos de tortura.` },
      { id: 'C', type: 'text', value: `as denúncias anônimas dificultam a ação da justiça, impedindo que torturadores sejam reconhecidos e identificados pelo crime cometido.` },
      { id: 'D', type: 'text', value: `a falta de registro da tortura por parte das autoridades policiais, em razão do desconhecimento da tortura como crime, legitima a impunidade.` },
      { id: 'E', type: 'text', value: `a justiça tem esbarrado na precária existência de jurisprudência a respeito da tortura, o que a impede de atuar nesses casos.` },
    ],
    correct: 'B',
    explanation: `O texto observa que, mesmo com a lei que tipifica a tortura em vigor desde 1997 e com tratados internacionais assinados, não há condenações definitivas e os casos seguem ocorrendo em larga escala. Isso mostra que a existência da lei não basta como garantia de justiça para as vítimas e testemunhas, por isso a alternativa B está correta. A afirma, erroneamente, que a Justiça inibiu e extinguiu a prática; C desloca o problema para as denúncias anônimas; D alega desconhecimento da tortura como crime, embora ela esteja tipificada; e E culpa a falta de jurisprudência, quando o texto aponta a lacuna entre a lei e sua efetivação.`,
    subject: ['soc'],
    topics: ['Violência, direitos humanos e controle social', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Texto I 
A ação democrática consiste em todos tomarem 
parte do processo decisório sobre aquilo que terá 
consequência na vida de toda coletividade. 
GALLO, S. et al . Ética e Cidadania . Caminhos da Filosofia. 
Campinas: Papirus, 1997 (adaptado). 
Texto II 
É necessário que haja liberdade de expressão, 
fiscalização sobre órgãos governamentais e acesso por 
parte da população às informações trazidas a público 
pela imprensa. 
Disponível em: http://www.observatoriodaimprensa.com.br. Acesso em: 24 abr. 2010. 
Partindo da perspectiva de democracia apresentada 
no Texto I, os meios de comunicação, de acordo com o 
Texto II, assumem um papel relevante na sociedade por`,
    alternatives: [
      { id: 'A', type: 'text', value: `orientarem os cidadãos na compra dos bens necessários à sua sobrevivência e bem-estar.` },
      { id: 'B', type: 'text', value: `fornecerem informações que fomentam o debate político na esfera pública.` },
      { id: 'C', type: 'text', value: `apresentarem aos cidadãos a versão oficial dos fatos.` },
      { id: 'D', type: 'text', value: `propiciarem o entretenimento, aspecto relevante para conscientização política.` },
      { id: 'E', type: 'text', value: `promoverem a unidade cultural, por meio das transmissões esportivas.` },
    ],
    correct: 'B',
    explanation: `O Texto I define a ação democrática como a participação de todos nas decisões coletivas, e o Texto II valoriza a liberdade de expressão e o acesso da população às informações pela imprensa. Articulando os dois, os meios de comunicação assumem papel relevante por fornecerem informações que fomentam o debate político na esfera pública, condição da participação democrática, por isso a alternativa B está correta. A reduz os meios à orientação do consumo; C os associa à versão oficial dos fatos, contrária à liberdade de imprensa; D limita seu papel ao entretenimento; e E os vincula à unidade cultural por transmissões esportivas, alheia ao debate político.`,
    subject: ['soc'],
    topics: ['Estado, poder, cidadania e democracia', 'Meios de comunicação, tecnologia e sociedade', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Até que ponto, a partir de posturas e interesses 
diversos, as oligarquias paulista e mineira dominaram 
a cena política nacional na Primeira República? A união 
de ambas foi um traço fundamental, mas que não 
conta toda a história do período. A união foi feita com a 
preponderância de uma ou de outra das duas frações. 
Com o tempo, surgiram as discussões e um grande 
desacerto final. 
FAUSTO, B. História do Brasil . São Paulo: EdUSP, 2004 (adaptado). 
A imagem de um bem-sucedido acordo café com 
leite entre São Paulo e Minas, um acordo de alternância 
de presidência entre os dois estados, não passa de 
uma idealização de um processo muito mais caótico 
e cheio de conflitos. Profundas divergências políticas 
colocavam-nos em confronto por causa de diferentes 
graus de envolvimento no comércio exterior. 
TOPIK, S. A presença do estado na economia política do Brasil de 1889 a 1930 . 
Rio de Janeiro: Record, 1989 (adaptado). 
Para a caracterização do processo político durante 
a Primeira República, utiliza-se com frequência a 
expressão Política do Café com Leite . No entanto, os 
textos apresentam a seguinte ressalva a sua utilização:`,
    alternatives: [
      { id: 'A', type: 'text', value: `A riqueza gerada pelo café dava à oligarquia paulista a prerrogativa de indicar os candidatos à presidência, sem necessidade de alianças.` },
      { id: 'B', type: 'text', value: `As divisões políticas internas de cada estado da federação invalidavam o uso do conceito de aliança entre estados para este período.` },
      { id: 'C', type: 'text', value: `As disputas políticas do período contradiziam a suposta estabilidade da aliança entre mineiros e paulistas.` },
      { id: 'D', type: 'text', value: `A centralização do poder no executivo federal impedia a formação de uma aliança duradoura entre as oligarquias.` },
      { id: 'E', type: 'text', value: `A diversificação da produção e a preocupação com o mercado interno unificavam os interesses das oligarquias.` },
    ],
    correct: 'C',
    explanation: `Os textos questionam a imagem idealizada da 'Política do Café com Leite', mostrando que a união entre as oligarquias paulista e mineira não foi uma aliança estável e harmônica, mas um arranjo cheio de conflitos e divergências que culminaram em grande desacerto. Assim, a ressalva ao uso da expressão é que as disputas políticas do período contradiziam a suposta estabilidade da aliança entre mineiros e paulistas, por isso a alternativa C está correta. A, B, D e E apresentam explicações que os textos não sustentam (prerrogativa paulista sem alianças, invalidação do conceito de aliança, centralização no Executivo federal e unificação de interesses pela diversificação da produção).`,
    subject: ['his'],
    topics: ['República Velha', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O acidente nuclear de Chernobyl revela brutalmente 
os limites dos poderes técnico-científicos da humanidade 
e as “marchas-à-ré” que a “natureza” nos pode reservar. 
É evidente que uma gestão mais coletiva se impõe 
para orientar as ciências e as técnicas em direção a 
finalidades mais humanas. 
GUATTARI, F. As três ecologias . São Paulo: Papirus, 1995 (adaptado). 
O texto trata do aparato técnico-científico e suas 
consequências para a humanidade, propondo que esse 
desenvolvimento`,
    alternatives: [
      { id: 'A', type: 'text', value: `defina seus projetos a partir dos interesses coletivos.` },
      { id: 'B', type: 'text', value: `guie-se por interesses econômicos, prescritos pela lógica do mercado.` },
      { id: 'C', type: 'text', value: `priorize a evolução da tecnologia, se apropriando da natureza.` },
      { id: 'D', type: 'text', value: `promova a separação entre natureza e sociedade tecnológica.` },
      { id: 'E', type: 'text', value: `tenha gestão própria, com o objetivo de melhor apropriação da natureza.` },
    ],
    correct: 'A',
    explanation: `O texto de Guattari, ao refletir sobre o acidente de Chernobyl, mostra os limites do poder técnico-científico e defende uma gestão mais coletiva para orientar a ciência a finalidades humanas. A proposta é que o desenvolvimento técnico-científico defina seus projetos a partir dos interesses coletivos, e não de fins restritos, por isso a alternativa A está correta. B o subordina ao mercado, e C à apropriação da natureza, posições opostas ao texto; D defende a separação entre natureza e sociedade, contrária à ecologia integrada de Guattari; e E fala em gestão própria voltada à apropriação da natureza, perdendo o sentido coletivo e humano enfatizado pelo autor.`,
    subject: ['fil'],
    topics: ['Filosofia contemporânea', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A introdução de novas tecnologias desencadeou uma 
série de efeitos sociais que afetaram os trabalhadores 
e sua organização. O uso de novas tecnologias trouxe 
a diminuição do trabalho necessário que se traduz na 
economia líquida do tempo de trabalho, uma vez que, 
com a presença da automação microeletrônica, começou 
a ocorrer a diminuição dos coletivos operários e uma 
mudança na organização dos processos de trabalho. 
Revista Eletrônica de Geografia Y Ciências Sociales . 
Universidad de Barcelona. Nº 170(9), 1 ago. 2004. 
A utilização de novas tecnologias tem causado inúmeras 
alterações no mundo do trabalho. Essas mudanças são 
observadas em um modelo de produção caracterizado`,
    alternatives: [
      { id: 'A', type: 'text', value: `pelo uso intensivo do trabalho manual para desenvolver produtos autênticos e personalizados.` },
      { id: 'B', type: 'text', value: `pelo ingresso tardio das mulheres no mercado de trabalho no setor industrial.` },
      { id: 'C', type: 'text', value: `pela participação ativa das empresas e dos próprios trabalhadores no processo de qualificação laboral.` },
      { id: 'D', type: 'text', value: `pelo aumento na oferta de vagas para trabalhadores especializados em funções repetitivas.` },
      { id: 'E', type: 'text', value: `pela manutenção de estoques de larga escala em função da alta produtividade.` },
    ],
    correct: 'C',
    explanation: `O texto descreve as transformações no mundo do trabalho decorrentes das novas tecnologias e da automação microeletrônica, que reduzem os coletivos operários e reorganizam a produção. O modelo que caracteriza essas mudanças apoia-se na participação ativa das empresas e dos próprios trabalhadores no processo de qualificação laboral, exigida pela flexibilidade produtiva, por isso a alternativa C está correta. A (trabalho manual e produtos personalizados), D (vagas em funções repetitivas) e E (estoques de larga escala) remetem a padrões artesanais ou fordistas, superados pelo novo modelo; e B foca o ingresso tardio das mulheres, aspecto alheio à questão.`,
    subject: ['soc'],
    topics: ['Trabalho e sociedade', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `GOMES, A. et al . A República no Brasil . Rio de Janeiro: Nova Fronteira, 2002. 
A análise da tabela permite identificar um intervalo de 
tempo no qual uma alteração na proporção de eleitores 
inscritos resultou de uma luta histórica de setores da 
sociedade brasileira. O intervalo de tempo e a conquista 
estão associados, respectivamente, em`,
    images: ['/enem/2011/images/enem_2011_d1_q25.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1940-1950 - direito de voto para os ex-escravos.` },
      { id: 'B', type: 'text', value: `1950-1960 - fim do voto secreto.` },
      { id: 'C', type: 'text', value: `1960-1970 - direito de voto para as mulheres.` },
      { id: 'D', type: 'text', value: `1970-1980 - fim do voto obrigatório.` },
      { id: 'E', type: 'text', value: `1980-1996 - direito de voto para os analfabetos.` },
    ],
    correct: 'E',
    explanation: `O gráfico mostra a proporção de eleitores inscritos em relação à população entre 1940 e 2000, com salto expressivo entre 1980 e 1996. Esse crescimento está associado à conquista do direito de voto pelos analfabetos, assegurado pela Emenda Constitucional de 1985 e pela Constituição de 1988, que incorporou ampla parcela da população ao eleitorado, por isso a alternativa E está correta. A (voto dos ex-escravos), B (fim do voto secreto) e D (fim do voto obrigatório) não correspondem a conquistas desses intervalos; e C erra ao situar o voto feminino entre 1960-1970, pois as mulheres já votavam desde 1932.`,
    subject: ['his'],
    topics: ['Cidadania, movimentos sociais e trabalho na história', 'Nova República e redemocratização', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `É difícil encontrar um texto sobre a Proclamação 
da República no Brasil que não cite a afirmação de 
Aristides Lobo, no Diário Popular de São Paulo, de que 
“o povo assistiu àquilo bestializado”. Essa versão foi 
relida pelos enaltecedores da Revolução de 1930, que 
não descuidaram da forma republicana, mas realçaram 
a exclusão social, o militarismo e o estrangeirismo 
da fórmula implantada em 1889. Isto porque o Brasil 
brasileiro teria nascido em 1930. 
MELLO, M. T. C. A república consentida : cultura democrática e científica no final do Império. 
Rio de Janeiro: FGV, 2007 (adaptado). 
O texto defende que a consolidação de uma determinada 
memória sobre a Proclamação da República no Brasil 
teve, na Revolução de 1930, um de seus momentos 
mais importantes. Os defensores da Revolução de 
1930 procuraram construir uma visão negativa para os 
eventos de 1889, porque esta era uma maneira de`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorizar as propostas políticas democráticas e liberais vitoriosas.` },
      { id: 'B', type: 'text', value: `resgatar simbolicamente as figuras políticas ligadas à Monarquia.` },
      { id: 'C', type: 'text', value: `criticar a política educacional adotada durante a República Velha.` },
      { id: 'D', type: 'text', value: `legitimar a ordem política inaugurada com a chegada desse grupo ao poder.` },
      { id: 'E', type: 'text', value: `destacar a ampla participação popular obtida no processo da Proclamação.` },
    ],
    correct: 'D',
    explanation: `O texto mostra que os enaltecedores da Revolução de 1930 releram a Proclamação da República de 1889 de forma negativa, realçando sua exclusão social e seu militarismo, como se o 'Brasil moderno' só tivesse nascido em 1930. Construir essa visão negativa do passado era uma forma de legitimar a ordem política inaugurada com a chegada desse grupo ao poder, por isso a alternativa D está correta. A supõe propostas democráticas vitoriosas em 1889; B remete a figuras ligadas à Monarquia; C restringe a crítica à política educacional da República Velha; e E afirma ampla participação popular na Proclamação, justamente o que o texto nega ('o povo assistiu bestializado').`,
    subject: ['his'],
    topics: ['Era Vargas', 'República Velha', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um volume imenso de pesquisas tem sido produzido 
para tentar avaliar os efeitos dos programas de televisão. 
A maioria desses estudos diz respeito às crianças ― 
o que é bastante compreensível pela quantidade de 
tempo que elas passam em frente ao aparelho e pelas 
possíveis implicações desse comportamento para a 
socialização. Dois dos tópicos mais pesquisados são o 
impacto da televisão no âmbito do crime e da violência e 
a natureza das notícias exibidas na televisão. 
GIDDENS, A. Sociologia . Porto Alegre: Artmed, 2005. 
O texto indica que existe uma significativa produção 
científica sobre os impactos socioculturais da televisão 
na vida do ser humano. E as crianças, em particular, são 
as mais vulneráveis a essas influências, porque`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `codificam informações transmitidas nos programas infantis por meio da observação.` },
      { id: 'B', type: 'text', value: `adquirem conhecimentos variados que incentivam o processo de interação social.` },
      { id: 'C', type: 'text', value: `interiorizam padrões de comportamento e papéis sociais com menor visão crítica.` },
      { id: 'D', type: 'text', value: `observam formas de convivência social baseadas na tolerância e no respeito.` },
      { id: 'E', type: 'text', value: `apreendem modelos de sociedade pautados na observância das leis.` },
    ],
    correct: 'C',
    explanation: `O texto de Giddens aponta a abundância de pesquisas sobre os efeitos da televisão, especialmente nas crianças, consideradas as mais vulneráveis. Isso ocorre porque, em processo de socialização, elas interiorizam padrões de comportamento e papéis sociais com menor visão crítica, absorvendo acriticamente o que veem, por isso a alternativa C está correta. A reduz o processo à mera codificação por observação; B o apresenta como positivo estímulo à interação; D e E atribuem à televisão a transmissão de convivência tolerante e de respeito às leis, desconsiderando a vulnerabilidade crítica que o texto destaca nas crianças.`,
    subject: ['soc'],
    topics: ['Meios de comunicação, tecnologia e sociedade', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Subindo morros, margeando córregos ou penduradas 
em palafitas, as favelas fazem parte da paisagem de 
um terço dos municípios do país, abrigando mais de 
10 milhões de pessoas, segundo dados do Instituto 
Brasileiro de Geografia e Estatística (IBGE). 
MARTINS, A. R. A favela como um espaço da cidade . 
Disponível em: http://www.revistaescola.abril.com.br. Acesso em: 31 jul. 2010. 
A situação das favelas no país reporta a graves 
problemas de desordenamento territorial. Nesse sentido, 
uma característica comum a esses espaços tem sido`,
    alternatives: [
      { id: 'A', type: 'text', value: `o planejamento para a implantação de infraestruturas urbanas necessárias para atender as necessidades básicas dos moradores.` },
      { id: 'B', type: 'text', value: `a organização de associações de moradores interessadas na melhoria do espaço urbano e financiadas pelo poder público.` },
      { id: 'C', type: 'text', value: `a presença de ações referentes à educação ambiental com consequente preservação dos espaços naturais circundantes.` },
      { id: 'D', type: 'text', value: `a ocupação de áreas de risco suscetíveis a enchentes ou desmoronamentos com consequentes perdas materiais e humanas.` },
      { id: 'E', type: 'text', value: `o isolamento socioeconômico dos moradores ocupantes desses espaços com a resultante multiplicação de políticas que tentam reverter esse quadro.` },
    ],
    correct: 'D',
    explanation: `O texto trata das favelas, que ocupam encostas, margens de córregos e palafitas em grande parte dos municípios brasileiros, revelando problemas de desordenamento territorial. Uma característica comum a esses espaços é a ocupação de áreas de risco, suscetíveis a enchentes e desmoronamentos, com consequentes perdas materiais e humanas, por isso a alternativa D está correta. A (planejamento prévio de infraestrutura), B (associações financiadas pelo poder público) e C (ações de educação ambiental e preservação) não descrevem a realidade da ocupação irregular; e E é contraditória, ao somar isolamento socioeconômico à multiplicação de políticas que reverteriam o quadro.`,
    subject: ['geo'],
    topics: ['Espaço urbano e urbanização', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Foto de Militão, São Paulo, 1879. 
ALENCASTRO, L. F. (org). História da vida privada no Brasil . 
Império: a corte e a modernidade nacional. São Paulo: Cia. das Letras, 1997. 
Que aspecto histórico da escravidão no Brasil do séc. 
XIX pode ser identificado a partir da análise do vestuário 
do casal retratado acima?`,
    images: ['/enem/2011/images/enem_2011_d1_q29.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O uso de trajes simples indica a rápida incorporação dos ex-escravos ao mundo do trabalho urbano.` },
      { id: 'B', type: 'text', value: `A presença de acessórios como chapéu e sombrinha aponta para a manutenção de elementos culturais de origem africana.` },
      { id: 'C', type: 'text', value: `O uso de sapatos é um importante elemento de diferenciação social entre negros libertos ou em melhores condições na ordem escravocrata.` },
      { id: 'D', type: 'text', value: `A utilização do paletó e do vestido demonstra a tentativa de assimilação de um estilo europeu como forma de distinção em relação aos brasileiros.` },
      { id: 'E', type: 'text', value: `A adoção de roupas próprias para o trabalho doméstico tinha como finalidade demarcar as fronteiras da exclusão social naquele contexto.` },
    ],
    correct: 'C',
    explanation: `A foto de 1879 mostra um casal negro bem trajado, com paletó, vestido e, sobretudo, usando sapatos. Na ordem escravocrata do século XIX, calçar sapatos era um importante elemento de diferenciação social, distinguindo negros libertos ou em melhores condições dos escravizados, que andavam descalços, por isso a alternativa C está correta. A vê nos trajes simples uma rápida incorporação ao trabalho urbano; B atribui a chapéu e sombrinha uma origem africana, quando são elementos europeus; D interpreta as roupas como assimilação para distinção dos brasileiros; e E as associa ao trabalho doméstico, leituras que não correspondem ao significado social do vestuário retratado.`,
    subject: ['his'],
    topics: ['Escravidão, resistência e abolição', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os três tipos de poder representam três diversos 
tipos de motivações: no poder tradicional, o motivo da 
obediência é a crença na sacralidade da pessoa do 
soberano; no poder racional, o motivo da obediência 
deriva da crença na racionalidade do comportamento 
conforme a lei; no poder carismático, deriva da crença 
nos dotes extraordinários do chefe. 
BOBBIO, N. Estado, Governo, Sociedade : para uma teoria geral da política. 
São Paulo: Paz e Terra, 1999 (adaptado). 
O texto apresenta três tipos de poder que podem 
ser identificados em momentos históricos distintos. 
Identifique o período em que a obediência esteve 
associada predominantemente ao poder carismático:`,
    alternatives: [
      { id: 'A', type: 'text', value: `República Federalista Norte-Americana.` },
      { id: 'B', type: 'text', value: `República Fascista Italiana no século XX.` },
      { id: 'C', type: 'text', value: `Monarquia Teocrática do Egito Antigo.` },
      { id: 'D', type: 'text', value: `Monarquia Absoluta Francesa no século XVII.` },
      { id: 'E', type: 'text', value: `Monarquia Constitucional Brasileira no século XIX.` },
    ],
    correct: 'B',
    explanation: `O texto de Bobbio retoma os três tipos de poder de Max Weber: o tradicional (crença na sacralidade do soberano), o racional-legal (crença na lei) e o carismático (crença nos dotes extraordinários do chefe). A obediência associada ao poder carismático manifesta-se na República Fascista Italiana do século XX, cuja liderança se sustentava na figura excepcional de Mussolini, por isso a alternativa B está correta. A (República Federalista Norte-Americana) exemplifica o poder racional-legal; e C (Egito Antigo), D (Monarquia Absoluta Francesa) e E (Monarquia Constitucional Brasileira) remetem ao poder tradicional, baseado na sacralidade ou na herança, e não no carisma pessoal do líder.`,
    subject: ['fil'],
    topics: ['Filosofia contemporânea', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em geral, os nossos tupinambás ficam bem admirados 
ao ver os franceses e os outros dos países longínquos 
terem tanto trabalho para buscar o seu arabotã, isto é, 
pau-brasil. Houve uma vez um ancião da tribo que me fez 
esta pergunta: “Por que vindes vós outros, mairs e perós 
(franceses e portugueses), buscar lenha de tão longe 
para vos aquecer? Não tendes madeira em vossa terra?” 
LÉRy, J. Viagem à Terra do Brasil. In : FERNANDES, F. 
Mudanças Sociais no Brasil . São Paulo: Difel, 1974. 
O viajante francês Jean de Léry (1534-1611) reproduz 
um diálogo travado, em 1557, com um ancião tupinambá, 
o qual demonstra uma diferença entre a sociedade 
europeia e a indígena no sentido`,
    alternatives: [
      { id: 'A', type: 'text', value: `do destino dado ao produto do trabalho nos seus sistemas culturais.` },
      { id: 'B', type: 'text', value: `da preocupação com a preservação dos recursos ambientais.` },
      { id: 'C', type: 'text', value: `do interesse de ambas em uma exploração comercial mais lucrativa do pau-brasil.` },
      { id: 'D', type: 'text', value: `da curiosidade, reverência e abertura cultural recíprocas.` },
      { id: 'E', type: 'text', value: `da preocupação com o armazenamento de madeira para os períodos de inverno.` },
    ],
    correct: 'A',
    explanation: `O relato de Jean de Léry reproduz a pergunta de um ancião tupinambá que não compreendia por que os europeus buscavam madeira tão longe para acumular riqueza. O diálogo revela uma diferença quanto ao destino dado ao produto do trabalho nos respectivos sistemas culturais: os indígenas não acumulavam bens, enquanto os europeus visavam ao acúmulo e ao comércio, por isso a alternativa A está correta. B atribui aos tupinambás uma preocupação ambiental anacrônica; C generaliza o interesse comercial a ambas as sociedades; D fala em curiosidade e reverência recíprocas; e E imagina um armazenamento de madeira para o inverno, estranho ao modo de vida indígena.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'África e povos indígenas', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A Lei 10.639, de 9 de janeiro de 2003, inclui no 
currículo dos estabelecimentos de ensino fundamental e 
médio, oficiais e particulares, a obrigatoriedade do ensino 
sobre História e Cultura Afro-Brasileira e determina que 
o conteúdo programático incluirá o estudo da História 
da África e dos africanos, a luta dos negros no Brasil, 
a cultura negra brasileira e o negro na formação da 
sociedade nacional, resgatando a contribuição do povo 
negro nas áreas social, econômica e política pertinentes 
à História do Brasil, além de instituir, no calendário 
escolar, o dia 20 de novembro como data comemorativa 
do “Dia da Consciência Negra”. 
Disponível em: http://www.planalto.gov.br. Acesso em: 27 jul. 2010 (adaptado). 
A referida lei representa um avanço não só para a 
educação nacional, mas também para a sociedade 
brasileira, porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `legitima o ensino das` },
      { id: 'B', type: 'text', value: `divulga conhecimentos para a população afro-brasileira.` },
      { id: 'C', type: 'text', value: `reforça a concepção etnocêntrica sobre a África e sua cultura.` },
      { id: 'D', type: 'text', value: `garante aos afrodescendentes a igualdade no acesso à educação.` },
      { id: 'E', type: 'text', value: `impulsiona o reconhecimento da pluralidade étnico-racial do país.` },
    ],
    correct: 'E',
    explanation: `A Lei 10.639/2003 tornou obrigatório o ensino de História e Cultura Afro-Brasileira e Africana nas escolas, resgatando a contribuição do povo negro à formação nacional. Ela representa um avanço porque impulsiona o reconhecimento da pluralidade étnico-racial do país, valorizando a diversidade e combatendo o apagamento histórico, por isso a alternativa E está correta. A reduz a lei ao ensino das ciências humanas; B restringe seu alcance à população afro-brasileira; C afirma que ela reforça a visão etnocêntrica, o oposto de seu propósito; e D exagera ao dizer que garante igualdade de acesso à educação, que não é o conteúdo da norma.`,
    subject: ['soc'],
    topics: ['Cultura, identidade e diversidade', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O açúcar e suas técnicas de produção foram levados 
à Europa pelos árabes no século VIII, durante a Idade 
Média, mas foi principalmente a partir das Cruzadas 
(séculos XI e XIII) que a sua procura foi aumentando. 
Nessa época passou a ser importado do Oriente Médio 
e produzido em pequena escala no sul da Itália, mas 
continuou a ser um produto de luxo, extremamente caro, 
chegando a figurar nos dotes de princesas casadoiras. 
CAMPOS, R. Grandeza do Brasil no tempo de Antonil (1681-1716). São Paulo: Atual, 1996. 
Considerando o conceito do Antigo Sistema Colonial, 
o açúcar foi o produto escolhido por Portugal para dar 
início à colonização brasileira, em virtude de`,
    alternatives: [
      { id: 'A', type: 'text', value: `o lucro obtido com o seu comércio ser muito vantajoso.` },
      { id: 'B', type: 'text', value: `os árabes serem aliados históricos dos portugueses.` },
      { id: 'C', type: 'text', value: `a mão de obra necessária para o cultivo ser insuficiente.` },
      { id: 'D', type: 'text', value: `as feitorias africanas facilitarem a comercialização desse produto.` },
      { id: 'E', type: 'text', value: `os nativos da América dominarem uma técnica de cultivo semelhante.` },
    ],
    correct: 'A',
    explanation: `O texto mostra que o açúcar, trazido pelos árabes e difundido após as Cruzadas, era um produto de luxo e caríssimo na Europa. Dentro da lógica do Antigo Sistema Colonial, Portugal escolheu o açúcar para iniciar a colonização do Brasil em virtude do lucro altamente vantajoso que seu comércio proporcionava, por isso a alternativa A está correta. B inventa uma aliança histórica entre árabes e portugueses; C trata da insuficiência de mão de obra, que não explica a escolha do produto; D atribui a decisão às feitorias africanas; e E afirma que os nativos dominavam técnica semelhante de cultivo, o que não procede.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Idade Moderna', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `No clima das ideias que se seguiram à revolta de São 
Domingos, o descobrimento de planos para um levante 
armado dos artífices mulatos na Bahia, no ano de 1798, 
teve impacto muito especial; esses planos demonstravam 
aquilo que os brancos conscientes tinham já começado 
a compreender: as ideias de igualdade social estavam 
a propagar-se numa sociedade em que só um terço da 
população era de brancos e iriam inevitavelmente ser 
interpretados em termos raciais. 
MAXWELL. K. Condicionalismos da Independência do Brasil. In : SILVA, M.N. (coord.) 
O Império luso-brasileiro, 1750-1822 . Lisboa: Estampa, 1986. 
O temor do radicalismo da luta negra no Haiti e das 
propostas das lideranças populares da Conjuração 
Baiana (1798) levaram setores da elite colonial brasileira 
a novas posturas diante das reivindicações populares. 
No período da Independência, parte da elite participou 
ativamente do processo, no intuito de`,
    alternatives: [
      { id: 'A', type: 'text', value: `instalar um partido nacional, sob sua liderança, garantindo participação controlada dos afro-brasileiros e inibindo novas rebeliões de negros.` },
      { id: 'B', type: 'text', value: `atender aos clamores apresentados no movimento baiano, de modo a inviabilizar novas rebeliões, garantindo o controle da situação.` },
      { id: 'C', type: 'text', value: `firmar alianças com as lideranças escravas, permitindo a promoção de mudanças exigidas pelo povo sem a profundidade proposta inicialmente.` },
      { id: 'D', type: 'text', value: `impedir que o povo conferisse ao movimento um teor libertário, o que terminaria por prejudicar seus interesses e seu projeto de nação.` },
      { id: 'E', type: 'text', value: `rebelar-se contra as representações metropolitanas, isolando politicamente o Príncipe Regente, instalando um governo conservador para controlar o povo.` },
    ],
    correct: 'D',
    explanation: `O texto mostra que o temor do radicalismo da luta negra no Haiti e das propostas populares da Conjuração Baiana (1798) levou a elite colonial a rever sua postura diante das reivindicações populares. No processo de Independência, parte dessa elite participou ativamente com o intuito de impedir que o povo conferisse ao movimento um teor libertário e radical, que prejudicaria seus interesses e seu projeto de nação, por isso a alternativa D está correta. A fala em instalar um partido nacional, instituição inexistente então; B restringe a ação ao movimento baiano; C supõe alianças com lideranças escravas; e E imagina uma rebelião contra a metrópole isolando o Príncipe Regente, o oposto da condução elitista e controlada da Independência.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Se a mania de fechar, verdadeiro habitus da 
mentalidade medieval nascido talvez de um profundo 
sentimento de insegurança, estava difundida no mundo 
rural, estava do mesmo modo no meio urbano, pois que 
uma das características da cidade era de ser limitada 
por portas e por uma muralha. 
DUBY, G. et al . “Séculos XIV-XV”. In : ARIÈS, P.; DUBY, G. História da vida privada da 
Europa Feudal à Renascença . São Paulo: Cia. das Letras, 1990 (adaptado). 
As práticas e os usos das muralhas sofreram importantes 
mudanças no final da Idade Média, quando elas 
assumiram a função de pontos de passagem ou pórticos. 
Este processo está diretamente relacionado com`,
    alternatives: [
      { id: 'A', type: 'text', value: `o crescimento das atividades comerciais e urbanas.` },
      { id: 'B', type: 'text', value: `a migração de camponeses e artesãos.` },
      { id: 'C', type: 'text', value: `a expansão dos parques industriais e fabris.` },
      { id: 'D', type: 'text', value: `o aumento do número de castelos e feudos.` },
      { id: 'E', type: 'text', value: `a contenção das epidemias e doenças.` },
    ],
    correct: 'A',
    explanation: `O texto de Duby mostra que, no fim da Idade Média, as muralhas urbanas deixaram de ser apenas barreiras de defesa e passaram a funcionar como pontos de passagem e pórticos. Essa mudança está diretamente relacionada ao crescimento das atividades comerciais e urbanas (renascimento comercial e urbano da Baixa Idade Média), que intensificou a circulação de pessoas e mercadorias, por isso a alternativa A está correta. B reduz o processo à migração de camponeses e artesãos; C é anacrônica ao citar parques industriais; D fala em aumento de castelos e feudos, associado ao declínio feudal que estava sendo superado; e E atribui a mudança à contenção de epidemias, alheia ao fenômeno descrito.`,
    subject: ['his'],
    topics: ['Idade Média', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `SMITH, D. Atlas da Situação Mundial . São Paulo: Cia. Editora Nacional, 2007 (adaptado). 
Uma explicação de caráter histórico para o percentual da 
religião com maior número de adeptos declarados no Brasil 
foi a existência, no passado colonial e monárquico, da`,
    images: ['/enem/2011/images/enem_2011_d1_q36.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `incapacidade do cristianismo de incorporar aspectos de outras religiões.` },
      { id: 'B', type: 'text', value: `incorporação da ideia de liberdade religiosa na esfera pública.` },
      { id: 'C', type: 'text', value: `permissão para o funcionamento de igrejas não cristãs.` },
      { id: 'D', type: 'text', value: `relação de integração entre Estado e Igreja.` },
      { id: 'E', type: 'text', value: `influência das religiões de origem africana.` },
    ],
    correct: 'D',
    explanation: `O gráfico mostra a maioria católica no Brasil (73,8% em 2007), e a questão pede uma explicação histórica para esse predomínio. No passado colonial e monárquico, vigorava a relação de integração entre Estado e Igreja (o padroado e o catolicismo como religião oficial), o que impôs e consolidou o catolicismo na formação da sociedade, por isso a alternativa D está correta. A fala em incapacidade do cristianismo de incorporar outras religiões; B e C supõem liberdade religiosa e autorização de cultos não católicos, inexistentes no período confessional; e E atribui o predomínio à influência das religiões africanas, que não explica a maioria católica.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `No Estado de São Paulo, a mecanização da 
colheita da cana-de-açúcar tem sido induzida também 
pela legislação ambiental, que proíbe a realização de 
queimadas em áreas próximas aos centros urbanos. Na 
região de Ribeirão Preto, principal polo sucroalcooleiro 
do país, a mecanização da colheita já é realizada em 
516 mil dos 1,3 milhão de hectares cultivados com 
cana-de-açúcar. 
BALSADI, O. et al . Transformações Tecnológicas e a força de trabalho na agricultura 
brasileira no período de 1990-2000. Revista de economia agrícola . V. 49 (1), 2002. 
O texto aborda duas questões, uma ambiental e 
outra socioeconômica, que integram o processo de 
modernização da produção canavieira. Em torno da 
associação entre elas, uma mudança decorrente desse 
processo é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `perda de nutrientes do solo devido à utilização constante de máquinas.` },
      { id: 'B', type: 'text', value: `eficiência e racionalidade no plantio com maior produtividade na colheita.` },
      { id: 'C', type: 'text', value: `ampliação da oferta de empregos nesse tipo de ambiente produtivo.` },
      { id: 'D', type: 'text', value: `menor compactação do solo pelo uso de maquinário agrícola de porte.` },
      { id: 'E', type: 'text', value: `poluição do ar pelo consumo de combustíveis fósseis pelas máquinas.` },
    ],
    correct: 'B',
    explanation: `O texto associa duas questões no processo de modernização da produção canavieira em São Paulo: a ambiental (proibição das queimadas) e a socioeconômica (mecanização da colheita). Uma mudança decorrente dessa associação é a maior eficiência e racionalidade no plantio, com aumento da produtividade na colheita mecanizada, por isso a alternativa B está correta. A aponta perda de nutrientes do solo, não central no texto; C prevê ampliação de empregos, quando a mecanização reduz postos de trabalho; D afirma menor compactação do solo, contrária ao uso de máquinas pesadas; e E destaca a poluição do ar, quando a proibição das queimadas tende, ao contrário, a reduzir emissões.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões ambientais', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Acompanhando a intenção da burguesia renascentista de ampliar
seu domínio sobre a natureza e sobre o espaço geográfico,
através da pesquisa científica e da invenção tecnológica, os
cientistas também iriam se atirar nessa aventura, tentando
conquistar a forma, o movimento, o espaço, a luz, a cor e
mesmo a expressão e o sentimento. SEVCENKO, N. O Renascimento
. Campinas: Unicamp, 1984. O texto apresenta um espírito de
época que afetou também a produção artística, marcada pela
constante relação entre`,
    alternatives: [
      { id: 'A', type: 'text', value: `fé e misticismo.` },
      { id: 'B', type: 'text', value: `ciência e arte.` },
      { id: 'C', type: 'text', value: `cultura e comércio.` },
      { id: 'D', type: 'text', value: `política e economia.` },
      { id: 'E', type: 'text', value: `astronomia e religião.` },
    ],
    correct: 'B',
    explanation: `O texto de Sevcenko mostra que, no Renascimento, a burguesia buscou ampliar seu domínio sobre a natureza por meio da pesquisa científica e da invenção tecnológica, espírito de época que também influenciou a arte. Esse 'espírito renascentista' marcou a produção artística pela constante relação entre ciência e arte, como no estudo da forma, do movimento, da luz e da perspectiva, por isso a alternativa B está correta. A (fé e misticismo) remete à mentalidade medieval; C (cultura e comércio), D (política e economia) e E (astronomia e religião) não traduzem o vínculo entre o conhecimento científico e a criação artística que caracteriza o período.`,
    subject: ['his'],
    topics: ['Idade Moderna', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os chineses não atrelam nenhuma condição para 
efetuar investimentos nos países africanos. Outro 
ponto interessante é a venda e compra de grandes 
somas de áreas, posteriormente cercadas. Por se 
tratar de países instáveis e com governos ainda não 
consolidados, teme-se que algumas nações da África 
tornem-se literalmente protetorados. 
BRANCOLI, F. China e os novos investimentos na África: 
neocolonialismo ou mudanças na arquitetura global? 
 Disponível em: http://opiniaoenoticia.com.br. Acesso em: 29 abr. 2010 (adaptado). 
A presença econômica da China em vastas áreas do 
globo é uma realidade do século XXI. A partir do texto, 
como é possível caracterizar a relação econômica da 
China com o continente africano?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Pela presença de órgãos econômicos internacionais como o Fundo Monetário Internacional (FMI) e o Banco Mundial, que restringem os investimentos chineses, uma vez que estes não se preocupam com a preservação do meio ambiente.` },
      { id: 'B', type: 'text', value: `Pela ação de ONGs (Organizações Não Governamen-tais) que limitam os investimentos estatais chineses, uma vez que estes se mostram desinteressados em relação aos problemas sociais africanos.` },
      { id: 'C', type: 'text', value: `Pela aliança com os capitais e investimentos diretos realizados pelos países ocidentais, promovendo o crescimento econômico de algumas regiões desse continente.` },
      { id: 'D', type: 'text', value: `Pela presença cada vez maior de investimentos diretos, o que pode representar uma ameaça à soberania dos países africanos ou manipulação das ações destes governos em favor dos grandes projetos.` },
      { id: 'E', type: 'text', value: `Pela presença de um número cada vez maior de diplomatas, o que pode levar à formação de um Mercado Comum Sino-Africano, ameaçando os interesses ocidentais.` },
    ],
    correct: 'D',
    explanation: `O texto discute a crescente presença econômica da China na África por meio de investimentos sem condicionantes, compra de grandes áreas de terra e atuação em países instáveis, levantando o temor de novos 'protetorados'. Essa relação pode ser caracterizada pela presença cada vez maior de investimentos diretos, que podem ameaçar a soberania dos países africanos ou manipular seus governos em favor dos grandes projetos chineses, por isso a alternativa D está correta. A e B invertem o papel do FMI, do Banco Mundial e das ONGs como limitadores dos investimentos chineses; C atribui a aliança a capitais ocidentais; e E desloca o foco para diplomatas e para uma ameaça aos interesses ocidentais.`,
    subject: ['geo'],
    topics: ['Geopolítica e conflitos internacionais', 'Globalização e economia mundial', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O café tem origem na região onde hoje se encontra 
a Etiópia, mas seu cultivo e consumo se disseminaram 
a partir da Península Árabe. Aportou à Europa por 
Constantinopla e, finalmente, em 1615, ganhou a cidade 
de Veneza. Quando o café chegou à região europeia, 
alguns clérigos sugeriram que o produto deveria 
ser excomungado, por ser obra do diabo. O papa 
Clemente VIII (1592-1605), contudo, resolveu provar 
a bebida. Tendo gostado do sabor, decidiu que ela 
deveria ser batizada para que se tornasse uma “bebida 
verdadeiramente cristã”. 
THORN, J. Guia do café. Lisboa: Livros e livros, 1998 (adaptado). 
A postura dos clérigos e do papa Clemente VIII diante 
da introdução do café na Europa Ocidental pode ser 
explicada pela associação dessa bebida ao`,
    alternatives: [
      { id: 'A', type: 'text', value: `ateísmo.` },
      { id: 'B', type: 'text', value: `judaísmo.` },
      { id: 'C', type: 'text', value: `hinduísmo.` },
      { id: 'D', type: 'text', value: `islamismo.` },
      { id: 'E', type: 'text', value: `protestantismo.` },
    ],
    correct: 'D',
    explanation: `O texto conta que o café, originário da região etíope e difundido pela Península Arábica, despertou desconfiança do clero europeu, que chegou a sugerir sua excomunhão por ser 'obra do diabo', até que o papa Clemente VIII o aprovou. Essa postura explica-se pela associação da bebida ao islamismo, pois o café vinha do mundo árabe-muçulmano e era visto como bebida de infiéis, por isso a alternativa D está correta. A (ateísmo), B (judaísmo), C (hinduísmo) e E (protestantismo) não correspondem à origem do produto nem ao receio religioso manifestado pelos clérigos católicos diante de algo vindo do mundo islâmico.`,
    subject: ['his'],
    topics: ['Idade Moderna', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A consolidação do regime democrático no Brasil 
contra os extremismos da esquerda e da direita 
exige ação enérgica e permanente no sentido do 
aprimoramento das instituições políticas e da realização 
de reformas corajosas no terreno econômico, financeiro 
e social. 
Mensagem programática da União Democrática Nacional (UDN) - 1957. 
Os trabalhadores deverão exigir a constituição de um 
governo nacionalista e democrático, com participação 
dos trabalhadores para a realização das seguintes 
medidas: a) Reforma bancária progressista; b) Reforma 
agrária que extinga o latifúndio; c) Regulamentação da 
Lei de Remessas de Lucros. 
Manifesto do Comando Geral dos Trabalhadores (CGT) - 1962. 
BONAVIDES, P; AMARAL, R . Textos políticos da história do Brasil . 
Brasília: Senado Federal, 2002. 
Nos anos 1960 eram comuns as disputas pelo significado 
de termos usados no debate político, como democracia 
e reforma. Se, para os setores aglutinados em torno da 
UDN, as reformas deveriam assegurar o livre mercado, 
para aqueles organizados no CGT, elas deveriam 
resultar em`,
    alternatives: [
      { id: 'A', type: 'text', value: `fim da intervenção estatal na economia.` },
      { id: 'B', type: 'text', value: `crescimento do setor de bens de consumo.` },
      { id: 'C', type: 'text', value: `controle do desenvolvimento industrial.` },
      { id: 'D', type: 'text', value: `atração de investimentos estrangeiros.` },
      { id: 'E', type: 'text', value: `limitação da propriedade privada.` },
    ],
    correct: 'E',
    explanation: `Os textos mostram a disputa, nos anos 1960, pelo significado de termos como 'democracia' e 'reforma' entre a UDN e o CGT. Para a UDN, as reformas deveriam assegurar o livre mercado; para os trabalhadores organizados no CGT, deveriam resultar em limitação da propriedade privada, com medidas como a reforma agrária que extinguisse o latifúndio, por isso a alternativa E está correta. A (fim da intervenção estatal) e D (atração de investimentos estrangeiros) aproximam-se mais do ideário udenista liberal; B (crescimento do setor de bens de consumo) e C (controle do desenvolvimento industrial) não traduzem a pauta das reformas de base defendida pelo CGT.`,
    subject: ['his'],
    topics: ['República Populista', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em meio às turbulências vividas na primeira metade dos anos
1960, tinha-se a impressão de que as tendências de esquerda
estavam se fortalecendo na área cultural. O Centro Popular de
Cultura (CPC) da União Nacional dos Estudantes (UNE) encenava
peças de teatro que faziam agitação e propaganda em favor da
luta pelas reformas de base e satirizavam o “imperialismo” e
seus “aliados internos”. KONDER, L. História das Ideias
Socialistas no Brasil . São Paulo: Expressão Popular, 2003. No
início da década de 1960, enquanto vários setores da esquerda
brasileira consideravam que o CPC da UNE era uma importante
forma de conscientização das classes trabalhadoras, os setores
conservadores e de direita (políticos vinculados à União
Democrática Nacional - UDN -, Igreja Católica, grandes
empresários etc.) entendiam que esta organização`,
    alternatives: [
      { id: 'A', type: 'text', value: `constituía mais uma ameaça para a democracia brasileira, ao difundir a ideologia comunista.` },
      { id: 'B', type: 'text', value: `contribuía com a valorização da genuína cultura nacional, ao encenar peças de cunho popular.` },
      { id: 'C', type: 'text', value: `realizava uma tarefa que deveria ser exclusiva do Estado, ao pretender educar o povo por meio da cultura.` },
      { id: 'D', type: 'text', value: `prestava um serviço importante à sociedade brasileira, ao incentivar a participação política dos mais pobres.` },
      { id: 'E', type: 'text', value: `diminuía a força dos operários urbanos, ao substituir os sindicatos como instituição de pressão política sobre o governo.` },
    ],
    correct: 'A',
    explanation: `O texto mostra que, no início dos anos 1960, enquanto setores de esquerda viam no CPC da UNE uma forma de conscientização das classes trabalhadoras, os setores conservadores e de direita (ligados à UDN, à Igreja Católica e a grandes empresários) o combatiam. Para esses grupos, o CPC constituía uma ameaça à democracia brasileira por difundir a ideologia comunista, por isso a alternativa A está correta. B, C, D e E apresentam leituras positivas ou neutras da organização (valorização da cultura nacional, tarefa do Estado, incentivo à participação dos mais pobres e substituição dos sindicatos), incompatíveis com a visão conservadora descrita.`,
    subject: ['his'],
    topics: ['República Populista', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Charge capa da revista “O Malho”, de 1904. Disponível em: http://1.bp.blogspot.com. 
A imagem representa as manifestações nas ruas da 
cidade do Rio de Janeiro, na primeira década do século 
XX, que integraram a Revolta da Vacina. Considerando 
o contexto político-social da época, essa revolta revela`,
    images: ['/enem/2011/images/enem_2011_d1_q43.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a insatisfação da população com os benefícios de uma modernização urbana autoritária.` },
      { id: 'B', type: 'text', value: `a consciência da população pobre sobre a necessidade de vacinação para a erradicação das epidemias.` },
      { id: 'C', type: 'text', value: `a garantia do processo democrático instaurado com a República, através da defesa da liberdade de expressão da população.` },
      { id: 'D', type: 'text', value: `o planejamento do governo republicano na área de saúde, que abrangia a população em geral.` },
      { id: 'E', type: 'text', value: `o apoio ao governo republicano pela atitude de vacinar toda a população em vez de privilegiar a elite.` },
    ],
    correct: 'A',
    explanation: `A charge de 1904 representa as manifestações da Revolta da Vacina no Rio de Janeiro, no contexto da reforma urbana autoritária de Pereira Passos e da vacinação obrigatória imposta por Oswaldo Cruz sem esclarecimento à população. A revolta revela a insatisfação popular com os efeitos de uma modernização urbana autoritária, que expulsava os pobres e invadia sua intimidade, por isso a alternativa A está correta. B e E atribuem à população adesão à vacinação e apoio ao governo, o contrário do ocorrido; C vê na revolta a defesa do processo democrático; e D a interpreta como apoio ao planejamento sanitário, leituras que contrariam o caráter de protesto do movimento.`,
    subject: ['his'],
    topics: ['República Velha', 'Cidadania, movimentos sociais e trabalho na história', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `SILVA, E. S. O. Circuito espacial de produção e comercialização da produção familiar de 
tomate no município de São José de Ubá (RJ). In : RIBEIRO, M. A.; MARAFON, G. J. (orgs.). 
A metrópole e o interior fluminense : simetrias e assimetrias geográficas. 
Rio de Janeiro: Gramma, 2009 (adaptado). 
O organograma apresenta os diversos atores que 
integram uma cadeia agroindustrial e a intensa relação 
entre os setores primário, secundário e terciário. Nesse 
sentido, a disposição dos atores na cadeia agroindustrial 
demonstra`,
    images: ['/enem/2011/images/enem_2011_d1_q44.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a autonomia do setor primário.` },
      { id: 'B', type: 'text', value: `a importância do setor financeiro.` },
      { id: 'C', type: 'text', value: `o distanciamento entre campo e cidade.` },
      { id: 'D', type: 'text', value: `a subordinação da indústria à agricultura.` },
      { id: 'E', type: 'text', value: `a horizontalidade das relações produtivas.` },
    ],
    correct: 'B',
    explanation: `O organograma da cadeia agroindustrial integrada ao supermercado dispõe os atores dos setores primário, secundário e terciário e posiciona 'Bancos/Financiamentos' no topo, articulando toda a cadeia. Essa disposição demonstra a importância do setor financeiro, do qual dependem a produção de insumos, o agricultor, a indústria e a comercialização, por isso a alternativa B está correta. A é falsa, pois o setor primário aparece subordinado, não autônomo; C contraria a integração entre campo e cidade mostrada no esquema; D inverte a relação ao falar em subordinação da indústria à agricultura; e E nega a hierarquia evidente, afirmando horizontalidade entre os atores.`,
    subject: ['geo'],
    topics: ['Espaço agrário', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `As migrações transnacionais, intensificadas e generalizadas
nas últimas décadas do século XX, expressam aspectos
particularmente importantes da problemática racial, visto como
dilema também mundial. Deslocam-se indivíduos, famílias e
coletividades para lugares próximos e distantes, envolvendo
mudanças mais ou menos drásticas nas condições de vida e
trabalho, em padrões e valores socioculturais. Deslocam-se
para sociedades semelhantes ou radicalmente distintas, algumas
vezes compreendendo culturas ou mesmo civilizações totalmente
diversas. IANNI, O. A era do globalismo . Rio de Janeiro:
Civilização Brasileira, 1996. A mobilidade populacional da
segunda metade do século XX teve um papel importante na
formação social e econômica de diversos estados nacionais. Uma
razão para os movimentos migratórios nas últimas décadas e uma
política migratória atual dos países desenvolvidos são`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a busca de oportunidades de trabalho e o aumento de barreiras contra a imigração.` },
      { id: 'B', type: 'text', value: `a necessidade de qualificação profissional e a abertura das fronteiras para os imigrantes.` },
      { id: 'C', type: 'text', value: `o desenvolvimento de projetos de pesquisa e o acautelamento dos bens dos imigrantes.` },
      { id: 'D', type: 'text', value: `a expansão da fronteira agrícola e a expulsão dos imigrantes qualificados.` },
      { id: 'E', type: 'text', value: `a fuga decorrente de conflitos políticos e o fortalecimento de políticas sociais.` },
    ],
    correct: 'A',
    explanation: `O texto de Ianni trata das migrações transnacionais intensificadas no fim do século XX, que envolvem a busca por melhores condições de vida e também um dilema racial de alcance mundial. Uma razão desses movimentos é a busca de oportunidades de trabalho, enquanto uma política migratória atual dos países desenvolvidos é o aumento de barreiras contra a imigração, por isso a alternativa A está correta. B afirma abertura de fronteiras aos imigrantes, o contrário da tendência atual; C e D associam a migração a projetos de pesquisa ou à expulsão de qualificados, que não são as razões gerais; e E restringe a causa à fuga de conflitos políticos e supõe fortalecimento de políticas sociais de acolhimento.`,
    subject: ['geo'],
    topics: ['População, demografia e migrações', 'Globalização e economia mundial', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Partículas suspensas em um fluido apresentam contínua
movimentação aleatória, chamado movimento browniano, causado
pelos choques das partículas que compõem o fluido. A ideia de
um inventor era construir uma série de palhetas, montadas
sobre um eixo, que seriam postas em movimento pela agitação
das partículas ao seu redor. Como o movimento ocorreria
igualmente em ambos os sentidos de rotação, o cientista
concebeu um segundo elemento, um dente de engrenagem
assimétrico. Assim, em escala muito pequena, este tipo de
motor poderia executar trabalho, por exemplo, puxando um
pequeno peso para cima. O esquema, que já foi testado, é
mostrado a seguir. Eixo Engrenagem Palhetas Peso Inovação
Tecnológica. Disponível em:
http://www.inovacaotecnologica.com.br. Acesso em: 22 jul. 2010
(adaptado). A explicação para a necessidade do uso da
engrenagem com trava é:`,
    images: ['/enem/2011/images/enem_2011_d1_q46.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O travamento do motor, para que ele não se solte aleatoriamente.` },
      { id: 'B', type: 'text', value: `A seleção da velocidade, controlada pela pressão nos dentes da engrenagem.` },
      { id: 'C', type: 'text', value: `O controle do sentido da velocidade tangencial, permitindo, inclusive, uma fácil leitura do seu valor.` },
      { id: 'D', type: 'text', value: `A determinação do movimento, devido ao caráter aleatório, cuja tendência é o equilíbrio.` },
      { id: 'E', type: 'text', value: `A escolha do ângulo a ser girado, sendo possível, inclusive, medi-lo pelo número de dentes da engrenagem.` },
    ],
    correct: 'D',
    explanation: `O movimento browniano é aleatório: as partículas do fluido colidem com as palhetas igualmente nos dois sentidos de rotação, de modo que, em média, não haveria trabalho resultante — o sistema tende ao equilíbrio térmico. A engrenagem assimétrica com trava (catraca) funciona como um retificador: só permite o giro em um sentido, impedindo o retorno. É isso que torna possível que o motor execute trabalho, como puxar o peso para cima. Portanto, a trava é necessária para determinar o movimento, já que o caráter aleatório das colisões, por si só, tenderia ao equilíbrio (alternativa D).`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os personagens da figura estão representando uma 
situação hipotética de cadeia alimentar. 
Disponível em: http://www.cienciasgaspar.blogspot.com. 
Suponha que, em cena anterior à apresentada, o homem 
tenha se alimentado de frutas e grãos que conseguiu 
coletar. Na hipótese de, nas próximas cenas, o tigre ser 
bem-sucedido e, posteriormente, servir de alimento aos 
abutres, tigre e abutres ocuparão, respectivamente, os 
níveis tróficos de`,
    images: ['/enem/2011/images/enem_2011_d1_q47.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `produtor e consumidor primário.` },
      { id: 'B', type: 'text', value: `consumidor primário e consumidor secundário.` },
      { id: 'C', type: 'text', value: `consumidor secundário e consumidor terciário.` },
      { id: 'D', type: 'text', value: `consumidor terciário e produtor.` },
      { id: 'E', type: 'text', value: `consumidor secundário e consumidor primário.` },
    ],
    correct: 'C',
    explanation: `O homem alimentou-se de frutas e grãos (produtores), ocupando o nível de consumidor primário. O tigre, ao se alimentar do homem (consumidor primário), passa a ser consumidor secundário. Os abutres, que em seguida comem o tigre (consumidor secundário), tornam-se consumidores terciários. Logo, tigre e abutres ocupam, respectivamente, os níveis de consumidor secundário e consumidor terciário (alternativa C).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A produção de soro antiofídico é feita por meio da 
extração da peçonha de serpentes que, após tratamento, 
é introduzida em um cavalo. Em seguida são feitas 
sangrias para avaliar a concentração de anticorpos 
produzidos pelo cavalo. Quando essa concentração 
atinge o valor desejado, é realizada a sangria final para 
obtenção do soro. As hemácias são devolvidas ao animal, 
por meio de uma técnica denominada plasmaférese, a fim 
de reduzir os efeitos colaterais provocados pela sangria. 
Disponível em: http://www.infobibos.com. Acesso em: 28 abr. 2010 (adaptado). 
A plasmaférese é importante, pois, se o animal ficar com 
uma baixa quantidade de hemácias, poderá apresentar`,
    alternatives: [
      { id: 'A', type: 'text', value: `febre alta e constante.` },
      { id: 'B', type: 'text', value: `redução de imunidade.` },
      { id: 'C', type: 'text', value: `aumento da pressão arterial.` },
      { id: 'D', type: 'text', value: `quadro de leucemia profunda.` },
      { id: 'E', type: 'text', value: `problemas no transporte de oxigênio.` },
    ],
    correct: 'E',
    explanation: `As hemácias (glóbulos vermelhos) contêm hemoglobina e são responsáveis pelo transporte de oxigênio dos pulmões aos tecidos. Na plasmaferese, as hemácias retiradas na sangria são devolvidas ao cavalo justamente para não reduzir em excesso sua quantidade. Se o animal ficasse com poucas hemácias (anemia), sua capacidade de transportar oxigênio diminuiria. Por isso o procedimento é importante para evitar problemas no transporte de oxigênio (alternativa E).`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um paciente deu entrada em um pronto-socorro apresentando os
seguintes sintomas: cansaço, dificuldade em respirar e
sangramento nasal. O médico solicitou um hemograma ao paciente
para definir um diagnóstico. Os resultados estão dispostos na
tabela. Relacionando os sintomas apresentados pelo paciente
com os resultados de seu hemograma, constata-se que`,
    images: ['/enem/2011/images/enem_2011_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o sangramento nasal é devido à baixa quantidade de plaquetas, que são responsáveis pela coagulação sanguínea.` },
      { id: 'B', type: 'text', value: `o cansaço ocorreu em função da quantidade de glóbulos brancos, que são responsáveis pela coagulação sanguínea.` },
      { id: 'C', type: 'text', value: `a dificuldade respiratória decorreu da baixa quantidade de glóbulos vermelhos, que são responsáveis pela defesa imunológica.` },
      { id: 'D', type: 'text', value: `o sangramento nasal é decorrente da baixa quantidade de glóbulos brancos, que são responsáveis pelo transporte de gases no sangue.` },
      { id: 'E', type: 'text', value: `a dificuldade respiratória ocorreu pela quantidade de plaquetas, que são responsáveis pelo transporte de oxigênio no sangue.` },
    ],
    correct: 'A',
    explanation: `O paciente apresenta plaquetas abaixo do normal (200 000/mm³ contra 250 000–400 000/mm³), e as plaquetas são responsáveis pela coagulação sanguínea. Essa deficiência explica o sangramento nasal, pois sem coagulação adequada ocorrem hemorragias. Os glóbulos vermelhos estão levemente reduzidos (4 contra 4,8 milhões/mm³), compatível com o cansaço, e os glóbulos brancos estão dentro da faixa normal. Assim, o sangramento nasal decorre da baixa quantidade de plaquetas (alternativa A).`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um dos problemas dos combustíveis que contêm 
carbono é que sua queima produz dióxido de carbono. 
Portanto, uma característica importante, ao se escolher 
um combustível, é analisar seu calor de combustão 
(∆Hcº), definido como a energia liberada na queima 
completa de um mol de combustível no estado padrão. 
O quadro seguinte relaciona algumas substâncias que 
contêm carbono e seu ∆Hcº 
ATKINS, P. Princípios de Química . Bookman, 2007 (adaptado). 
Neste contexto, qual dos combustíveis, quando queimado 
completamente, libera mais dióxido de carbono no 
ambiente pela mesma quantidade de energia produzida?`,
    images: ['/enem/2011/images/enem_2011_d1_q50.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Benzeno.` },
      { id: 'B', type: 'text', value: `Metano.` },
      { id: 'C', type: 'text', value: `Glicose.` },
      { id: 'D', type: 'text', value: `Octano.` },
      { id: 'E', type: 'text', value: `Etanol.` },
    ],
    correct: 'C',
    explanation: `O CO₂ liberado é proporcional ao número de carbonos de cada combustível, e deve-se comparar o CO₂ produzido por unidade de energia (mol de CO₂ dividido por |ΔHc°|). Glicose: 6/2808 ≈ 2,14×10⁻³; benzeno: 6/3268 ≈ 1,84×10⁻³; etanol: 2/1368 ≈ 1,46×10⁻³; metano: 1/890 ≈ 1,12×10⁻³; octano: 8/5471 ≈ 1,46×10⁻³. O maior valor é o da glicose, que portanto libera mais CO₂ para a mesma quantidade de energia (alternativa C).`,
    subject: ['qui'],
    topics: ['Termoquímica', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Para evitar o desmatamento da Mata Atlântica nos 
arredores da cidade de Amargosa, no Recôncavo da 
Bahia, o Ibama tem atuado no sentido de fiscalizar, entre 
outras, as pequenas propriedades rurais que dependem 
da lenha proveniente das matas para a produção da 
farinha de mandioca, produto típico da região. Com isso, 
pequenos produtores procuram alternativas como o gás 
de cozinha, o que encarece a farinha. 
Uma alternativa viável, em curto prazo, para os 
produtores de farinha em Amargosa, que não cause 
danos à Mata Atlântica nem encareça o produto é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `construção, nas pequenas propriedades, de grandes fornos elétricos para torrar a mandioca.` },
      { id: 'B', type: 'text', value: `plantação, em suas propriedades, de árvores para serem utilizadas na produção de lenha.` },
      { id: 'C', type: 'text', value: `permissão, por parte do Ibama, da exploração da Mata Atlântica apenas pelos pequenos produtores.` },
      { id: 'D', type: 'text', value: `construção de biodigestores, para a produção de gás combustível a partir de resíduos orgânicos da região.` },
      { id: 'E', type: 'text', value: `coleta de carvão de regiões mais distantes, onde existe menor intensidade de fiscalização do Ibama.` },
    ],
    correct: 'D',
    explanation: `Os biodigestores promovem a decomposição anaeróbica da matéria orgânica (resíduos) por microrganismos, produzindo biogás rico em metano, que pode ser usado como combustível. Essa alternativa aproveita resíduos da própria região, é de baixo custo e não depende da lenha retirada da Mata Atlântica. Assim, resolve o problema dos pequenos produtores sem desmatar e sem encarecer a farinha. Logo, a solução viável é a construção de biodigestores (alternativa D).`,
    subject: ['bio'],
    topics: ['Impactos ambientais e conservação', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Belém é cercada por 39 ilhas, e suas populações 
convivem com ameaças de doenças. O motivo, apontado 
por especialistas, é a poluição da água do rio, principal 
fonte de sobrevivência dos ribeirinhos. A diarreia é 
frequente nas crianças e ocorre como consequência da 
falta de saneamento básico, já que a população não tem 
acesso à água de boa qualidade. Como não há água 
potável, a alternativa é consumir a do rio. 
O Liberal . 8 jul. 2008. Disponível em: http://www.oliberal.com.br. 
O procedimento adequado para tratar a água dos rios, 
a fim de atenuar os problemas de saúde causados por 
microrganismos a essas populações ribeirinhas é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `filtração.` },
      { id: 'B', type: 'text', value: `cloração.` },
      { id: 'C', type: 'text', value: `coagulação.` },
      { id: 'D', type: 'text', value: `fluoretação.` },
      { id: 'E', type: 'text', value: `decantação.` },
    ],
    correct: 'B',
    explanation: `A água do rio contém microrganismos patogênicos que causam doenças como a diarreia. Entre as etapas de tratamento, a filtração, a coagulação e a decantação apenas removem partículas e impurezas físicas, e a fluoretação visa à prevenção da cárie. A cloração é a etapa de desinfecção: o cloro mata os microrganismos presentes na água, tornando-a potável. Portanto, o procedimento adequado para atenuar os problemas de saúde causados por microrganismos é a cloração (alternativa B).`,
    subject: ['bio'],
    topics: ['Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O vírus do papiloma humano (HPV, na sigla em 
inglês) causa o aparecimento de verrugas e infecção 
persistente, sendo o principal fator ambiental do câncer 
de colo de útero nas mulheres. O vírus pode entrar 
pela pele ou por mucosas do corpo, o qual desenvolve 
anticorpos contra a ameaça, embora em alguns casos 
a defesa natural do organismo não seja suficiente. Foi 
desenvolvida uma vacina contra o HPV, que reduz em 
até 90% as verrugas e 85,6% dos casos de infecção 
persistente em comparação com pessoas não vacinadas. 
Disponível em: http://g1.globo.com. Acesso em: 12 jun. 2011. 
O benefício da utilização dessa vacina é que pessoas 
vacinadas, em comparação com as não vacinadas, 
apresentam diferentes respostas ao vírus HPV em 
decorrência da`,
    alternatives: [
      { id: 'A', type: 'text', value: `alta concentração de macrófagos.` },
      { id: 'B', type: 'text', value: `elevada taxa de anticorpos específicos anti-HPV circulantes.` },
      { id: 'C', type: 'text', value: `aumento na produção de hemácias após a infecção por vírus HPV.` },
      { id: 'D', type: 'text', value: `rapidez na produção de altas concentrações de linfócitos matadores.` },
      { id: 'E', type: 'text', value: `presença de células de memória que atuam na resposta secundária.` },
    ],
    correct: 'E',
    explanation: `Após a vacinação, o organismo produz células de memória específicas contra o HPV. Em um contato posterior com o vírus, essas células desencadeiam uma resposta imunológica secundária, mais rápida e intensa, com grande produção de anticorpos. É essa memória imunológica que diferencia as pessoas vacinadas das não vacinadas, conferindo maior proteção. Por isso o benefício decorre da presença de células de memória que atuam na resposta secundária (alternativa E).`,
    subject: ['bio'],
    topics: ['Imunologia', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Certas ligas estanho-chumbo com composição 
específica formam um eutético simples, o que significa 
que uma liga com essas características se comporta 
como uma substância pura, com um ponto de fusão 
definido, no caso 183  ºC. Essa é uma temperatura 
inferior mesmo ao ponto de fusão dos metais que 
compõem esta liga (o estanho puro funde a 232 ºC e 
o chumbo puro a 320  ºC), o que justifica sua ampla 
utilização na soldagem de componentes eletrônicos, 
em que o excesso de aquecimento deve sempre ser 
evitado. De acordo com as normas internacionais, os 
valores mínimo e máximo das densidades para essas 
ligas são de 8,74 g/mL e 8,82 g/mL, respectivamente. 
As densidades do estanho e do chumbo são 7,3 g/mL e 
11,3 g/mL, respectivamente. 
Um lote contendo 5 amostras de solda estanho- 
chumbo foi analisado por um técnico, por meio da 
determinação de sua composição percentual em massa, 
cujos resultados estão mostrados no quadro a seguir. 
 
Disponível em: http://www.eletrica.ufpr.br. 
Com base no texto e na análise realizada pelo técnico, 
as amostras que atendem às normas internacionais são`,
    images: ['/enem/2011/images/enem_2011_d1_q54.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I e II.` },
      { id: 'B', type: 'text', value: `I e III.` },
      { id: 'C', type: 'text', value: `II e IV.` },
      { id: 'D', type: 'text', value: `III e V.` },
      { id: 'E', type: 'text', value: `IV e V.` },
    ],
    correct: 'C',
    explanation: `A densidade de cada liga pode ser estimada pela média das densidades do estanho (7,3 g/mL) e do chumbo (11,3 g/mL), ponderada pelas porcentagens em massa: d = (%Sn·7,3 + %Pb·11,3)/100. Amostra I: (60·7,3 + 40·11,3)/100 = 8,90; II: (62·7,3 + 38·11,3)/100 = 8,82; III: 8,70; IV: (63·7,3 + 37·11,3)/100 = 8,78; V: 8,94. As normas exigem densidade entre 8,74 e 8,82 g/mL, faixa atendida apenas pelas amostras II (8,82) e IV (8,78). Logo, a resposta é a alternativa C (II e IV).`,
    subject: ['qui'],
    topics: ['Propriedades da matéria e separação de misturas', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `No processo de industrialização da mamona, além 
do óleo que contém vários ácidos graxos, é obtida uma 
massa orgânica, conhecida como torta de mamona. 
Esta massa tem potencial para ser utilizada como 
fertilizante para o solo e como complemento em rações 
animais devido a seu elevado valor proteico. No entanto, 
a torta apresenta compostos tóxicos e alergênicos 
diferentemente do óleo da mamona. Para que a torta 
possa ser utilizada na alimentação animal, é necessário 
um processo de descontaminação. 
Revista Química Nova na Escola . V. 32 , n o 1, 2010 (adaptado). 
A característica presente nas substâncias tóxicas e 
alergênicas, que inviabiliza sua solubilização no óleo de 
mamona, é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `lipofilia.` },
      { id: 'B', type: 'text', value: `hidrofilia.` },
      { id: 'C', type: 'text', value: `hipocromia.` },
      { id: 'D', type: 'text', value: `cromatofilia.` },
      { id: 'E', type: 'text', value: `hiperpolarização.` },
    ],
    correct: 'B',
    explanation: `O óleo de mamona é apolar (lipofílico). As substâncias tóxicas e alergênicas da torta têm natureza polar/proteica, ou seja, são hidrofílicas (têm afinidade pela água). Pela regra "semelhante dissolve semelhante", compostos hidrofílicos não se dissolvem no óleo apolar, permanecendo na torta e não no óleo. Assim, a característica que inviabiliza sua solubilização no óleo de mamona é a hidrofilia (alternativa B).`,
    subject: ['qui'],
    topics: ['Ligações químicas e forças intermoleculares', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O manual de funcionamento de um captador de 
guitarra elétrica apresenta o seguinte texto: 
Esse captador comum consiste de uma bobina, fios 
condutores enrolados em torno de um ímã permanente. 
O campo magnético do ímã induz o ordenamento dos 
polos magnéticos na corda da guitarra, que está próxima 
a ele. Assim, quando a corda é tocada, as oscilações 
produzem variações, com o mesmo padrão, no fluxo 
magnético que atravessa a bobina. Isso induz uma 
corrente elétrica na bobina, que é transmitida até o 
amplificador e, daí, para o alto-falante. 
Um guitarrista trocou as cordas originais de sua guitarra, 
que eram feitas de aço, por outras feitas de náilon. Com o 
uso dessas cordas, o amplificador ligado ao instrumento 
não emitia mais som, porque a corda de náilon`,
    alternatives: [
      { id: 'A', type: 'text', value: `isola a passagem de corrente elétrica da bobina para o alto-falante.` },
      { id: 'B', type: 'text', value: `varia seu comprimento mais intensamente do que ocorre com o aço.` },
      { id: 'C', type: 'text', value: `apresenta uma magnetização desprezível sob a ação do ímã permanente.` },
      { id: 'D', type: 'text', value: `induz correntes elétricas na bobina mais intensas que a capacidade do captador.` },
      { id: 'E', type: 'text', value: `oscila com uma frequência menor do que a que pode ser percebida pelo captador.` },
    ],
    correct: 'C',
    explanation: `O captador funciona por indução eletromagnética: o ímã magnetiza a corda de aço (material ferromagnético) e a vibração da corda altera o fluxo magnético na bobina, induzindo corrente elétrica. A corda de náilon não é ferromagnética e, portanto, apresenta magnetização desprezível sob a ação do ímã. Sem variação significativa de fluxo magnético, não há corrente induzida na bobina e o amplificador não emite som. Logo, a resposta é a alternativa C.`,
    subject: ['fis'],
    topics: ['Magnetismo e eletromagnetismo', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O controle biológico, técnica empregada no combate 
a espécies que causam danos e prejuízos aos seres 
humanos, é utilizado no combate à lagarta que se 
alimenta de folhas de algodoeiro. Algumas espécies 
de borboleta depositam seus ovos nessa cultura. A 
microvespa Trichogramma sp . introduz seus ovos nos 
ovos de outros insetos, incluindo os das borboletas 
em questão. Os embriões da vespa se alimentam do 
conteúdo desses ovos e impedem que as larvas de 
borboleta se desenvolvam. Assim, é possível reduzir a 
densidade populacional das borboletas até níveis que 
não prejudiquem a cultura. 
A técnica de controle biológico realizado pela microvespa 
Trichogramma sp. consiste na`,
    alternatives: [
      { id: 'A', type: 'text', value: `introdução de um parasita no ambiente da espécie que se deseja combater.` },
      { id: 'B', type: 'text', value: `introdução de um gene letal nas borboletas, a fim de diminuir o número de indivíduos.` },
      { id: 'C', type: 'text', value: `competição entre a borboleta e a microvespa para a obtenção de recursos.` },
      { id: 'D', type: 'text', value: `modificação do ambiente para selecionar indivíduos melhor adaptados.` },
      { id: 'E', type: 'text', value: `aplicação de inseticidas a fim de diminuir o número de indivíduos que se deseja combater.` },
    ],
    correct: 'A',
    explanation: `O controle biológico combate uma praga usando um inimigo natural, no caso a microvespa Trichogramma sp. Ela deposita seus ovos dentro dos ovos das borboletas, e suas larvas consomem esse conteúdo, impedindo o desenvolvimento das lagartas. Assim, reduz-se a população da praga por meio da introdução de um parasita no ambiente da espécie que se deseja combater (alternativa A). Não se empregam inseticidas nem manipulação genética nesse método.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A pele humana, quando está bem hidratada, 
adquire boa elasticidade e aspecto macio e suave. 
Em contrapartida, quando está ressecada, perde sua 
elasticidade e se apresenta opaca e áspera. Para 
evitar o ressecamento da pele é necessário, sempre 
que possível, utilizar hidratantes umectantes, feitos 
geralmente à base de glicerina e polietilenoglicol: 
glicerina 
polietilenoglicol 
Disponível em: http://www.brasilescola.com. Acesso em: 23 abr. 2010 (adaptado). 
A retenção de água na superfície da pele promovida 
pelos hidratantes é consequência da interação dos 
grupos hidroxila dos agentes umectantes com a umidade 
contida no ambiente por meio de`,
    images: ['/enem/2011/images/enem_2011_d1_q58.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ligações iônicas.` },
      { id: 'B', type: 'text', value: `forças de London.` },
      { id: 'C', type: 'text', value: `ligações covalentes.` },
      { id: 'D', type: 'text', value: `forças dipolo-dipolo.` },
      { id: 'E', type: 'text', value: `ligações de hidrogênio.` },
    ],
    correct: 'E',
    explanation: `A glicerina e o polietilenoglicol possuem vários grupos hidroxila (-OH). Esses grupos formam ligações de hidrogênio com as moléculas de água presentes na umidade do ambiente, retendo-a na superfície da pele. As ligações de hidrogênio são interações intermoleculares fortes que ocorrem entre o hidrogênio ligado ao oxigênio e os pares de elétrons do oxigênio da água. Portanto, a retenção de água se dá por meio de ligações de hidrogênio (alternativa E).`,
    subject: ['qui'],
    topics: ['Ligações químicas e forças intermoleculares', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A cal (óxido de cálcio, CaO), cuja suspensão em 
água é muito usada como uma tinta de baixo custo, dá 
uma tonalidade branca aos troncos de árvores. Essa é 
uma prática muito comum em praças públicas e locais 
privados, geralmente usada para combater a proliferação 
de parasitas. Essa aplicação, também chamada de 
caiação , gera um problema: elimina microrganismos 
benéficos para a árvore. 
Disponível em: http://super.abril.com.br. Acesso em: 1 abr. 2010 (adaptado). 
A destruição do microambiente, no tronco de árvores 
pintadas com cal, é devida ao processo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `difusão, pois a cal se difunde nos corpos dos seres do microambiente e os intoxica.` },
      { id: 'B', type: 'text', value: `osmose, pois a cal retira água do microambiente, tornando-o inviável ao desenvolvimento de microrganismos.` },
      { id: 'C', type: 'text', value: `oxidação, pois a luz solar que incide sobre o tronco ativa fotoquimicamente a cal, que elimina os seres vivos do microambiente.` },
      { id: 'D', type: 'text', value: `aquecimento, pois a luz do Sol incide sobre o tronco e aquece a cal, que mata os seres vivos do microambiente.` },
      { id: 'E', type: 'text', value: `vaporização, pois a cal facilita a volatilização da água para a atmosfera, eliminando os seres vivos do microambiente.` },
    ],
    correct: 'B',
    explanation: `A cal (CaO) é fortemente higroscópica e, por osmose, retira a água do microambiente do tronco. Os microrganismos dependem da água disponível para sobreviver; ao perderem água para o meio externo mais concentrado em sais, ficam desidratados. Com a remoção da água, o ambiente torna-se inviável ao desenvolvimento dos microrganismos, inclusive os benéficos. Portanto, a destruição do microambiente deve-se ao processo de osmose (alternativa B).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em um manual de um chuveiro elétrico são encontradas
informações sobre algumas características técnicas, ilustradas
no quadro, como a tensão de alimentação, a potência dissipada,
o dimensionamento do disjuntor ou fusível, e a área da seção
transversal dos condutores utilizados. Uma pessoa adquiriu um
chuveiro do modelo A e, ao ler o manual, verificou que
precisava ligá-lo a um disjuntor de 50 amperes. No entanto,
intrigou-se com o fato de que o disjuntor a ser utilizado para
uma correta instalação de um chuveiro do modelo B devia
possuir amperagem 40% menor. Considerando-se os chuveiros de
modelos A e B, funcionando à mesma potência de 4 400 W, a
razão entre as suas respectivas resistências elétricas, R A e
R B , que justifica a diferença de dimensionamento dos
disjuntores, é mais próxima de:`,
    images: ['/enem/2011/images/enem_2011_d1_q60.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,3.` },
      { id: 'B', type: 'text', value: `0,6.` },
      { id: 'C', type: 'text', value: `0,8.` },
      { id: 'D', type: 'text', value: `1,7.` },
      { id: 'E', type: 'text', value: `3,0.` },
    ],
    correct: 'A',
    explanation: `Como a potência é a mesma (4 400 W) e R = V²/P, a resistência depende do quadrado da tensão. A razão é R_A/R_B = V_A²/V_B² = 127²/220² = 16 129/48 400 ≈ 0,33. Esse valor é o mais próximo de 0,3 (alternativa A). O chuveiro de 127 V tem resistência cerca de três vezes menor que o de 220 V, o que justifica a maior corrente e o disjuntor de maior amperagem no modelo A.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Nos dias de hoje, podemos dizer que praticamente 
todos os seres humanos já ouviram em algum momento 
falar sobre o DNA e seu papel na hereditariedade da 
maioria dos organismos. Porém, foi apenas em 1952, 
um ano antes da descrição do modelo do DNA em 
dupla hélice por Watson e Crick, que foi confirmado 
sem sombra de dúvidas que o DNA é material genético. 
No artigo em que Watson e Crick descreveram a 
molécula de DNA, eles sugeriram um modelo de como 
essa molécula deveria se replicar. Em 1958, Meselson 
e Stahl realizaram experimentos utilizando isótopos 
pesados de nitrogênio que foram incorporados às bases 
nitrogenadas para avaliar como se daria a replicação da 
molécula. A partir dos resultados, confirmaram o modelo 
sugerido por Watson e Crick, que tinha como premissa 
básica o rompimento das pontes de hidrogênio entre as 
bases nitrogenadas. 
GRIFFITHS, A. J. F. et al . Introdução à Genética . Rio de Janeiro: Guanabara Koogan, 2002. 
Considerando a estrutura da molécula de DNA e a posição 
das pontes de hidrogênio na mesma, os experimentos 
realizados por Meselson e Stahl a respeito da replicação 
dessa molécula levaram à conclusão de que`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a replicação do DNA é conservativa, isto é, a fita dupla filha é recém-sintetizada e o filamento parental é conservado.` },
      { id: 'B', type: 'text', value: `a replicação de DNA é dispersiva, isto é, as fitas filhas contêm DNA recém-sintetizado e parentais em cada uma das fitas.` },
      { id: 'C', type: 'text', value: `a replicação é semiconservativa, isto é, as fitas filhas consistem de uma fita parental e uma recém-sintetizada.` },
      { id: 'D', type: 'text', value: `a replicação do DNA é conservativa, isto é, as fitas filhas consistem de moléculas de DNA parental.` },
      { id: 'E', type: 'text', value: `a replicação é semiconservativa, isto é, as fitas filhas consistem de uma fita molde e uma fita codificadora.` },
    ],
    correct: 'C',
    explanation: `Os experimentos de Meselson e Stahl, usando isótopos pesados de nitrogênio, confirmaram o modelo de Watson e Crick: a replicação do DNA é semiconservativa. Nela, as duas fitas da dupla-hélice original se separam (com rompimento das pontes de hidrogênio) e cada uma serve de molde para a síntese de uma fita complementar. Como resultado, cada molécula-filha é formada por uma fita parental e uma fita recém-sintetizada. Essa é exatamente a descrição da alternativa C.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A eutrofização é um processo em que rios, lagos e mares
adquirem níveis altos de nutrientes, especialmente fosfatos e
nitratos, provocando posterior acúmulo de matéria orgânica em
decomposição. Os nutrientes são assimilados pelos produtores
primários e o crescimento desses é controlado pelo nutriente
limítrofe, que é o elemento menos disponível em relação à
abundância necessária à sobrevivência dos organismos vivos. O
ciclo representado na figura seguinte reflete a dinâmica dos
nutrientes em um lago. - 3 4 SPIRO, T. G.; STIGLIANI, W. M.
Química Ambiental. São Paulo: Pearson Education do Brasil,
2008 (adaptado). A análise da água de um lago que recebe a
descarga de águas residuais provenientes de lavouras adubadas
revelou as concentrações dos elementos carbono (21,2 mol/L),
nitrogênio (1,2 mol/L) e fósforo (0,2 mol/L). Nessas
condições, o nutriente limítrofe é o`,
    images: ['/enem/2011/images/enem_2011_d1_q62.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `C.` },
      { id: 'B', type: 'text', value: `N.` },
      { id: 'C', type: 'text', value: `P.` },
      { id: 'D', type: 'text', value: `CO₂.` },
      { id: 'E', type: 'text', value: `PO₄³⁻.` },
    ],
    correct: 'B',
    explanation: `Os produtores primários assimilam C, N e P na razão atômica 106:16:1; o nutriente limítrofe é o que está mais escasso em relação a essa proporção. Dividindo as concentrações disponíveis pela proporção exigida: C = 21,2/106 = 0,2; N = 1,2/16 = 0,075; P = 0,2/1 = 0,2. O menor quociente é o do nitrogênio, que portanto é o primeiro a se esgotar e limita o crescimento. Logo, o nutriente limítrofe é o N (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Para que uma substância seja colorida ela deve absorver luz na
região do visível. Quando uma amostra absorve luz visível, a
cor que percebemos é a soma das cores restantes que são
refletidas ou transmitidas pelo objeto. A Figura 1 mostra o
espectro de absorção para uma substância e é possível observar
que há um comprimento de onda em que a intensidade de absorção
é máxima. Um observador pode prever a cor dessa substância
pelo uso da roda de cores (Figura 2): o comprimento de onda
correspondente à cor do objeto é encontrado no lado oposto ao
comprimento de onda da absorção máxima. Figura 1 Figura 2
Brown, T. Química a Ciência Central . 2005 (adaptado). Qual a
cor da substância que deu origem ao espectro da Figura 1?`,
    images: ['/enem/2011/images/enem_2011_d1_q63.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Azul.` },
      { id: 'B', type: 'text', value: `Verde.` },
      { id: 'C', type: 'text', value: `Violeta.` },
      { id: 'D', type: 'text', value: `Laranja.` },
      { id: 'E', type: 'text', value: `Vermelho.` },
    ],
    correct: 'E',
    explanation: `A cor percebida de uma substância é complementar (oposta na roda de cores) à cor que ela absorve com maior intensidade. Na Figura 1, a absorção é máxima em torno de 500 nm, região correspondente ao verde/azul-esverdeado. Na roda de cores, a cor diametralmente oposta a essa faixa é o vermelho. Portanto, a substância que originou esse espectro apresenta coloração vermelha (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Disponível em: www.anvisa.gov.br. 
O mapa mostra a área de ocorrência da malária no 
mundo. Considerando-se sua distribuição na América 
do Sul, a malária pode ser classificada como`,
    images: ['/enem/2011/images/enem_2011_d1_q64.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `endemia, pois se concentra em uma área geográfica restrita desse continente.` },
      { id: 'B', type: 'text', value: `peste, já que ocorre nas regiões mais quentes do continente.` },
      { id: 'C', type: 'text', value: `epidemia, já que ocorre na maior parte do continente.` },
      { id: 'D', type: 'text', value: `surto, pois apresenta ocorrência em áreas pequenas.` },
      { id: 'E', type: 'text', value: `pandemia, pois ocorre em todo o continente.` },
    ],
    correct: 'A',
    explanation: `Na América do Sul, a malária concentra-se numa área geográfica restrita (sobretudo a região amazônica), onde ocorre de forma habitual e constante. Uma doença que se mantém restrita e permanente em determinada região é classificada como endemia. Não se trata de epidemia nem de pandemia, que implicam disseminação ampla e repentina, nem de surto, que é um aumento localizado e temporário. Assim, a malária pode ser classificada como endemia por se concentrar numa área restrita do continente (alternativa A).`,
    subject: ['bio'],
    topics: ['Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em 1999, a geneticista Emma Whitelaw desenvolveu 
um experimento no qual ratas prenhes foram submetidas 
a uma dieta rica em vitamina B12, ácido fólico e soja. 
Os filhotes dessas ratas, apesar de possuírem o gene 
para obesidade, não expressaram essa doença na fase 
adulta. A autora concluiu que a alimentação da mãe, 
durante a gestação, silenciou o gene da obesidade. Dez 
anos depois, as geneticistas Eva Jablonka e Gal Raz 
listaram 100 casos comprovados de traços adquiridos e 
transmitidos entre gerações de organismos, sustentando, 
assim, a epigenética, que estuda as mudanças na 
atividade dos genes que não envolvem alterações na 
sequência do DNA. 
A reabilitação do herege. Época , nº 610, 2010 (adaptado). 
Alguns cânceres esporádicos representam exemplos de 
alteração epigenética, pois são ocasionados por`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `aneuploidia do cromossomo sexual X.` },
      { id: 'B', type: 'text', value: `polipoidia dos cromossomos autossômicos.` },
      { id: 'C', type: 'text', value: `mutação em genes autossômicos com expressão dominante.` },
      { id: 'D', type: 'text', value: `substituição no gene da cadeia beta da hemoglobina.` },
      { id: 'E', type: 'text', value: `inativação de genes por meio de modificações nas bases nitrogenadas.` },
    ],
    correct: 'E',
    explanation: `A epigenética estuda alterações na atividade dos genes que não envolvem mudanças na sequência de bases do DNA. Modificações químicas (como a metilação) nas bases nitrogenadas podem inativar genes, alterando sua expressão sem alterar a sequência. Alguns cânceres esporádicos resultam justamente dessa inativação gênica por modificações nas bases nitrogenadas. Portanto, a alternativa correta é a E; as demais citam mutações ou alterações cromossômicas, que modificam a sequência ou o número de cromossomos.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um motor só poderá realizar trabalho se receber 
uma quantidade de energia de outro sistema. No caso, 
a energia armazenada no combustível é, em parte, 
liberada durante a combustão para que o aparelho possa 
funcionar. Quando o motor funciona, parte da energia 
convertida ou transformada na combustão não pode 
ser utilizada para a realização de trabalho. Isso significa 
dizer que há vazamento da energia em outra forma. 
CARVALHO, A. X. Z. Física Térmica . Belo Horizonte: Pax, 2009 (adaptado). 
De acordo com o texto, as transformações de energia 
que ocorrem durante o funcionamento do motor são 
decorrentes de a`,
    alternatives: [
      { id: 'A', type: 'text', value: `liberação de calor dentro do motor ser impossível.` },
      { id: 'B', type: 'text', value: `realização de trabalho pelo motor ser incontrolável.` },
      { id: 'C', type: 'text', value: `conversão integral de calor em trabalho ser impossível.` },
      { id: 'D', type: 'text', value: `transformação de energia térmica em cinética ser impossível.` },
      { id: 'E', type: 'text', value: `utilização de energia potencial do combustível ser incontrolável.` },
    ],
    correct: 'C',
    explanation: `Um motor térmico recebe energia da queima do combustível e converte parte dela em trabalho. Pela segunda lei da termodinâmica, é impossível converter integralmente calor em trabalho: parte da energia é sempre dissipada na forma de calor. Esse "vazamento" de energia descrito no texto é consequência exatamente dessa impossibilidade. Portanto, as transformações de energia no motor decorrem de a conversão integral de calor em trabalho ser impossível (alternativa C).`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O processo de interpretação de imagens capturadas 
por sensores instalados a bordo de satélites que 
imageiam determinadas faixas ou bandas do espectro 
de radiação eletromagnética (REM) baseia-se na 
interação dessa radiação com os objetos presentes 
sobre a superfície terrestre. Uma das formas de avaliar 
essa interação é por meio da quantidade de energia 
refletida pelos objetos. A relação entre a refletância de 
um dado objeto e o comprimento de onda da REM é 
conhecida como curva de comportamento espectral ou 
assinatura espectral do objeto, como mostrado na figura, 
para objetos comuns na superfície terrestre. 
D’ARCO, E. Radiometria e Comportamento Espectral de Alvos . INPE. 
Disponível em: http://www.agro.unitau.br. Acesso em: 3 maio 2009. 
De acordo com as curvas de assinatura espectral 
apresentadas na figura, para que se obtenha a melhor 
discriminação dos alvos mostrados, convém selecionar 
a banda correspondente a que comprimento de onda em 
micrômetros (µm)?`,
    images: ['/enem/2011/images/enem_2011_d1_q67.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 a 0,5.` },
      { id: 'B', type: 'text', value: `0,5 a 0,6.` },
      { id: 'C', type: 'text', value: `0,6 a 0,7.` },
      { id: 'D', type: 'text', value: `0,7 a 0,8.` },
      { id: 'E', type: 'text', value: `0,8 a 0,9.` },
    ],
    correct: 'E',
    explanation: `A melhor discriminação dos alvos ocorre na faixa de comprimento de onda em que suas curvas de reflectância estão mais afastadas entre si. No gráfico, nas faixas do visível os valores de reflectância de grama, concreto, solo, asfalto e água ficam próximos; já entre 0,8 e 0,9 µm (infravermelho) a separação é máxima — a grama atinge alta reflectância, enquanto asfalto e água permanecem baixos. Nessa banda é possível distinguir melhor cada superfície. Portanto, convém selecionar a faixa de 0,8 a 0,9 µm (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um instituto de pesquisa norte-americano divulgou recentemente
ter criado uma “célula sintética”, uma bactéria chamada de
Mycoplasma mycoides . Os pesquisadores montaram uma sequência
de nucleotídeos, que formam o único cromossomo dessa bactéria,
o qual foi introduzido em outra espécie de bactéria, a
Mycoplasma capricolum . Após a introdução, o cromossomo da M.
capricolum foi neutralizado e o cromossomo artificial da M.
mycoides começou a gerenciar a célula, produzindo suas
proteínas. GILBSON et al . Creation of a Bacterial Cell
Controlled by a Chemically synthesized Genome. Science v. 329,
2010 (adaptado). A importância dessa inovação tecnológica para
a comunidade científica se deve à`,
    alternatives: [
      { id: 'A', type: 'text', value: `possibilidade de sequenciar os genomas de bactérias para serem usados como receptoras de cromossomos artificiais .` },
      { id: 'B', type: 'text', value: `capacidade de criação, pela ciência, de novas formas de vida, utilizando substâncias como carboidratos e lipídios.` },
      { id: 'C', type: 'text', value: `possibilidade de produção em massa da bactéria Mycoplasma capricolum para sua distribuição em ambientes naturais.` },
      { id: 'D', type: 'text', value: `possibilidade de programar geneticamente microrganismos ou seres mais complexos para produzir medicamentos, vacinas e combustíveis.` },
      { id: 'E', type: 'text', value: `capacidade da bactéria Mycoplasma capricolum de expressar suas proteínas na bactéria sintética e estas serem usadas na indústria.` },
    ],
    correct: 'D',
    explanation: `A inovação consistiu em sintetizar quimicamente um cromossomo e inseri-lo em uma bactéria, que passou a ser controlada por esse genoma artificial e a produzir suas proteínas. A importância tecnológica dessa técnica é a possibilidade de programar geneticamente microrganismos (e, futuramente, seres mais complexos), projetando seus genomas para que produzam substâncias de interesse, como medicamentos, vacinas e combustíveis. Trata-se de uma poderosa ferramenta de biotecnologia. Portanto, a alternativa correta é a D.`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os sintomas mais sérios da Gripe A, causada pelo 
vírus H1N1, foram apresentados por pessoas mais 
idosas e por gestantes. O motivo aparente é a menor 
imunidade desses grupos contra o vírus. Para aumentar 
a imunidade populacional relativa ao vírus da gripe A, 
o governo brasileiro distribuiu vacinas para os grupos 
mais suscetíveis. 
A vacina contra o H1N1, assim como qualquer outra 
vacina contra agentes causadores de doenças infecto- 
contagiosas, aumenta a imunidade das pessoas porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `possui anticorpos contra o agente causador da doença.` },
      { id: 'B', type: 'text', value: `possui proteínas que eliminam o agente causador da doença.` },
      { id: 'C', type: 'text', value: `estimula a produção de glóbulos vermelhos pela medula óssea.` },
      { id: 'D', type: 'text', value: `possui linfócitos B e T que neutralizam o agente causador da doença.` },
      { id: 'E', type: 'text', value: `estimula a produção de anticorpos contra o agente causador da doença.` },
    ],
    correct: 'E',
    explanation: `As vacinas contêm antígenos (agentes atenuados/inativados ou suas partes) que estimulam o sistema imunológico a produzir anticorpos específicos e células de memória, caracterizando a imunização ativa. É o próprio organismo que fabrica os anticorpos contra o agente da doença, aumentando sua imunidade. A vacina não fornece anticorpos prontos (isso seria o soro) nem contém proteínas que eliminam o agente. Portanto, a vacina aumenta a imunidade porque estimula a produção de anticorpos contra o agente causador da doença (alternativa E).`,
    subject: ['bio'],
    topics: ['Imunologia', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um curioso estudante, empolgado com a aula de circuito
elétrico que assistiu na escola, resolve desmontar sua
lanterna. Utilizando-se da lâmpada e da pilha, retiradas do
equipamento, e de um fio com as extremidades descascadas, faz
as seguintes ligações com a intenção de acender a lâmpada: 4 1
2 3 5 6 7 GONÇALVES FILHO, A.; BAROLLI, E. Instalação Elétrica
: investigando e aprendendo. São Paulo: Scipione, 1997
(adaptado). Tendo por base os esquemas mostrados, em quais
casos a lâmpada acendeu?`,
    images: ['/enem/2011/images/enem_2011_d1_q70.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(1), (3), (6)` },
      { id: 'B', type: 'text', value: `(3), (4), (5)` },
      { id: 'C', type: 'text', value: `(1), (3), (5)` },
      { id: 'D', type: 'text', value: `(1), (3), (7)` },
      { id: 'E', type: 'text', value: `(1), (2), (5)` },
    ],
    correct: 'D',
    explanation: `A lâmpada só acende quando se forma um circuito fechado, com os dois polos da pilha conectados aos dois contatos elétricos distintos da lâmpada (a ponta da base e a lateral da rosca), sem que ocorra curto-circuito. Analisando os esquemas, somente as montagens (1), (3) e (7) estabelecem esse caminho fechado correto para a corrente percorrer o filamento. Nos demais casos há circuito aberto ou curto-circuito, e a lâmpada permanece apagada. Portanto, a lâmpada acende nos casos (1), (3) e (7) (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os biocombustíveis de primeira geração são derivados da soja,
milho e cana-de-açúcar e sua produção ocorre através da
fermentação. Biocombustíveis derivados de material celulósico
ou biocombustíveis de segunda geração - coloquialmente
chamados de “gasolina de capim” - são aqueles produzidos a
partir de resíduos de madeira (serragem, por exemplo), talos
de milho, palha de trigo ou capim de crescimento rápido e se
apresentam como uma alternativa para os problemas enfrentados
pelos de primeira geração, já que as matérias-primas são
baratas e abundantes. DALE, B. E.; HUBER, G. W. Gasolina de
capim e outros vegetais. Scientific American Brasil . Ago.
2009, nº 87 (adaptado). O texto mostra um dos pontos de vista
a respeito do uso dos biocombustíveis na atualidade, os quais`,
    alternatives: [
      { id: 'A', type: 'text', value: `são matrizes energéticas com menor carga de poluição para o ambiente e podem propiciar a geração de novos empregos, entretanto, para serem oferecidos com baixo custo, a tecnologia da degradação da celulose nos biocombustíveis de segunda geração deve ser extremamente eficiente.` },
      { id: 'B', type: 'text', value: `oferecem múltiplas dificuldades, pois a produção é de alto custo, sua implantação não gera empregos, e deve-se ter cuidado com o risco ambiental, pois eles oferecerem os mesmos riscos que o uso de combustíveis fósseis.` },
      { id: 'C', type: 'text', value: `sendo de segunda geração, são produzidos por uma tecnologia que acarreta problemas sociais, sobretudo decorrente do fato de a matéria-prima ser abundante e facilmente encontrada, o que impede a geração de novos empregos.` },
      { id: 'D', type: 'text', value: `sendo de primeira e segunda geração, são produzidos por tecnologias que devem passar por uma avaliação criteriosa quanto ao uso, pois uma enfrenta o problema da falta de espaço para plantio da matéria-prima e a outra impede a geração de novas fontes de emprego.` },
      { id: 'E', type: 'text', value: `podem acarretar sérios problemas econômicos e sociais, pois a substituição do uso de petróleo afeta negativamente toda uma cadeia produtiva na medida em que exclui diversas fontes de emprego nas refinarias, postos de gasolina e no transporte de petróleo e gasolina.` },
    ],
    correct: 'A',
    explanation: `O texto defende os biocombustíveis de segunda geração, produzidos a partir de material celulósico (resíduos de madeira, palha, capim). Eles são matrizes energéticas mais limpas (menor carga de poluição) e podem gerar novos empregos, mas, para serem oferecidos a baixo custo, exigem que a tecnologia de degradação da celulose seja extremamente eficiente. Esse é exatamente o ponto de vista expresso na alternativa A. As demais contêm afirmações incorretas sobre custos, empregos ou riscos equivalentes aos dos combustíveis fósseis.`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `A bile é produzida pelo fígado, armazenada na 
vesícula biliar e tem papel fundamental na digestão de 
lipídeos. Os sais biliares são esteroides sintetizados 
no fígado a partir do colesterol, e sua rota de síntese 
envolve várias etapas. Partindo do ácido cólico 
representado na figura, ocorre a formação dos ácidos 
glicocólico e taurocólico; o prefixo glico- significa a 
presença de um resíduo do aminoácido glicina e o 
prefixo tauro-, do aminoácido taurina. 
 
ácido cólico 
UCKO, D. A. Química para as Ciências da Saúde: uma Introdução à Química Geral, 
Orgânica e Biológica. São Paulo: Manole,1992 (adaptado). 
A combinação entre o ácido cólico e a glicina ou taurina 
origina a função amida, formada pela reação entre o 
grupo amina desses aminoácidos e o grupo`,
    images: ['/enem/2011/images/enem_2011_d1_q72.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `carboxila do ácido cólico.` },
      { id: 'B', type: 'text', value: `aldeído do ácido cólico.` },
      { id: 'C', type: 'text', value: `hidroxila do ácido cólico.` },
      { id: 'D', type: 'text', value: `cetona do ácido cólico.` },
      { id: 'E', type: 'text', value: `éster do ácido cólico.` },
    ],
    correct: 'A',
    explanation: `A ligação (função) amida forma-se pela reação entre um grupo amina (-NH₂) e um grupo carboxila (-COOH), com eliminação de água. No caso, o grupo amina da glicina ou da taurina reage com o grupo carboxila (-COOH) do ácido cólico, representado na extremidade da cadeia lateral (…CH₂CH₂COOH). Dessa condensação resultam as funções amida dos ácidos glicocólico e taurocólico. Portanto, a reação ocorre com o grupo carboxila do ácido cólico (alternativa A).`,
    subject: ['qui'],
    topics: ['Funções orgânicas e nomenclatura', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Em um experimento realizado para determinar a 
densidade da água de um lago, foram utilizados alguns 
materiais conforme ilustrado: um dinamômetro D com 
graduação de 0 N a 50 N e um cubo maciço e homogêneo 
de 10 cm de aresta e 3 kg de massa. Inicialmente, foi 
conferida a calibração do dinamômetro, constatando-se a 
leitura de 30 N quando o cubo era preso ao dinamômetro 
e suspenso no ar. Ao mergulhar o cubo na água do lago, 
até que metade do seu volume ficasse submersa, foi 
registrada a leitura de 24 N no dinamômetro. 
Considerando que a aceleração da gravidade local é 
de 10 m/s², a densidade da água do lago, em g/cm³, é`,
    images: ['/enem/2011/images/enem_2011_d1_q73.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,6.` },
      { id: 'B', type: 'text', value: `1,2.` },
      { id: 'C', type: 'text', value: `1,5.` },
      { id: 'D', type: 'text', value: `2,4.` },
      { id: 'E', type: 'text', value: `4,8.` },
    ],
    correct: 'B',
    explanation: `O cubo tem volume V = (10 cm)³ = 1 000 cm³ = 1×10⁻³ m³. Com metade submersa, o volume deslocado é 500 cm³ = 5×10⁻⁴ m³. O empuxo é a diferença entre o peso aparente no ar e na água: E = 30 − 24 = 6 N. Como E = ρ·V_submerso·g, tem-se ρ = E/(V_submerso·g) = 6/(5×10⁻⁴ × 10) = 1 200 kg/m³ = 1,2 g/cm³ (alternativa B).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Uma equipe de cientistas lançará uma expedição ao 
Titanic para criar um detalhado mapa 3D que “vai tirar, 
virtualmente, o Titanic do fundo do mar para o público”. 
A expedição ao local, a 4 quilômetros de profundidade 
no Oceano Atlântico, está sendo apresentada como 
a mais sofisticada expedição científica ao Titanic. 
Ela utilizará tecnologias de imagem e sonar que 
nunca tinham sido aplicadas ao navio, para obter 
o mais completo inventário de seu conteúdo. Esta 
complementação é necessária em razão das condições 
do navio, naufragado há um século. 
O Estado de São Paulo . Disponível em: http://www.estadao.com.br. 
Acesso em: 27 jul. 2010 (adaptado). 
No problema apresentado para gerar imagens através 
de camadas de sedimentos depositados no navio, o 
sonar é mais adequado, pois a`,
    alternatives: [
      { id: 'A', type: 'text', value: `propagação da luz na água ocorre a uma velocidade maior que a do som neste meio.` },
      { id: 'B', type: 'text', value: `absorção da luz ao longo de uma camada de água é facilitada enquanto a absorção do som não.` },
      { id: 'C', type: 'text', value: `refração da luz a uma grande profundidade acontece com uma intensidade menor que a do som.` },
      { id: 'D', type: 'text', value: `atenuação da luz nos materiais analisados é distinta da atenuação de som nestes mesmos materiais.` },
      { id: 'E', type: 'text', value: `reflexão da luz nas camadas de sedimentos é menos intensa do que a reflexão do som neste material.` },
    ],
    correct: 'D',
    explanation: `Para gerar imagens através das camadas de sedimentos a 4 km de profundidade, o sonar (ondas sonoras) é mais adequado que a luz. Isso ocorre porque a luz é fortemente atenuada (absorvida e espalhada) pela água e pelos sedimentos, enquanto o som se propaga e penetra nesses meios com atenuação muito menor. Ou seja, a atenuação da luz nesses materiais é distinta (bem maior) da atenuação do som nos mesmos materiais. Por isso o sonar é mais eficaz, conforme a alternativa D.`,
    subject: ['fis'],
    topics: ['Ondulatória e acústica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os refrigerantes têm-se tornado cada vez mais o alvo de
políticas públicas de saúde. Os de cola apresentam ácido
fosfórico, substância prejudicial à fixação de cálcio, o
mineral que é o principal componente da matriz dos dentes. A
cárie é um processo dinâmico de desequilíbrio do processo de
desmineralização dentária, perda de minerais em razão da
acidez. Sabe-se que o principal componente do esmalte do dente
é um sal denominado hidroxiapatita. O refrigerante, pela
presença da sacarose, faz decrescer o pH do biofilme (placa
bacteriana), provocando a desmineralização do esmalte
dentário. Os mecanismos de defesa salivar levam de 20 a 30
minutos para normalizar o nível do pH, remineralizando o
dente. A equação química seguinte representa esse processo:
GROISMAN, S. Impacto do refrigerante nos dentes é avaliado sem
tirá-lo da dieta. Disponível em: http://www.isaude.net. Acesso
em: 1 maio 2010 (adaptado). Considerando que uma pessoa
consuma refrigerantes diariamente, poderá ocorrer um processo
de desmineralização dentária, devido ao aumento da
concentração de`,
    images: ['/enem/2011/images/enem_2011_d1_q75.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `OH⁻, que reage com os íons Ca²⁺, deslocando o equilíbrio para a direita.` },
      { id: 'B', type: 'text', value: `H⁺, que reage com as hidroxilas OH⁻, deslocando o equilíbrio para a direita.` },
      { id: 'C', type: 'text', value: `OH⁻, que reage com os íons Ca²⁺, deslocando o equilíbrio para a esquerda.` },
      { id: 'D', type: 'text', value: `H⁺, que reage com as hidroxilas OH⁻, deslocando o equilíbrio para a esquerda.` },
      { id: 'E', type: 'text', value: `Ca²⁺, que reage com as hidroxilas OH⁻, deslocando o equilíbrio para a esquerda.` },
    ],
    correct: 'B',
    explanation: `A equação de equilíbrio é Ca₅(PO₄)₃OH(s) ⇌ 5 Ca²⁺ + 3 PO₄³⁻ + OH⁻. A sacarose do refrigerante, metabolizada pelas bactérias do biofilme, produz ácidos que aumentam a concentração de H⁺ (queda do pH). Esses íons H⁺ reagem com as hidroxilas (OH⁻) do equilíbrio, consumindo-as; pelo princípio de Le Chatelier, o equilíbrio desloca-se para a direita, dissolvendo a hidroxiapatita (desmineralização). Logo, o aumento da concentração de H⁺, que reage com as hidroxilas OH⁻, desloca o equilíbrio para a direita (alternativa B).`,
    subject: ['qui'],
    topics: ['Equilíbrio químico, pH e solubilidade', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Diferente do que o senso comum acredita, as 
lagartas de borboletas não possuem voracidade 
generalizada. Um estudo mostrou que as borboletas 
de asas transparentes da família Ithomiinae , comuns 
na Floresta Amazônica e na Mata Atlântica, consomem, 
sobretudo, plantas da família Solanaceae , a mesma 
do tomate. Contudo, os ancestrais dessas borboletas 
consumiam espécies vegetais da família Apocinaceae , 
mas a quantidade dessas plantas parece não ter sido 
suficiente para garantir o suprimento alimentar dessas 
borboletas. Dessa forma, as solanáceas tornaram-se 
uma opção de alimento, pois são abundantes na Mata 
Atlântica e na Floresta Amazônica. 
Cores ao vento. Genes e fósseis revelam origem e diversidade de borboletas sul-americanas. 
Revista Pesquisa FAPESP . N° 170, 2010 (adaptado). 
Nesse texto, a ideia do senso comum é confrontada 
com os conhecimentos científicos, ao se entender 
que as larvas das borboletas Ithomiinae encontradas 
atualmente na Mata Atlântica e na Floresta Amazônica, 
apresentam`,
    alternatives: [
      { id: 'A', type: 'text', value: `facilidade em digerir todas as plantas desses locais.` },
      { id: 'B', type: 'text', value: `interação com as plantas hospedeiras da família Apocinaceae .` },
      { id: 'C', type: 'text', value: `adaptação para se alimentar de todas as plantas desses locais.` },
      { id: 'D', type: 'text', value: `voracidade indiscriminada por todas as plantas existentes nesses locais.` },
      { id: 'E', type: 'text', value: `especificidade pelas plantas da família Solanaceae existentes nesses locais.` },
    ],
    correct: 'E',
    explanation: `O texto mostra que, embora os ancestrais das borboletas Ithomiinae consumissem plantas da família Apocynaceae, a quantidade dessas plantas não bastava para alimentá-las. As solanáceas, abundantes na Mata Atlântica e na Floresta Amazônica, tornaram-se a principal fonte de alimento. Assim, as larvas atuais apresentam especificidade alimentar pelas plantas da família Solanaceae existentes nesses locais (alternativa E). Elas não digerem todas as plantas nem têm voracidade indiscriminada, o que elimina as demais opções.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Para medir o tempo de reação de uma pessoa, pode-se realizar a
seguinte experiência: I. Mantenha uma régua (com cerca de 30
cm) suspensa verticalmente, segurando-a pela extremidade
superior, de modo que o zero da régua esteja situado na
extremidade inferior. II. A pessoa deve colocar os dedos de
sua mão, em forma de pinça, próximos do zero da régua, sem
tocá-la. III. Sem aviso prévio, a pessoa que estiver segurando
a régua deve soltá-la. A outra pessoa deve procurar segurá-la
o mais rapidamente possível e observar a posição onde
conseguiu segurar a régua, isto é, a distância que ela
percorre durante a queda. O quadro seguinte mostra a posição
em que três pessoas conseguiram segurar a régua e os
respectivos tempos de reação.

Disponível em: http://br.geocities.com. Acesso em: 1 fev. 2009.
A distância percorrida pela régua aumenta mais
rapidamente que o tempo de reação porque a`,
    images: ['/enem/2011/images/enem_2011_d1_q77.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `energia mecânica da régua aumenta, o que a faz cair mais rápido.` },
      { id: 'B', type: 'text', value: `resistência do ar aumenta, o que faz a régua cair com menor velocidade.` },
      { id: 'C', type: 'text', value: `aceleração de queda da régua varia, o que provoca um movimento acelerado.` },
      { id: 'D', type: 'text', value: `força peso da régua tem valor constante, o que gera um movimento acelerado.` },
      { id: 'E', type: 'text', value: `velocidade da régua é constante, o que provoca uma passagem linear de tempo.` },
    ],
    correct: 'D',
    explanation: `A régua cai em queda livre sob a ação da força peso, que é constante; uma força constante produz aceleração constante, ou seja, movimento uniformemente acelerado. Nesse movimento, a distância percorrida cresce com o quadrado do tempo (d = ½·g·t²), enquanto o tempo cresce linearmente. Por isso a distância aumenta mais rapidamente que o tempo de reação. Portanto, a força peso da régua tem valor constante, gerando um movimento acelerado (alternativa D).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um tipo de vaso sanitário que vem substituindo as 
válvulas de descarga está esquematizado na figura. Ao 
acionar a alavanca, toda a água do tanque é escoada e 
aumenta o nível no vaso, até cobrir o sifão. De acordo 
com o Teorema de Stevin, quanto maior a profundidade, 
maior a pressão. Assim, a água desce levando os rejeitos 
até o sistema de esgoto. A válvula da caixa de descarga 
se fecha e ocorre o seu enchimento. Em relação às 
válvulas de descarga, esse tipo de sistema proporciona 
maior economia de água. 
Faça você mesmo. Disponível em: http://www.facavocemesmo.net. Acesso em: 22 jul. 2010. 
A característica de funcionamento que garante essa 
economia é devida`,
    images: ['/enem/2011/images/enem_2011_d1_q78.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à altura do sifão de água.` },
      { id: 'B', type: 'text', value: `ao volume do tanque de água.` },
      { id: 'C', type: 'text', value: `à altura do nível de água no vaso.` },
      { id: 'D', type: 'text', value: `ao diâmetro do distribuidor de água.` },
      { id: 'E', type: 'text', value: `à eficiência da válvula de enchimento do tanque.` },
    ],
    correct: 'B',
    explanation: `Esse tipo de vaso usa uma caixa (tanque) com volume de água determinado, que é totalmente escoado a cada acionamento e depois reabastecido. Diferentemente das válvulas de descarga comuns, que liberam água enquanto são acionadas, aqui o gasto fica limitado ao volume do tanque. É essa limitação do volume de água utilizado por descarga que garante a economia. Portanto, a característica responsável pela economia está ligada ao volume do tanque de água (alternativa B).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Moradores sobreviventes da tragédia que destruiu 
aproximadamente 60 casas no Morro do Bumba, na 
Zona Norte de Niterói (RJ), ainda defendem a hipótese 
de o deslizamento ter sido causado por uma explosão 
provocada por gás metano, visto que esse local foi um 
lixão entre os anos 1960 e 1980. 
Jornal Web . Disponível em: http://www.ojornalweb.com. Acesso em: 12 abr. 2010 (adaptado). 
O gás mencionado no texto é produzido`,
    alternatives: [
      { id: 'A', type: 'text', value: `como subproduto da respiração aeróbia bacteriana.` },
      { id: 'B', type: 'text', value: `pela degradação anaeróbia de matéria orgânica por bactérias.` },
      { id: 'C', type: 'text', value: `como produto da fotossíntese de organismos pluricelulares autotróficos.` },
      { id: 'D', type: 'text', value: `pela transformação química do gás carbônico em condições anaeróbias.` },
      { id: 'E', type: 'text', value: `pela conversão, por oxidação química, do gás carbônico sob condições aeróbias.` },
    ],
    correct: 'B',
    explanation: `Em lixões, a matéria orgânica fica coberta e compactada, criando um ambiente sem oxigênio (anaeróbico). Nessas condições, bactérias realizam a decomposição anaeróbica da matéria orgânica, produzindo gás metano (CH₄), que é inflamável e explosivo. Foi esse gás, acumulado no antigo lixão, o apontado na hipótese da explosão. Portanto, o metano é produzido pela degradação anaeróbia de matéria orgânica por bactérias (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Segundo dados do Balanço Energético Nacional 
de 2008, do Ministério das Minas e Energia, a matriz 
energética brasileira é composta por hidrelétrica (80%), 
termelétrica (19,9%) e eólica (0,1%). Nas termelétricas, 
esse percentual é dividido conforme o combustível 
usado, sendo: gás natural (6,6%), biomassa (5,3%), 
derivados de petróleo (3,3%), energia nuclear (3,1%) e 
carvão mineral (1,6%). Com a geração de eletricidade 
da biomassa, pode-se considerar que ocorre uma 
compensação do carbono liberado na queima do material 
vegetal pela absorção desse elemento no crescimento 
das plantas. Entretanto, estudos indicam que as 
emissões de metano (CH₄) das hidrelétricas podem ser 
comparáveis às emissões de CO₂ das termelétricas. 
MORET, A. S.; FERREIRA, I. A. As hidrelétricas do Rio Madeira e os impactos socioambientais 
da eletrificação no Brasil. Revista Ciência Hoje . V. 45, n° 265, 2009 (adaptado). 
No Brasil, em termos do impacto das fontes de energia 
no crescimento do efeito estufa, quanto à emissão 
de gases, as hidrelétricas seriam consideradas como 
uma fonte`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `limpa de energia, contribuindo para minimizar os efeitos deste fenômeno.` },
      { id: 'B', type: 'text', value: `eficaz de energia, tomando-se o percentual de oferta e os benefícios verificados.` },
      { id: 'C', type: 'text', value: `limpa de energia, não afetando ou alterando os níveis dos gases do efeito estufa.` },
      { id: 'D', type: 'text', value: `poluidora, colaborando com níveis altos de gases de efeito estufa em função de seu potencial de oferta.` },
      { id: 'E', type: 'text', value: `alternativa, tomando-se por referência a grande emissão de gases de efeito estufa das demais fontes geradoras.` },
    ],
    correct: 'D',
    explanation: `Estudos indicam que as emissões de metano (CH₄) dos reservatórios das hidrelétricas podem ser comparáveis às de CO₂ das termelétricas; tanto o metano quanto o CO₂ são gases de efeito estufa. Logo, apesar de frequentemente consideradas "limpas", as hidrelétricas também contribuem para o aquecimento global. Dado o seu grande potencial de oferta (80% da matriz brasileira), seriam consideradas uma fonte poluidora, colaborando com níveis altos de gases de efeito estufa (alternativa D).`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O peróxido de hidrogênio é comumente utilizado 
como antisséptico e alvejante. Também pode ser 
empregado em trabalhos de restauração de quadros 
enegrecidos e no clareamento de dentes. Na presença 
de soluções ácidas de oxidantes, como o permanganato 
de potássio, este óxido decompõe-se, conforme a 
equação a seguir: 
5 H₂O₂ (aq) + 2 KMnO₄ (aq) + 3 H₂SO₄ (aq) → 5 O₂ (g) + 2 MnSO₄ (aq) + K₂SO₄ (aq) + 8 H₂O (l) 
ROCHA-FILHO, R. C. R.; SILVA, R. R. Introdução aos Cálculos da Química . 
São Paulo: McGraw-Hill, 1992. 
De acordo com a estequiometria da reação descrita, a 
quantidade de permanganato de potássio necessária 
para reagir completamente com 20,0 mL de uma solução 
0,1 mol/L de peróxido de hidrogênio é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,0×10⁰ mol.` },
      { id: 'B', type: 'text', value: `2,0×10⁻³ mol.` },
      { id: 'C', type: 'text', value: `8,0×10⁻¹ mol.` },
      { id: 'D', type: 'text', value: `8,0×10⁻⁴ mol.` },
      { id: 'E', type: 'text', value: `5,0×10⁻³ mol.` },
    ],
    correct: 'D',
    explanation: `Pela estequiometria da reação, 5 mol de H₂O₂ reagem com 2 mol de KMnO₄. O número de mols de H₂O₂ é n = C·V = 0,1 mol/L × 0,020 L = 2×10⁻³ mol. A quantidade de permanganato necessária é n(KMnO₄) = (2/5)·n(H₂O₂) = (2/5)×2×10⁻³ = 8×10⁻⁴ mol. Portanto, são necessários 8,0×10⁻⁴ mol de permanganato de potássio (alternativa D).`,
    subject: ['qui'],
    topics: ['Estequiometria e cálculos químicos', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os vaga-lumes machos e fêmeas emitem sinais 
luminosos para se atraírem para o acasalamento. O 
macho reconhece a fêmea de sua espécie e, atraído 
por ela, vai ao seu encontro. Porém, existe um tipo de 
vaga-lume, o Photuris , cuja fêmea engana e atrai os 
machos de outro tipo, o Photinus , fingindo ser desse 
gênero. Quando o macho Photinus se aproxima da 
fêmea Photuris , muito maior que ele, é atacado e 
devorado por ela. 
BERTOLDI, O. G.; VASCONCELLOS, J. R. Ciência & sociedade : a aventura da vida, 
a aventura da tecnologia. São Paulo: Scipione, 2000 (adaptado). 
a relação descrita no texto, entre a fêmea do gênero 
Photuris e o macho do gênero Photinus , é um 
exemplo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `comensalismo.` },
      { id: 'B', type: 'text', value: `inquilinismo.` },
      { id: 'C', type: 'text', value: `cooperação.` },
      { id: 'D', type: 'text', value: `predatismo.` },
      { id: 'E', type: 'text', value: `mutualismo.` },
    ],
    correct: 'D',
    explanation: `A fêmea de Photuris imita os sinais luminosos da fêmea de Photinus para atrair os machos dessa outra espécie. Ao se aproximarem, os machos de Photinus são atacados e devorados por ela. Essa relação, em que um organismo de uma espécie mata e se alimenta de outro de espécie diferente, é a predação (predatismo). Portanto, trata-se de um exemplo de predatismo (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `O etanol é considerado um biocombustível promissor, 
pois, sob o ponto de vista do balanço de carbono, 
possui uma taxa de emissão praticamente igual a zero. 
Entretanto, esse não é o único ciclo biogeoquímico 
associado à produção de etanol. O plantio da cana- 
de-açúcar, matéria-prima para a produção de etanol, 
envolve a adição de macronutrientes como enxofre, 
nitrogênio, fósforo e potássio, principais elementos 
envolvidos no crescimento de um vegetal. 
 Revista Química Nova na Escola . n o 28, 2008. 
O nitrogênio incorporado ao solo, como consequência 
da atividade descrita anteriormente, é transformado em 
nitrogênio ativo e afetará o meio ambiente, causando`,
    alternatives: [
      { id: 'A', type: 'text', value: `o acúmulo de sais insolúveis, desencadeando um processo de salinificação do solo.` },
      { id: 'B', type: 'text', value: `a eliminação de microrganismos existentes no solo responsáveis pelo processo de desnitrificação.` },
      { id: 'C', type: 'text', value: `a contaminação de rios e lagos devido à alta solubilidade de íons como NO₃⁻ e NH₄⁺ em água.` },
      { id: 'D', type: 'text', value: `a diminuição do pH do solo pela presença de NH₃, que reage com a água, formando o NH₄OH (aq).` },
      { id: 'E', type: 'text', value: `a diminuição da oxigenação do solo, uma vez que o nitrogênio ativo forma espécies químicas do tipo NO₂, NO₃⁻, N₂O.` },
    ],
    correct: 'C',
    explanation: `A atividade agrícola adiciona ao solo nutrientes nitrogenados, que são convertidos em formas "ativas" como nitrato (NO₃⁻) e amônio (NH₄⁺). Esses íons são muito solúveis em água, de modo que são facilmente lixiviados e carregados para rios e lagos. O excesso desses nutrientes nos corpos d'água provoca contaminação e eutrofização. Logo, o nitrogênio ativo afeta o ambiente pela contaminação de rios e lagos devido à alta solubilidade de íons como NO₃⁻ e NH₄⁺ em água (alternativa C).`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Ao diminuir o tamanho de um orifício atravessado por um feixe
de luz, passa menos luz por intervalo de tempo, e próximo da
situação de completo fechamento do orifício, verifica-se que a
luz apresenta um comportamento como o ilustrado nas figuras.
Sabe-se que o som, dentro de suas particularidades, também
pode se comportar dessa forma. Buraco Lâmpada Raios de luz
FIOLHAIS, C. Física divertida . Brasília: UnB, 2000
(adaptado). Em qual das situações a seguir está representado o
fenômeno descrito no texto?`,
    images: ['/enem/2011/images/enem_2011_d1_q84.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Ao se esconder atrás de um muro, um menino ouve a conversa de seus colegas.` },
      { id: 'B', type: 'text', value: `Ao gritar diante de um desfiladeiro, uma pessoa ouve a repetição do seu próprio grito.` },
      { id: 'C', type: 'text', value: `Ao encostar o ouvido no chão, um homem percebe o som de uma locomotiva antes de ouvi-lo pelo ar.` },
      { id: 'D', type: 'text', value: `Ao ouvir uma ambulância se aproximando, uma pessoa percebe o som mais agudo do que quando aquela se afasta.` },
      { id: 'E', type: 'text', value: `Ao emitir uma nota musical muito aguda, uma cantora de ópera faz com que uma taça de cristal se despedace.` },
    ],
    correct: 'A',
    explanation: `O texto descreve a difração: ao atravessar um orifício muito pequeno (da ordem do comprimento de onda), a onda espalha-se e contorna o obstáculo, como mostram as figuras com a luz. O som também sofre difração, contornando obstáculos. A situação em que um menino, escondido atrás de um muro, ouve a conversa dos colegas ilustra o som contornando o obstáculo (difração). Portanto, a alternativa correta é a A; as demais descrevem reflexão (eco), propagação em diferentes meios, efeito Doppler e ressonância.`,
    subject: ['fis'],
    topics: ['Ondulatória e acústica', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Um dos processos usados no tratamento do lixo é a 
incineração, que apresenta vantagens e desvantagens. 
Em São Paulo, por exemplo, o lixo é queimado a altas 
temperaturas e parte da energia liberada é transformada 
em energia elétrica. No entanto, a incineração provoca a 
emissão de poluentes na atmosfera. 
Uma forma de minimizar a desvantagem da incineração, 
destacada no texto, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumentar o volume do lixo incinerado para aumentar a produção de energia elétrica.` },
      { id: 'B', type: 'text', value: `fomentar o uso de filtros nas chaminés dos incineradores para diminuir a poluição do ar.` },
      { id: 'C', type: 'text', value: `aumentar o volume do lixo para baratear os custos operacionais relacionados ao processo.` },
      { id: 'D', type: 'text', value: `fomentar a coleta seletiva de lixo nas cidades para aumentar o volume de lixo incinerado.` },
      { id: 'E', type: 'text', value: `diminuir a temperatura de incineração do lixo para produzir maior quantidade de energia elétrica.` },
    ],
    correct: 'B',
    explanation: `A incineração reduz o volume do lixo e gera energia, mas tem a desvantagem de emitir poluentes na atmosfera. Para minimizar essa desvantagem sem abrir mão da incineração, deve-se tratar os gases antes de liberá-los, instalando filtros nas chaminés dos incineradores. Assim, reduz-se a quantidade de poluentes lançados no ar. Portanto, a medida adequada é fomentar o uso de filtros nas chaminés (alternativa B); aumentar o volume incinerado só agravaria a emissão.`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Uma das modalidades presentes nas olimpíadas é o 
salto com vara. As etapas de um dos saltos de um atleta 
estão representadas na figura: 
Desprezando-se as forças dissipativas (resistência do ar 
e atrito), para que o salto atinja a maior altura possível, 
ou seja, o máximo de energia seja conservada, é 
necessário que`,
    images: ['/enem/2011/images/enem_2011_d1_q86.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a energia cinética, representada na etapa I, seja totalmente convertida em energia potencial elástica representada na etapa IV.` },
      { id: 'B', type: 'text', value: `a energia cinética, representada na etapa II, seja totalmente convertida em energia potencial gravitacional, representada na etapa IV.` },
      { id: 'C', type: 'text', value: `a energia cinética, representada na etapa I, seja totalmente convertida em energia potencial gravitacional, representada na etapa III.` },
      { id: 'D', type: 'text', value: `a energia potencial gravitacional, representada na etapa II, seja totalmente convertida em energia potencial elástica, representada na etapa IV.` },
      { id: 'E', type: 'text', value: `a energia potencial gravitacional, representada na etapa I, seja totalmente convertida em energia potencial elástica, representada na etapa III.` },
    ],
    correct: 'C',
    explanation: `No salto com vara, o atleta corre e adquire energia cinética (etapa I) e, ao final, atinge sua altura máxima, acumulando energia potencial gravitacional (etapa III). Desprezando as forças dissipativas, a energia mecânica se conserva, e a altura será máxima se toda a energia cinética da corrida for convertida em energia potencial gravitacional no ponto mais alto. Isso corresponde à alternativa C: a energia cinética da etapa I totalmente convertida em energia potencial gravitacional na etapa III.`,
    subject: ['fis'],
    topics: ['Trabalho, energia mecânica e potência', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Os Bichinhos e O Homem 
Arca de Noé 
Toquinho & Vinicius de Moraes 
Nossa irmã, a mosca 
É feia e tosca 
Enquanto que o mosquito 
É mais bonito 
Nosso irmão besouro 
Que é feito de couro 
Mal sabe voar 
Nossa irmã, a barata 
Bichinha mais chata 
É prima da borboleta 
Que é uma careta 
Nosso irmão, o grilo 
Que vive dando estrilo 
Só pra chatear 
MORAES, V. A arca de Noé: poemas infantis. São Paulo: Companhia das Letrinhas, 1991. 
O poema acima sugere a existência de relações de 
afinidade ente os animais citados e nós, seres humanos. 
Respeitando a liberdade poética dos autores, a unidade 
taxonômica que expressa a afinidade existente entre 
nós e estes animais é`,
    alternatives: [
      { id: 'A', type: 'text', value: `o filo.` },
      { id: 'B', type: 'text', value: `o reino.` },
      { id: 'C', type: 'text', value: `a classe.` },
      { id: 'D', type: 'text', value: `a família.` },
      { id: 'E', type: 'text', value: `a espécie.` },
    ],
    correct: 'B',
    explanation: `Os animais citados no poema — mosca, mosquito, besouro, barata, borboleta e grilo — são todos insetos (artrópodes), enquanto o ser humano é um cordado (mamífero). O táxon mais específico que reúne, ao mesmo tempo, esses insetos e o ser humano é o reino (Animalia), já que pertencem a filos e classes diferentes. Categorias mais restritas, como filo, classe, família ou espécie, não abrangem conjuntamente todos eles. Portanto, a unidade taxonômica que expressa essa afinidade é o reino (alternativa B).`,
    subject: ['bio'],
    topics: ['Classificação dos seres vivos', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Certas espécies de algas são capazes de absorver 
rapidamente compostos inorgânicos presentes na 
água, acumulando-os durante seu crescimento. Essa 
capacidade fez com que se pensasse em usá-las 
como biofiltros para a limpeza de ambientes aquáticos 
contaminados, removendo, por exemplo, nitrogênio 
e fósforo de resíduos orgânicos e metais pesados 
provenientes de rejeitos industriais lançados nas 
águas. Na técnica do cultivo integrado, animais e algas 
crescem de forma associada, promovendo um maior 
equilíbrio ecológico. 
SORIANO, E. M. Filtros vivos para limpar a água. 
Revista Ciência Hoje . V. 37, n° 219, 2005 (adaptado). 
A utilização da técnica do cultivo integrado de animais 
e algas representa uma proposta favorável a um 
ecossistema mais equilibrado porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `os animais eliminam metais pesados, que são usados pelas algas para a síntese de biomassa.` },
      { id: 'B', type: 'text', value: `os animais fornecem excretas orgânicos nitrogenados, que são transformados em gás carbônico pelas algas.` },
      { id: 'C', type: 'text', value: `as algas usam os resíduos nitrogenados liberados pelos animais e eliminam gás carbônico na fotossíntese, usado na respiração aeróbica.` },
      { id: 'D', type: 'text', value: `as algas usam os resíduos nitrogenados provenientes do metabolismo dos animais e, durante a síntese de compostos orgânicos, liberam oxigênio para o ambiente.` },
      { id: 'E', type: 'text', value: `as algas aproveitam os resíduos do metabolismo dos animais e, durante a quimiossíntese de compostos orgânicos, liberam oxigênio para o ambiente.` },
    ],
    correct: 'D',
    explanation: `No cultivo integrado, os animais liberam resíduos nitrogenados (excretas) que servem de nutrientes para as algas. As algas, ao realizarem a fotossíntese (síntese de compostos orgânicos), consomem CO₂ e liberam oxigênio para o ambiente, o qual é aproveitado pelos animais na respiração. Esse aproveitamento mútuo de resíduos e gases promove maior equilíbrio ecológico. Portanto, as algas usam os resíduos nitrogenados do metabolismo dos animais e, durante a síntese de compostos orgânicos, liberam oxigênio (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `Durante as estações chuvosas, aumentam no 
Brasil as campanhas de prevenção à dengue, que têm 
como objetivo a redução da proliferação do mosquito 
Aedes aegypti, transmissor do vírus da dengue. 
Que proposta preventiva poderia ser efetivada para 
diminuir a reprodução desse mosquito?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Colocação de telas nas portas e janelas, pois o mosquito necessita de ambientes cobertos e fechados para a sua reprodução.` },
      { id: 'B', type: 'text', value: `Substituição das casas de barro por casas de alvenaria, haja vista que o mosquito se reproduz na parede das casas de barro.` },
      { id: 'C', type: 'text', value: `Remoção dos recipientes que possam acumular água, porque as larvas do mosquito se desenvolvem nesse meio.` },
      { id: 'D', type: 'text', value: `Higienização adequada de alimentos, visto que as larvas do mosquito se desenvolvem nesse tipo de substrato.` },
      { id: 'E', type: 'text', value: `Colocação de filtros de água nas casas, visto que a reprodução do mosquito acontece em águas contaminadas.` },
    ],
    correct: 'C',
    explanation: `O mosquito Aedes aegypti deposita seus ovos em recipientes com água parada, onde as larvas se desenvolvem. A medida preventiva mais eficaz para diminuir sua reprodução é eliminar os criadouros, ou seja, remover os recipientes que possam acumular água (pneus, vasos, caixas-d'água destampadas, etc.). Sem água parada disponível, as larvas não se desenvolvem e a proliferação do mosquito diminui. Portanto, a proposta correta é a remoção dos recipientes que acumulam água (alternativa C).`,
    subject: ['bio'],
    topics: ['Microbiologia e doenças', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2011,
    day: 1,
    text: `De acordo com o relatório “A grande sombra 
da pecuária” ( Livestock’s Long Shadow ), feito pela 
Organização das Nações Unidas para a Agricultura e a 
Alimentação, o gado é responsável por cerca de 18% 
do aquecimento global, uma contribuição maior que a 
do setor de transportes. 
Disponível em: www.conpet.gov.br. Acesso em: 22 jun. 2010. 
A criação de gado em larga escala contribui para o 
aquecimento global por meio da emissão de`,
    images: ['/enem/2011/images/enem_2011_d1_q90.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `metano durante o processo de digestão.` },
      { id: 'B', type: 'text', value: `óxido nitroso durante o processo de ruminação.` },
      { id: 'C', type: 'text', value: `clorofluorcarbono durante o transporte de carne.` },
      { id: 'D', type: 'text', value: `óxido nitroso durante o processo respiratório.` },
      { id: 'E', type: 'text', value: `dióxido de enxofre durante o consumo de pastagens.` },
    ],
    correct: 'A',
    explanation: `A pecuária em larga escala contribui para o aquecimento global sobretudo pela emissão de metano (CH₄), gás de efeito estufa muito mais potente que o CO₂. Esse metano é produzido na fermentação entérica, isto é, durante o processo de digestão dos ruminantes (como o gado), realizada por microrganismos em seu sistema digestório. Por isso, a criação de gado contribui para o aquecimento global por meio da emissão de metano durante o processo de digestão (alternativa A).`,
    subject: ['qui'],
    topics: ['Química ambiental', 'Questões aleatórias'],
  },
];

export default ENEM_2011_D1;
