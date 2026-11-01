import { QuizQuestion } from '@/lib/quiz-questions';

const fuvest_2019_f1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A figura exemplifica o comportamento de povos indígenas que
viveram no Brasil há 1.000 anos. Eles construíam suas casas
escavadas na terra, faziam fogueiras e manuseavam objetos.

Escavações revelam hábitos de antigos povos que ocuparam o Sul do país.
Folha de S.Paulo. 20/03/2016. Adaptado.

Com base nos dados apresentados e em seus conhecimentos,
assinale a alternativa correta quanto à época geológica desses
sítios arqueológicos, quanto ao elemento químico analisado
coerente com as práticas humanas exemplificadas na figura e
quanto ao método de datação.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q01_1.jpg","width":603,"height":220},{"src":"/fuvest/2019/images/fuvest_2019_f1q01_2.jpg","width":603,"height":219}],
    alternatives: [
      { id: 'A', type: 'text', value: `Holoceno, silício e datação por quantificação de isótopos
estáveis.` },
      { id: 'B', type: 'text', value: `Jurássico, carbono e datação por decaimento radioativo de
isótopos.` },
      { id: 'C', type: 'text', value: `Holoceno, carbono e datação por decaimento radioativo de
isótopos.` },
      { id: 'D', type: 'text', value: `Jurássico, silício e datação por decaimento radioativo de
isótopos.` },
      { id: 'E', type: 'text', value: `Jurássico, carbono e datação por quantificação de isótopos
estáveis.` },
    ],
    correct: 'C',
    explanation: `Mil anos atrás pertence ao Holoceno. Restos orgânicos e carvão das fogueiras permitem analisar carbono e estimar a idade pelo decaimento do ¹⁴C. C reúne época, elemento e método adequados; não se trata do Jurássico nem de isótopos estáveis.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O capitalismo neoliberal, após os anos 1980, caracteriza‐se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `pela prevalência da agricultura e pecuária no PIB dos países
desenvolvidos.` },
      { id: 'B', type: 'text', value: `pelo crescimento da concentração da riqueza e das finanças
em detrimento dos setores produtivos e pela tendência à
diminuição dos direitos sociais.` },
      { id: 'C', type: 'text', value: `pela adoção de políticas que restringem a fluidez dos
capitais e distribuem mais equitativamente a riqueza.` },
      { id: 'D', type: 'text', value: `pelo fortalecimento do papel do Estado nos direitos sociais
e pela diminuição do papel das finanças em relação ao PIB
mundial.` },
      { id: 'E', type: 'text', value: `pela formação de blocos econômicos entre países
periféricos, que impediram a livre circulação de capitais e
contiveram o aumento das desigualdades.` },
    ],
    correct: 'B',
    explanation: `O neoliberalismo promove liberalização financeira, privatizações e redução de proteções sociais, favorecendo concentração patrimonial e expansão das finanças. B identifica essas tendências, em vez de maior redistribuição ou restrição dos fluxos de capitais.`,
    subject: ['fil'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `No planeta Terra, há processos escultores, tais como a ação do
gelo, o intemperismo e a ação do vento. A atuação de tais
processos pode ser representada em gráficos elaborados
segundo variações médias de temperatura e precipitação
anual. Considere as características do deserto do Saara, da
Antártida e de uma floresta tropical e identifique o gráfico em
que estão corretamente localizados.

(A) (D)

(B) (E)

(C)`,
    images: [{"src":"/fuvest/2019/images/q03_options.jpg","width":645,"height":758}],
    alternatives: [
      { id: 'A', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_q03_altA.jpg","width":325,"height":250} },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_q03_altC.jpg","width":325,"height":246} },
      { id: 'D', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_q03_altD.jpg","width":315,"height":250} },
      { id: 'E', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_q03_altE.jpg","width":315,"height":243} },
    ],
    correct: 'A',
    explanation: `O Saara combina alta temperatura e pouca chuva; a Antártida, baixíssima temperatura e baixa precipitação; a floresta tropical, temperaturas altas e chuvas abundantes. O gráfico A posiciona corretamente os três ambientes nesses eixos.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A curva de temperatura do ar ilustrada na figura caracteriza um
fenômeno meteorológico que é mais frequente no outono e no
inverno. Em ambientes urbanos com elevado número de
indústrias e poluição veicular, esse fenômeno pode ocasionar
quadros de elevadas concentrações de poluentes, provocando
problemas à saúde da população e danos à fauna e à flora.

CETESB. https://cetesb.sp.gov.br/qualidade‐ar/

O texto e a ilustração apresentados referem‐se`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q04_1.jpg","width":604,"height":199}],
    alternatives: [
      { id: 'A', type: 'text', value: `à camada de ozônio.` },
      { id: 'B', type: 'text', value: `à inversão térmica.` },
      { id: 'C', type: 'text', value: `ao efeito estufa natural.` },
      { id: 'D', type: 'text', value: `à chuva ácida.` },
      { id: 'E', type: 'text', value: `ao smog fotoquímico.` },
    ],
    correct: 'B',
    explanation: `Uma camada de ar mais quente sobre o ar frio próximo ao solo dificulta a convecção e a dispersão de poluentes. Esse perfil de aumento de temperatura com altitude caracteriza inversão térmica. Portanto, B.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A tabela mostra o número total de refugiados no mundo em
2017, segundo relatório do Alto Comissariado das Nações
Unidas Para Refugiados (UNHCR ou ACNUR em português).

Refugiados do Mundo*

Principais Quantidade de Principais países Quantidade
países de pessoas que abrigam de pessoas
origem dos (em milhões) refugiados (em milhões)
refugiados
Síria 6,3 Turquia 3,5
Afeganistão 2,6 Paquistão 1,4
Sudão do Sul 2,4 Uganda 1,4
Myanmar 1,2 Líbano 0,9
Somália 0,9 República 0,9
Islâmica do Irã
Sudão 0,7 Alemanha 0,9

*Nestes dados não estão computados os palestinos.

UNHCR‐ GLOBAL TRENDS, 2017. Adaptado.

Sobre os refugiados e sua distribuição no mundo, é correto
afirmar:`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "Os provenientes do Sudão do Sul e da Somália são acolhidos\nna Turquia, onde encontram oferta de empregos nas\natividades comerciais, tradição econômica do país, desde o\nséculo XVII."
  },
  {
    "id": "B",
    "type": "text",
    "value": "A maioria provém da África, devido aos processos de\ndesertificação, e tem como destino o Oriente Médio e a\nEuropa."
  },
  {
    "id": "C",
    "type": "text",
    "value": "O Irã recebe majoritariamente refugiados de países da\nÁfrica Subsaariana, dentre os quais se destacam o Sudão e\no Sudão do Sul."
  },
  {
    "id": "D",
    "type": "text",
    "value": "Os de origem síria são a maior população nesta condição, e\nestão sendo acolhidos em vários países do Extremo Oriente\ne da África, os quais apoiam o governo sírio na guerra civil\nque ocorre nesse país desde 2011."
  },
  {
    "id": "E",
    "type": "text",
    "value": "São majoritariamente provenientes do Oriente Médio,\nÁfrica e Ásia, deslocam‐se, forçadamente, devido a longas\nguerras, em grande parte para países e/ou regiões\nfronteiriços."
  }
],
    correct: 'E',
    explanation: `Os dados destacam países de origem em guerra na Ásia, no Oriente Médio e na África e grande acolhimento por vizinhos como Turquia, Paquistão e Uganda. E descreve deslocamentos forçados e sua proximidade regional, sem atribuí-los apenas à desertificação.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A Litosfera é fragmentada em placas que deslizam, convergem
e se separam umas em relação às outras à medida que se
movimentam sobre a Astenosfera. Essa dinâmica compõe a
Tectônica de Placas, reconhecida inicialmente pelo cientista
alemão Alfred Wegener, que elaborou a teoria da Deriva
Continental no início do século XX, tal como demonstrado a
seguir.

Wegener, A. The Origin of Continents and Oceans. 1924. Adaptado.

As bases da teoria de Wegener seguiram inúmeras evidências
deixadas na superfície dos continentes ao longo do tempo
geológico. Considerando as figuras e seus conhecimentos,
indique o fator básico que influenciou o raciocínio de Wegener.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q06_1.jpg","width":618,"height":749},{"src":"/fuvest/2019/images/fuvest_2019_f1q06_2.jpg","width":618,"height":251}],
    alternatives: [
      { id: 'A', type: 'text', value: `As repartições internas atuais dos continentes no
Hemisfério Norte.` },
      { id: 'B', type: 'text', value: `A continuidade dos sistemas fluviais entre América e África.` },
      { id: 'C', type: 'text', value: `As ligações atuais entre os continentes no Hemisfério Sul.` },
      { id: 'D', type: 'text', value: `A semelhança entre os contornos da costa sul‐americana e
africana.` },
      { id: 'E', type: 'text', value: `A distribuição das águas constituindo um só oceano.` },
    ],
    correct: 'D',
    explanation: `O encaixe aproximado entre as costas da América do Sul e da África sugeriu que os continentes já estiveram unidos. Essa evidência, depois combinada a fósseis e rochas, foi central à deriva continental de Wegener. Resposta D.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Segundo a Organização das Nações Unidas para a Alimentação
e a Agricultura (FAO), anualmente, 1,3 bilhão de toneladas de
alimentos (30% da produção total no planeta) é perdido em
dois processos: o desperdício que se relaciona ao descarte de
alimentos em bom estado e a perda ao longo da cadeia
produtiva. O desperdício representa 46% e é muito maior nas
regiões mais ricas. As perdas relativas ao circuito de produção
representam 54% do total e são maiores nos países em
desenvolvimento.

https://nacoesunidas.org/fao‐30‐de‐toda‐a‐comida‐produzida‐no‐mundo‐vai‐
parar‐no‐lixo. Adaptado.

Percentual de pessoas em estado de insegurança alimentar grave*

Local 2017
África 29,8%
América Latina 9,8%
Ásia 6,9%
América Setentrional e Europa 1,4%
Mundo 10,2%

FAO. El estado de la seguridad alimentaria y la nutrición en el mundo. 2018.
Adaptado.

*pessoa que está sem alimento e/ou que ficou um dia todo sem comer várias
vezes ao ano.

Com base nas informações da FAO e em seus conhecimentos,
indique a afirmação correta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A produção de alimentos vem decaindo mundialmente
devido aos problemas na logística de produção, o que tem
provocado aumento da insegurança alimentar.` },
      { id: 'B', type: 'text', value: `Nos continentes mais desenvolvidos, a perda de alimentos
devido ao sistema de transporte e armazenamento é a
principal causa da inexistência da insegurança alimentar.` },
      { id: 'C', type: 'text', value: `O fato de parte significativa da população africana estar em
estado de insegurança alimentar ocorre devido ao
desperdício das monoculturas de cereais.` },
      { id: 'D', type: 'text', value: `O controle rigoroso do desperdício explica o baixo
percentual de pessoas em situação de insegurança
alimentar na América Setentrional e na Europa.` },
      { id: 'E', type: 'text', value: `Os dois diferentes processos que causam a enorme perda
de alimentos no mundo refletem as desigualdades
econômicas e sociais existentes entre os continentes.` },
    ],
    correct: 'E',
    explanation: `Países ricos desperdiçam mais alimentos já disponíveis ao consumo; nos países em desenvolvimento, têm maior peso perdas na produção, no armazenamento e no transporte. A coexistência desses problemas e da fome reflete desigualdades econômicas e sociais. Logo, E.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `MDIC ‐ www.mdic.gov.br. Adaptado.

Com base no gráfico referente à pauta das exportações
brasileiras, é correto afirmar que, no período analisado, houve`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q08_1.jpg","width":562,"height":320}],
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação do setor secundário, especialmente de bens de
capital intermediários.` },
      { id: 'B', type: 'text', value: `consolidação do Brasil como exportador de alta tecnologia,
cujo percentual vem se ampliando na pauta de exportações
brasileiras.` },
      { id: 'C', type: 'text', value: `fortalecimento do setor primário e declínio do setor de
maior valor agregado.` },
      { id: 'D', type: 'text', value: `maior peso do setor primário, pela primeira vez na história
econômica brasileira.` },
      { id: 'E', type: 'text', value: `diminuição da agroindústria nas exportações e aumento do
peso dos bens manufaturados.` },
    ],
    correct: 'C',
    explanation: `O gráfico mostra aumento da participação de produtos primários e queda relativa dos manufaturados, que agregam mais valor. C descreve essa reprimarização da pauta exportadora, sem significar que o país nunca antes exportara bens primários.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O gráfico mostra as temperaturas médias mensais históricas de
cinco cidades, todas localizadas em altitudes próximas do nível
do mar: Alexandria (Egito), Barcelona (Espanha), Buenos
Aires (Argentina), Santos (SP, Brasil), São Luís (MA, Brasil).

Fonte: Weatherbase

No gráfico, essas cidades estão representadas,
respectivamente, pelos símbolos:`,
    images: [{"src":"/fuvest/2019/images/q09_temperatures.jpg","width":645,"height":416},{"src":"/fuvest/2019/images/q09_options.jpg","width":323,"height":255}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "Sequência de símbolos A da figura."
  },
  {
    "id": "B",
    "type": "text",
    "value": "Sequência de símbolos B da figura."
  },
  {
    "id": "C",
    "type": "text",
    "value": "Sequência de símbolos C da figura."
  },
  {
    "id": "D",
    "type": "text",
    "value": "Sequência de símbolos D da figura."
  },
  {
    "id": "E",
    "type": "text",
    "value": "Sequência de símbolos E da figura."
  }
],
    correct: 'B',
    explanation: `Alexandria e Barcelona apresentam verão no meio do ano, mas Barcelona tem inverno mais frio. Buenos Aires e Santos têm verão no início/fim do ano, sendo Buenos Aires mais fria. São Luís mantém temperaturas altas e pouco variáveis. A sequência dos símbolos correspondente é B.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A metropolização de São Paulo foi induzida pela
industrialização no século XX. Nas últimas décadas, o
deslocamento de parte da indústria da metrópole e o
crescimento do setor terciário avançado revelam a primazia do
capital financeiro, que se articula com o setor imobiliário e
produz, por exemplo, os edifícios corporativos, sede deste
terciário.

Carlos, A.F.A. São Paulo: do capital industrial ao capital financeiro. In: Carlos,
A.F.A. e Oliveira. A.U. Geografias de São Paulo: a metrópole do século XXI.
São Paulo. Adaptado.

Conjuntos comerciais verticais lançados no município de São Paulo
de 1992 a 2015

Empresa Brasileira de Estudos de Patrimônio: Embraesp. 2015. Adaptado.

Com base no texto e no mapa, é correto afirmar que`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q12_1.jpg","width":568,"height":754}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "o crescimento do terciário avançado indica o aumento de\nestabelecimentos industriais, ambos dispersos em São\nPaulo."
  },
  {
    "id": "B",
    "type": "text",
    "value": "a produção industrial em São Paulo está concentrada nas\náreas centrais, o que induziu a proliferação de edifícios\ncorporativos."
  },
  {
    "id": "C",
    "type": "text",
    "value": "os edifícios corporativos concentram a produção de\nmanufaturados e, em São Paulo, estão concentrados nas\náreas de maior densidade populacional."
  },
  {
    "id": "D",
    "type": "text",
    "value": "o setor terciário avançado ocupa os edifícios corporativos e\nestá concentrado em poucos distritos da metrópole de São\nPaulo no momento atual."
  },
  {
    "id": "E",
    "type": "text",
    "value": "a desconcentração industrial em São Paulo foi\nacompanhada da dispersão do setor terciário avançado."
  }
],
    correct: 'D',
    explanation: `A desconcentração de parte da indústria não implica dispersão igual dos serviços financeiros e corporativos. O mapa concentra lançamentos em poucos distritos, onde se articula o terciário avançado. Portanto, D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Examine a imagem e o gráfico.

Google Earth, 2018.

A sequência correta dos compartimentos geomorfológicos no
traçado A – B apresentados na imagem e no perfil é:

1 2 3`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q11_1.jpg","width":568,"height":368},{"src":"/fuvest/2019/images/fuvest_2019_f1q11_2.jpg","width":567,"height":140}],
    alternatives: [
      { id: 'A', type: 'text', value: `planalto escarpa planície litorânea` },
      { id: 'B', type: 'text', value: `escarpa planalto depressão periférica` },
      { id: 'C', type: 'text', value: `escarpa planalto planície litorânea` },
      { id: 'D', type: 'text', value: `planalto escarpa depressão periférica` },
      { id: 'E', type: 'text', value: `depressão periférica escarpa planície litorânea` },
    ],
    correct: 'A',
    explanation: `O perfil parte de uma superfície elevada, desce abruptamente e alcança terreno baixo junto ao mar. São, respectivamente, planalto, escarpa e planície litorânea. Resposta A.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `À medida que a parcela de ar se eleva na atmosfera, nos limites
da troposfera, a temperatura do ar decai a uma razão de 1 °C a
cada 100 metros (Razão Adiabática Seca ‐ RAS) ou 0,6 °C a cada
100 metros (Razão Adiabática Úmida ‐ RAU).

Considerando os conceitos e a ilustração, é correto afirmar que
as temperaturas do ar, em graus Celsius, T1 e T2, são,
respectivamente,

Note e adote: Utilize RAS ou RAU de acordo com a presença ou não de ar saturado. Tar: temperatura do ar.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q12_2.jpg","width":695,"height":244}],
    alternatives: [
      { id: 'A', type: 'text', value: `8,0 e 26,0.` },
      { id: 'B', type: 'text', value: `12,8 e 28,0.` },
      { id: 'C', type: 'text', value: `12,0 e 26,0.` },
      { id: 'D', type: 'text', value: `12,0 e 20,4.` },
      { id: 'E', type: 'text', value: `11,6 e 20,4.` },
    ],
    correct: 'C',
    explanation: `A parcela parte de 20 °C a 200 m e perde 2 °C até 400 m, chegando a 18 °C. Saturada, sobe mais 1.000 m e perde 6 °C: T1=12 °C. Ao descer seca por 1.400 m, ganha 14 °C: T2=26 °C. Logo, C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Os grandes aviões comerciais voam em altitudes onde o ar é
rarefeito e a pressão atmosférica é baixa. Devido a isso, eles
têm o seu interior pressurizado em uma pressão igual à
atmosférica na altitude de 2.000 m. A figura mostra o gráfico da
pressão atmosférica em função da altitude.

A força, em N, a que fica submetida uma janela plana de vidro,
de 20 x 30 cm2, na cabine de passageiros na altitude de
10.000 m, é, aproximadamente,`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q15_1.jpg","width":547,"height":193},{"src":"/fuvest/2019/images/fuvest_2019_f1q15_2.jpg","width":547,"height":192}],
    alternatives: [
      { id: 'A', type: 'text', value: `12.400` },
      { id: 'B', type: 'text', value: `6.400` },
      { id: 'C', type: 'text', value: `4.800` },
      { id: 'D', type: 'text', value: `3.200` },
      { id: 'E', type: 'text', value: `1.600` },
    ],
    correct: 'D',
    explanation: `A pressão interna corresponde a cerca de 80.000 Pa e a externa a cerca de 27.000 Pa. A área da janela é 0,20×0,30=0,06 m². A força resultante é ΔP×A≈53.000×0,06≈3.200 N. Alternativa D.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O consumo calórico de um animal de sangue quente é
proporcional à área superficial de seu corpo. Um animal com
massa 3,5 kg consome 250 kcal diárias. O gráfico relaciona a
área superficial desse animal com sua massa.

Considerando o gráfico, conclui‐se que, se a massa deste animal
dobrar, o seu novo consumo diário de energia, em kcal, será,
aproximadamente,`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q14_1.jpg","width":533,"height":371}],
    alternatives: [
      { id: 'A', type: 'text', value: `130` },
      { id: 'B', type: 'text', value: `250` },
      { id: 'C', type: 'text', value: `310` },
      { id: 'D', type: 'text', value: `390` },
      { id: 'E', type: 'text', value: `500` },
    ],
    correct: 'D',
    explanation: `O gasto é proporcional à área, não diretamente à massa. Ao passar de 3,5 para 7 kg, o gráfico indica aumento de área de aproximadamente 0,14 para 0,22 m². O consumo torna-se 250×0,22/0,14≈390 kcal/dia: D.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Em uma fábrica, um técnico deve medir a velocidade angular
de uma polia girando. Ele apaga as luzes do ambiente e ilumina
a peça somente com a luz de uma lâmpada estroboscópica, cuja
frequência pode ser continuamente variada e precisamente
conhecida. A polia tem uma mancha branca na lateral. Ele
observa que, quando a frequência de flashes é 9 Hz, a mancha
na polia parece estar parada. Então aumenta vagarosamente a
frequência do piscar da lâmpada e só quando esta atinge 12 Hz
é que, novamente, a mancha na polia parece estar parada. Com
base nessas observações, ele determina que a velocidade
angular da polia, em rpm, é`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "2.160"
  },
  {
    "id": "B",
    "type": "text",
    "value": "1.260"
  },
  {
    "id": "C",
    "type": "text",
    "value": "309"
  },
  {
    "id": "D",
    "type": "text",
    "value": "180"
  },
  {
    "id": "E",
    "type": "text",
    "value": "36"
  }
],
    correct: 'A',
    explanation: `A imobilidade aparente ocorre quando cada intervalo entre flashes corresponde a um número inteiro de voltas. As frequências consecutivas 9 e 12 Hz satisfazem frot/9−frot/12=1; daí frot=36 Hz=2.160 rpm. Resposta A.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Dois corpos de massas iguais são soltos, ao mesmo tempo, a
partir do repouso, da altura h1 e percorrem os diferentes
trajetos (A) e (B), mostrados na figura, onde x1 > x2 e h1 > h2.

Considere as seguintes afirmações:

I. As energias cinéticas finais dos corpos em (A) e em (B) são
diferentes.
II. As energias mecânicas dos corpos, logo antes de
começarem a subir a rampa, são iguais.
III. O tempo para completar o percurso independe da
trajetória.
IV. O corpo em (B) chega primeiro ao final da trajetória.
V. O trabalho realizado pela força peso é o mesmo nos dois
casos.

É correto somente o que se afirma em

Note e adote: Desconsidere forças dissipativas.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q14_2.jpg","width":597,"height":164}],
    alternatives: [
      { id: 'A', type: 'text', value: `I e III.` },
      { id: 'B', type: 'text', value: `II e V.` },
      { id: 'C', type: 'text', value: `IV e V.` },
      { id: 'D', type: 'text', value: `II e III.` },
      { id: 'E', type: 'text', value: `I e V.` },
    ],
    correct: 'B',
    explanation: `Sem dissipação, a energia mecânica se conserva e a velocidade final depende apenas da diferença de altura, tornando I falsa e II verdadeira. O trabalho do peso também depende apenas das alturas: V verdadeira. Tempos dependem dos percursos e não confirmam III ou IV. Apenas II e V: B.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um rapaz de massa m₁ corre numa pista horizontal e pula sobre um skate de massa m₂, que se encontra inicialmente em repouso. Com o impacto, o skate adquire velocidade e o conjunto rapaz+skate segue em direção a uma rampa e atinge uma altura máxima h. A velocidade do rapaz, imediatamente antes de tocar no skate, é dada por

Note e adote: Considere que o sistema rapaz + skate não perde energia devido a forças dissipativas, após a colisão.`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "[(m₁ + m₂)/m₂]√(gh)"
  },
  {
    "id": "B",
    "type": "text",
    "value": "[(m₁ + m₂)/(2m₁)]√(gh)"
  },
  {
    "id": "C",
    "type": "text",
    "value": "(m₁/m₂)√(2gh)"
  },
  {
    "id": "D",
    "type": "text",
    "value": "[(m₁ + m₂)/m₁]√(2gh)"
  },
  {
    "id": "E",
    "type": "text",
    "value": "[(2m₁ + m₂)/m₁]√(gh)"
  }
],
    correct: 'D',
    explanation: `Após a colisão, a energia do conjunto dá v=√(2gh). Durante o impacto, conserva-se o momento horizontal: m₁u=(m₁+m₂)v. Portanto, u=[(m₁+m₂)/m₁]√(2gh), alternativa D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Três pequenas esferas carregadas com carga positiva Q ocupam
os vértices de um triângulo, como mostra a figura. Na parte
interna do triângulo, está afixada outra pequena esfera, com
carga negativa q. As distâncias dessa carga às outras três
podem ser obtidas a partir da figura.

Sendo Q = 2 × 10⁻⁴ C, q = –2 × 10⁻⁵ C e d = 6 m, a força elétrica
resultante sobre a carga q

Note e adote:
A constante k₀ da lei de Coulomb vale 9 × 10⁹ N·m²/C²`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q18_1.jpg","width":356,"height":142},{"src":"/fuvest/2019/images/fuvest_2019_f1q21_1.jpg","width":356,"height":142}],
    alternatives: [
      { id: 'A', type: 'text', value: `é nula.` },
      { id: 'B', type: 'text', value: `tem direção do eixo y, sentido para baixo e módulo 1,8 N.` },
      { id: 'C', type: 'text', value: `tem direção do eixo y, sentido para cima e módulo 1,0 N.` },
      { id: 'D', type: 'text', value: `tem direção do eixo y, sentido para baixo e módulo 1,0 N.` },
      { id: 'E', type: 'text', value: `tem direção do eixo y, sentido para cima e módulo 0,3 N.` },
    ],
    correct: 'E',
    explanation: `A carga negativa é atraída pelas três positivas. A superior exerce 1 N para cima; cada inferior exerce 0,5 N na diagonal, com componente vertical 0,5/√2 para baixo. As componentes horizontais se anulam, e Fy=1−1/√2≈0,3 N para cima. Resposta E.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma pessoa observa uma vela através de uma lente de vidro
biconvexa, como representado na figura.

Considere que a vela está posicionada entre a lente e o seu
ponto focal F. Nesta condição, a imagem observada pela pessoa
é`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q19_1.jpg","width":571,"height":131}],
    alternatives: [
      { id: 'A', type: 'text', value: `virtual, invertida e maior.` },
      { id: 'B', type: 'text', value: `virtual, invertida e menor.` },
      { id: 'C', type: 'text', value: `real, direita e menor.` },
      { id: 'D', type: 'text', value: `real, invertida e maior.` },
      { id: 'E', type: 'text', value: `virtual, direita e maior.` },
    ],
    correct: 'E',
    explanation: `Com o objeto entre o foco e uma lente convergente, os raios emergentes divergem e seus prolongamentos se encontram do lado do objeto. A imagem é virtual, direita e ampliada, como em uma lupa. Logo, E.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma bateria de tensão V e resistência interna Ri é ligada em série com um resistor de resistência R. O esquema do circuito está apresentado na figura. A potência dissipada pelo resistor R é dada por`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q18_2.jpg","width":247,"height":285}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "V²/R"
  },
  {
    "id": "B",
    "type": "text",
    "value": "V²/(R + Ri)"
  },
  {
    "id": "C",
    "type": "text",
    "value": "V²R/(R + Ri)²"
  },
  {
    "id": "D",
    "type": "text",
    "value": "V²R/(R + Ri)"
  },
  {
    "id": "E",
    "type": "text",
    "value": "V²/(R − Ri)"
  }
],
    correct: 'C',
    explanation: `A corrente é I=V/(R+Ri). No resistor externo, P=RI²=V²R/(R+Ri)². A expressão correta é C; a resistência interna participa da corrente, mas não é o resistor cuja potência foi solicitada.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Em uma garrafa térmica, são colocados 200 g de água à
temperatura de 30 °C e uma pedra de gelo de 50 g, à
temperatura de –10 °C. Após o equilíbrio térmico,

Note e adote:
calor latente de fusão do gelo = 80 cal/g;
calor específico do gelo = 0,5 cal/g °C;
calor específico da água = 1,0 cal/g °C.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `todo o gelo derreteu e a temperatura de equilíbrio é 7 °C.` },
      { id: 'B', type: 'text', value: `todo o gelo derreteu e a temperatura de equilíbrio
é 0,4 °C.` },
      { id: 'C', type: 'text', value: `todo o gelo derreteu e a temperatura de equilíbrio é 20 °C.` },
      { id: 'D', type: 'text', value: `nem todo o gelo derreteu e a temperatura de equilíbrio
é 0 °C.` },
      { id: 'E', type: 'text', value: `o gelo não derreteu e a temperatura de equilíbrio é –2 °C.` },
    ],
    correct: 'A',
    explanation: `A água pode fornecer 200×30=6.000 cal até 0 °C. Aquecer o gelo exige 50×0,5×10=250 cal e derretê-lo exige 4.000 cal. As 1.750 cal restantes aquecem 250 g de água em 7 °C. Todo o gelo derrete: A.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `No diagrama P x V da figura, A, B e C representam
transformações possíveis de um gás entre os estados I e II.

Com relação à variação ΔU da energia interna do gás e ao
trabalho W por ele realizado, entre esses estados, é correto
afirmar que`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q26_1.jpg","width":314,"height":306}],
    alternatives: [
      { id: 'A', type: 'text', value: `ΔUA = ΔUB = ΔUC e WC > WB > WA.` },
      { id: 'B', type: 'text', value: `ΔUA > ΔUC > ΔUB e WC = WA < WB.` },
      { id: 'C', type: 'text', value: `ΔUA < ΔUB < ΔUC e WC > WB > WA.` },
      { id: 'D', type: 'text', value: `ΔUA = ΔUB = ΔUC e WC = WA > WB.` },
      { id: 'E', type: 'text', value: `ΔUA > ΔUB > ΔUC e WC = WB = WA.` },
    ],
    correct: 'A',
    explanation: `Energia interna é função de estado, portanto sua variação entre I e II é a mesma nas três trajetórias. O trabalho é a área sob a curva P×V; pela figura, C tem a maior área, seguida de B e A. Logo, A.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Três amigos vão acampar e descobrem que nenhum deles
trouxe fósforos. Para acender o fogo e fazer o almoço, resolvem
improvisar e prendem um pedaço de filme plástico
transparente num aro de “cipó”. Colocam um pouco de água
sobre o plástico, formando uma poça de aproximadamente
14 cm de diâmetro e 1 cm de profundidade máxima, cuja forma
pode ser aproximada pela de uma calota esférica. Quando o sol
está a pino, para aproveitamento máximo da energia solar, a
distância, em cm, entre o centro do filme e a palha seca usada
para iniciar o fogo, é, aproximadamente,

Note e adote: Para uma lente plano-convexa, 1/f = (n − 1)/R, sendo n o índice de refração da lente e R o seu raio de curvatura. Índice de refração da água = 1,33.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `75` },
      { id: 'B', type: 'text', value: `50` },
      { id: 'C', type: 'text', value: `25` },
      { id: 'D', type: 'text', value: `14` },
      { id: 'E', type: 'text', value: `7` },
    ],
    correct: 'A',
    explanation: `A calota tem raio de base 7 cm e altura 1 cm. Pela geometria, R=(7²+1²)/(2×1)=25 cm. Para a lente plano-convexa de água, f=R/(n−1)=25/0,33≈75 cm. A palha deve ficar no foco: A.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um chuveiro elétrico que funciona em 220 V possui uma chave
que comuta entre as posições “verão” e “inverno”. Na posição
“verão”, a sua resistência elétrica tem o valor 22 Ω, enquanto
na posição “inverno” é 11 Ω. Considerando que na posição
“verão” o aumento de temperatura da água, pelo chuveiro, é
5 °C, para o mesmo fluxo de água, a variação de temperatura,
na posição “inverno”, em °C, é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `2,5` },
      { id: 'B', type: 'text', value: `5,0` },
      { id: 'C', type: 'text', value: `10,0` },
      { id: 'D', type: 'text', value: `15,0` },
      { id: 'E', type: 'text', value: `20,0` },
    ],
    correct: 'C',
    explanation: `A tensão é fixa e P=V²/R. Reduzir R de 22 para 11 Ω duplica a potência. Com a mesma vazão, o aumento de temperatura também duplica, de 5 para 10 °C. Resposta C.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Nas margens de um rio, verificava‐se a seguinte cadeia trófica:
o capim ali presente servia de alimento para gafanhotos, que,
por sua vez, eram predados por passarinhos, cuja espécie só
ocorria naquele ambiente e tinha exclusivamente os
gafanhotos como alimento; tais passarinhos eram predados por
gaviões da região.

A lama tóxica que vazou de uma empresa mineradora matou
quase totalmente o capim ali existente. É correto afirmar que,
em seguida, o consumidor secundário`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "teve sua população reduzida como consequência direta do\naumento da biomassa no primeiro nível trófico da cadeia."
  },
  {
    "id": "B",
    "type": "text",
    "value": "teve sua população reduzida como consequência indireta\nda diminuição da biomassa no primeiro nível trófico da\ncadeia."
  },
  {
    "id": "C",
    "type": "text",
    "value": "não teve sua população afetada, pois o efeito da lama tóxica\nse deu sobre o primeiro nível trófico da cadeia e não sobre\no segundo."
  },
  {
    "id": "D",
    "type": "text",
    "value": "não teve sua população afetada, pois a lama tóxica não teve\nefeito direto sobre ele, mas sim sobre um nível trófico\ninferior."
  },
  {
    "id": "E",
    "type": "text",
    "value": "teve sua população aumentada como consequência direta\ndo aumento da biomassa no segundo nível trófico da\ncadeia."
  }
],
    correct: 'B',
    explanation: `O consumidor secundário é o passarinho. A morte do capim reduz os gafanhotos, seu alimento exclusivo, levando indiretamente à queda da população de passarinhos. B identifica essa dependência entre níveis tróficos.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A tabela lista características bióticas e abióticas associadas a
alguns biomas brasileiros.

Tipo de
Volume de Zona
Bioma vegetação
chuvas climática
predominante
moderado a tropical,
I arbóreo
grande subtropical
II herbáceo moderado temperada
equatorial,
III arbóreo grande
tropical
arbóreo,
tropical,
IV arbustivo e moderado
subtropical
herbáceo

Escolha a alternativa que lista os biomas corretos, na ordem em
que aparecem nas linhas da tabela (I a IV).`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I‐Floresta Amazônica; II‐Cerrado; III‐Mata Atlântica;
IV‐Caatinga.` },
      { id: 'B', type: 'text', value: `I‐ Floresta Amazônica; II‐Pampas; III‐Mata Atlântica;
IV‐Cerrado.` },
      { id: 'C', type: 'text', value: `I‐Mata Atlântica; II‐Cerrado; III‐Floresta Amazônica;
IV‐Caatinga.` },
      { id: 'D', type: 'text', value: `I‐Mata Atlântica; II‐Pampas; III‐Floresta Amazônica;
IV‐Cerrado.` },
      { id: 'E', type: 'text', value: `I‐Pampas; II‐Mata Atlântica; III‐Cerrado;
IV‐ Floresta Amazônica.` },
    ],
    correct: 'D',
    explanation: `Vegetação arbórea tropical/subtropical úmida corresponde à Mata Atlântica; campos temperados, aos Pampas; floresta equatorial de chuvas abundantes, à Amazônia; mosaico arbóreo-arbustivo-herbáceo, ao Cerrado. A ordem I–IV está em D.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O aquecimento global resulta do seguinte fenômeno: parte da
energia solar incidente sobre a Terra é irradiada de volta ao
espaço, sendo bloqueada, em grande parte, por gases de efeito
estufa, o que aumenta a temperatura do planeta. As
alternativas apresentam: I‐ o motivo pelo qual os raios solares
conseguem penetrar a atmosfera terrestre, mas, ao serem
refletidos, são barrados, em grande parte, pelos gases de efeito
estufa; II‐ uma das causas diretas do aumento da concentração
de gases de efeito estufa na atmosfera.

Os itens I e II estão corretamente indicados em:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I A energia solar incide na atmosfera em
comprimentos de onda menores e é refletida
em comprimentos de onda maiores.

II Destruição de florestas nativas.` },
      { id: 'B', type: 'text', value: `I A energia solar incide na atmosfera em
comprimentos de onda maiores e é refletida em
comprimentos de onda menores.

II Represamento dos rios para abastecimento de
hidrelétricas.` },
      { id: 'C', type: 'text', value: `I A energia solar incide na atmosfera e é refletida
em ondas de mesmo comprimento.

II Plantio de árvores exóticas no lugar de árvores
nativas.` },
      { id: 'D', type: 'text', value: `I A energia solar incide na atmosfera em
comprimentos de onda maiores e é refletida em
comprimentos de onda menores.

II Uso de combustível fóssil.` },
      { id: 'E', type: 'text', value: `I A energia solar incide na atmosfera em
comprimentos de onda menores e é refletida
em comprimentos de onda maiores.

II Uso da água dos rios para o abastecimento
domiciliar.` },
    ],
    correct: 'A',
    explanation: `A superfície absorve radiação solar e reemite energia em ondas mais longas, na faixa infravermelha, absorvida por gases estufa. Destruir florestas emite carbono e reduz sua fixação. A reúne os dois pontos corretos; a palavra “refletida” do enunciado simplifica o processo de reemissão.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um organismo multicelular, fotossintetizante, que possui
sistema vascular e não possui frutos ou sementes é uma`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `alga.` },
      { id: 'B', type: 'text', value: `briófita.` },
      { id: 'C', type: 'text', value: `pteridófita.` },
      { id: 'D', type: 'text', value: `gimnosperma.` },
      { id: 'E', type: 'text', value: `angiosperma.` },
    ],
    correct: 'C',
    explanation: `Pteridófitas possuem tecidos vasculares, mas não sementes, flores ou frutos. Briófitas não têm vasos condutores verdadeiros, enquanto gimnospermas e angiospermas têm sementes. Logo, C.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A esquistossomose é uma doença que tem forte impacto na
saúde pública brasileira. Os grupos do parasita (I) e do seu
hospedeiro intermediário (II) e a forma de infestação (III) são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I‐protozoário; II‐artrópode; III‐picada de mosquito.` },
      { id: 'B', type: 'text', value: `I‐nematódeo; II‐molusco; III‐penetração pela pele.` },
      { id: 'C', type: 'text', value: `I‐protozoário; II‐artrópode; III‐picada de barbeiro.` },
      { id: 'D', type: 'text', value: `I‐platelminto; II‐mamífero; III‐ingestão de carne crua.` },
      { id: 'E', type: 'text', value: `I‐platelminto; II‐molusco; III‐penetração pela pele.` },
    ],
    correct: 'E',
    explanation: `Schistosoma é um platelminto; caramujos, que são moluscos, atuam como hospedeiros intermediários. Cercárias liberadas na água penetram ativamente pela pele humana. A combinação corresponde a E.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O gráfico representa a concentração de alguns hormônios
observados durante a gravidez de uma mulher.

Identifique os hormônios H1 e H2, respectivamente, e o motivo
da queda abrupta de suas concentrações no sangue ao final do
período de gestação.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q30_1.jpg","width":300,"height":357}],
    alternatives: [
      { id: 'A', type: 'text', value: `H1: progesterona; H2: FSH; motivo: eliminação da placenta.` },
      { id: 'B', type: 'text', value: `H1: FSH; H2: LH; motivo: reinício da menstruação.` },
      { id: 'C', type: 'text', value: `H1: FSH; H2: estrógeno; motivo: reinício da menstruação.` },
      { id: 'D', type: 'text', value: `H1: progesterona; H2: estrógeno; motivo: eliminação da placenta.` },
      { id: 'E', type: 'text', value: `H1: FSH; H2: progesterona; motivo: início da lactação.` },
    ],
    correct: 'D',
    explanation: `A placenta participa da produção de progesterona e estrógenos durante a gravidez. Sua eliminação ao final da gestação provoca queda abrupta desses hormônios. H1 e H2 são progesterona e estrógeno: D.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O processo de acidificação dos oceanos, decorrente das
mudanças climáticas globais, afeta diretamente as colônias de
corais, influenciando na formação de recifes. Assinale a
alternativa que completa corretamente a explicação para esse
fenômeno.

O dióxido de carbono dissolvido no oceano`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `gera menor quantidade de íons de hidrogênio, o que
diminui o pH da água, liberando maior quantidade de íons
cálcio, que, por sua vez, se ligam aos carbonatos,
aumentando o tamanho dos recifes.` },
      { id: 'B', type: 'text', value: `é absorvido pelo fitoplâncton, entrando no processo
fotossintético, e o oxigênio liberado permanece na água do
mar, oxidando e matando os recifes de coral.` },
      { id: 'C', type: 'text', value: `leva à formação de ácido carbônico, que, dissociado, gera,
ao final, íons de hidrogênio e de carbonato, que se ligam,
impedindo a formação do carbonato de cálcio que compõe
os recifes de coral.` },
      { id: 'D', type: 'text', value: `é absorvido pelo fitoplâncton, entrando no processo
fotossintético, e o oxigênio liberado torna a água do mar
mais oxigenada, aumentando a atividade dos corais e o
tamanho de seus recifes.` },
      { id: 'E', type: 'text', value: `reage com a água, produzindo ácido carbônico, que
permanece no oceano e corrói os recifes de coral, que são
formados por carbonato de cálcio.` },
    ],
    correct: 'E',
    explanation: `CO₂ dissolvido reage com água e aumenta a acidez. Isso reduz a disponibilidade de carbonato e favorece a dissolução de estruturas de CaCO₃ dos corais. E é a alternativa compatível; maior oxigenação não explica a acidificação.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O esquema representa, de maneira bastante simplificada, uma
das possíveis hipóteses de relação de parentesco entre grupos
animais, assinalados pelo nome comum de alguns de seus
representantes. Na base do esquema, a característica que une
todos em um mesmo grupo é a deuterostomia.

Identifique quais seriam as características I, II, III, IV, V que
justificariam os respectivos grupos.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q34_1.jpg","width":426,"height":160},{"src":"/fuvest/2019/images/fuvest_2019_f1q34_2.jpg","width":426,"height":159}],
    alternatives: [
      { id: 'A', type: 'text', value: `I: notocorda; II: pulmão; III: âmnio; IV: pelo; V: ovo com casca.` },
      { id: 'B', type: 'text', value: `I: escamas; II: encéfalo; III: pulmão; IV: glândulas mamárias; V: âmnio.` },
      { id: 'C', type: 'text', value: `I: mandíbula; II: 4 membros locomotores; III: pulmão; IV: ventrículo subdividido em 2 câmaras; V: ovo com casca.` },
      { id: 'D', type: 'text', value: `I: notocorda; II: 4 membros locomotores; III: pulmão; IV: glândulas mamárias; V: pena.` },
      { id: 'E', type: 'text', value: `I: âmnio; II: pulmão; III: mandíbula; IV: ventrículo subdividido em 2 câmaras; V: escama.` },
    ],
    correct: 'A',
    explanation: `A notocorda caracteriza cordados; pulmões antecedem os amniotas; âmnio une os grupos terrestres indicados; pelos distinguem mamíferos, e ovos com casca caracterizam o ramo dos répteis e aves no esquema. A corresponde aos pontos I–V.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma alteração genética é determinada por um gene com
herança autossômica recessiva. O heredograma mostra
famílias em que essa condição está presente.

O casal III2 e III3 está esperando um menino. Considerando
que, nessa população, uma em cada 50 pessoas é
heterozigótica para essa alteração, a probabilidade de que esse
menino seja afetado é`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q33_1.jpg","width":498,"height":287}],
    alternatives: [
      { id: 'A', type: 'text', value: `1/100` },
      { id: 'B', type: 'text', value: `1/200` },
      { id: 'C', type: 'text', value: `1/1.000` },
      { id: 'D', type: 'text', value: `1/25.000` },
      { id: 'E', type: 'text', value: `1/40.000` },
    ],
    correct: 'B',
    explanation: `III2, não afetada e filha de mãe aa, é obrigatoriamente Aa. A chance de III3 ser portador é 1/50. Sendo ambos portadores, a chance de um filho afetado é 1/4, independentemente de ser menino. O produto é 1/200: B.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Desde 2013, a cobertura vacinal para doenças como caxumba,
sarampo, rubéola e poliomielite vem caindo ano a ano em todo
o país, devido, entre outros motivos, ____I____. Contudo,
sabe‐se que a vacina é o único meio de prevenir essas doenças
e consiste na inoculação de _____II_____.

As lacunas I e II podem ser corretamente preenchidas por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I: à baixa incidência dessas doenças atualmente, não representando mais riscos à saúde pública. II: anticorpos que estimulam uma resposta imunológica passiva contra uma doença específica, em pessoas saudáveis.` },
      { id: 'B', type: 'text', value: `I: a movimentos antivacinação, que têm se expandido pelo mundo. II: vírus patogênicos modificados em laboratório, causando a cura pela competição com os vírus não modificados da pessoa doente.` },
      { id: 'C', type: 'text', value: `I: a movimentos antivacinação, que têm se expandido pelo mundo. II: antígenos do agente patogênico, estimulando uma resposta imunológica ativa, em pessoas saudáveis.` },
      { id: 'D', type: 'text', value: `I: ao alto custo dessas vacinas, não coberto pelo sistema público, o que as torna inacessíveis a grande parte da população. II: antígenos do agente patogênico para garantir a cura em um curto espaço de tempo, em pessoas doentes.` },
      { id: 'E', type: 'text', value: `I: à baixa incidência dessas doenças atualmente, não representando mais riscos à saúde pública. II: anticorpos específicos produzidos em outro organismo, que se multiplicam e eliminam o agente patogênico, em pessoas doentes.` },
    ],
    correct: 'C',
    explanation: `Movimentos antivacinação contribuem para a queda da cobertura. Vacinas apresentam antígenos que estimulam resposta imune ativa e memória em pessoas saudáveis. C reúne causa e mecanismo, diferentemente de soros com anticorpos prontos.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A reação de água com ácido clorídrico produz o ânion cloreto e
o cátion hidrônio. A estrutura que representa corretamente o
cátion hidrônio é

(A) (D)

(B) (E)

(C)`,
    images: [{"src":"/fuvest/2019/images/q35_options.jpg","width":640,"height":428}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "Estrutura A da figura."
  },
  {
    "id": "B",
    "type": "text",
    "value": "Estrutura B da figura."
  },
  {
    "id": "C",
    "type": "text",
    "value": "Estrutura C da figura."
  },
  {
    "id": "D",
    "type": "text",
    "value": "Estrutura D da figura."
  },
  {
    "id": "E",
    "type": "text",
    "value": "Estrutura E da figura."
  }
],
    correct: 'A',
    explanation: `O hidrônio é H₃O⁺. Sua estrutura tem oxigênio ligado a três hidrogênios, um par não ligante e carga formal positiva, respeitando o octeto do oxigênio. O desenho correto é A.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma amostra sólida, sem cavidades ou poros, poderia ser
constituída por um dos seguintes materiais metálicos: alumínio,
bronze, chumbo, ferro ou titânio. Para identificá‐la, utilizou‐se
uma balança, um recipiente de volume constante e água.
Efetuaram‐se as seguintes operações: 1) pesou‐se a amostra;
2) pesou‐se o recipiente completamente cheio de água;
3) colocou‐se a amostra no recipiente vazio, completando seu
volume com água e determinou‐se a massa desse conjunto. Os
resultados obtidos foram os seguintes:

Dadas as densidades da água e dos metais, pode‐se concluir
que a amostra desconhecida é constituída de

Note e adote: Densidades (g/cm³): água = 1,0; alumínio = 2,7; bronze = 8,8; chumbo = 11,3; ferro = 7,9; titânio = 4,5.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q38_1.jpg","width":601,"height":154},{"src":"/fuvest/2019/images/fuvest_2019_f1q38_2.jpg","width":601,"height":154}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "alumínio."
  },
  {
    "id": "B",
    "type": "text",
    "value": "bronze."
  },
  {
    "id": "C",
    "type": "text",
    "value": "chumbo."
  },
  {
    "id": "D",
    "type": "text",
    "value": "ferro."
  },
  {
    "id": "E",
    "type": "text",
    "value": "titânio."
  }
],
    correct: 'B',
    explanation: `A amostra tem 44 g. Ao introduzi-la, a massa de água deslocada é 350+44−389=5 g, correspondente a 5 cm³. A densidade é 44/5=8,8 g/cm³, que identifica o bronze: B.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um antiácido comercial em pastilhas possui, em sua
composição, entre outras substâncias, bicarbonato de sódio,
carbonato de sódio e ácido cítrico. Ao ser colocada em água, a
pastilha dissolve‐se completamente e libera gás carbônico, o
que causa a efervescência. Para entender a influência de alguns
fatores sobre a velocidade de dissolução da pastilha, adicionou‐
se uma pastilha a cada um dos quatro recipientes descritos na
tabela, medindo‐se o tempo até a sua dissolução completa.

Tempo medido até a
Solução completa dissolução da
pastilha (em segundos)
1. Água mineral sem gás à 36
temperatura ambiente (25 °C)
2. Água mineral com gás à 35
temperatura ambiente (25 °C)
3. Água mineral sem gás deixada 53
em geladeira (4 °C)
4. Água mineral com gás deixada 55
em geladeira (4 °C)

Para todos os experimentos, foi usada água mineral da mesma
marca. Considere a água com gás como tendo gás carbônico
dissolvido.

Com base nessas informações, é correto afirmar que`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "o uso da água com gás, ao invés da sem gás, diminuiu a\nvelocidade de dissolução da pastilha em cerca de 50%, uma\nvez que, como já possui gás carbônico, há o deslocamento\ndo equilíbrio para a formação dos reagentes."
  },
  {
    "id": "B",
    "type": "text",
    "value": "o uso da água com gás, ao invés da sem gás, aumentou a\nvelocidade de dissolução da pastilha em cerca de 33%, uma\nvez que o gás carbônico acidifica a água, aumentando a\nvelocidade de consumo do carbonato de sódio."
  },
  {
    "id": "C",
    "type": "text",
    "value": "nem a mudança de temperatura nem a adição de gás\ncarbônico na solução afetaram a velocidade da reação, uma\nvez que o sistema não se encontra em equilíbrio."
  },
  {
    "id": "D",
    "type": "text",
    "value": "o aumento da temperatura da água, de 4 °C para 25 °C,\nlevou a um aumento na velocidade da reação, uma vez que\naumentou a frequência e a energia de colisão entre as\nmoléculas envolvidas na reação."
  },
  {
    "id": "E",
    "type": "text",
    "value": "o aumento da temperatura da água, de 4 °C para 25 °C,\nlevou a um aumento na velocidade da reação, uma vez que\nfacilita a liberação de gás carbônico da solução, deslocando\no equilíbrio para a formação dos reagentes."
  }
],
    correct: 'D',
    explanation: `A dissolução ocorre mais rapidamente em água a 25 °C que a 4 °C, independentemente da presença de gás. A temperatura aumenta frequência e energia das colisões, favorecendo a reação. D explica o efeito observado sem atribuí-lo a grandes diferenças inexistentes por CO₂.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Considerando que baterias de Li‐FeS2 podem gerar uma
voltagem nominal de 1,5 V, o que as torna úteis no cotidiano e
que a primeira reação de descarga dessas baterias é
2 Li + FeS₂ → Li₂FeS₂, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O lítio metálico é oxidado na primeira descarga.` },
      { id: 'B', type: 'text', value: `O ferro é oxidado e o lítio é reduzido na primeira descarga.` },
      { id: 'C', type: 'text', value: `O lítio é o cátodo dessa bateria.` },
      { id: 'D', type: 'text', value: `A primeira reação de descarga forma lítio metálico.` },
      { id: 'E', type: 'text', value: `O lítio metálico e o dissulfeto ferroso estão em contato
direto dentro da bateria.` },
    ],
    correct: 'A',
    explanation: `Na descarga, Li metálico passa a íons Li⁺ ao perder elétrons, sofrendo oxidação e atuando como material anódico. A é correta. O processo não forma lítio metálico nem o coloca como cátodo.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Peptídeos podem ser analisados pelo tratamento com duas
enzimas. Uma delas, uma carboxipeptidase, quebra mais
rapidamente a ligação peptídica entre o aminoácido que tem
um grupo carboxílico livre e o seguinte. O tratamento com outra
enzima, uma aminopeptidase, quebra, mais rapidamente, a ligação
peptídica entre o aminoácido que tem um grupo amino livre e
o anterior. Isso permite identificar a sequência dos aminoácidos
no peptídeo.

Um tripeptídeo, formado pelos aminoácidos lisina, fenilalanina
e glicina, não necessariamente nessa ordem, foi submetido a
tratamento com carboxipeptidase, resultando em uma mistura
de um dipeptídeo e fenilalanina. O tratamento do mesmo
tripeptídeo com aminopeptidase resultou em uma mistura de
um outro dipeptídeo e glicina.

O número de combinações possíveis para os três aminoácidos
e a fórmula estrutural do peptídeo podem ser,
respectivamente,`,
    images: [{"src":"/fuvest/2019/images/q39_options.jpg","width":640,"height":818},{"src":"/fuvest/2019/images/q39_aminoacids.jpg","width":640,"height":185}],
    alternatives: [
      { id: 'A', type: 'text', value: `3 combinações e estrutura A da figura.` },
      { id: 'B', type: 'text', value: `3 combinações e estrutura B da figura.` },
      { id: 'C', type: 'text', value: `6 combinações e estrutura C da figura.` },
      { id: 'D', type: 'text', value: `6 combinações e estrutura D da figura.` },
      { id: 'E', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_q39_altE.jpg","width":640,"height":170} },
    ],
    correct: 'C',
    explanation: `Três aminoácidos diferentes podem ser ordenados de 3!=6 formas. A aminopeptidase libera glicina da extremidade amino; a carboxipeptidase libera fenilalanina da extremidade carboxila. A sequência é glicina–lisina–fenilalanina, representada em C.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Em um experimento, determinadas massas de ácido maleico e
acetona foram misturadas a 0 °C, preparando‐se duas misturas
idênticas. Uma delas (X) foi resfriada a ‐78 °C, enquanto a outra
(M) foi mantida a 0 °C. A seguir, ambas as misturas (M e X)
foram filtradas, resultando nas misturas N e Y. Finalmente, um
dos componentes de cada mistura foi totalmente retirado por
destilação. Os recipientes (marcados pelas letras O e Z)
representam o que restou de cada mistura após a destilação.
Nas figuras, as moléculas de cada componente estão
representadas por retângulos ou triângulos.

Tanto no recipiente M como no recipiente X, estão
representadas soluções ___I___ de ___II___, cuja solubilidade
___III___ com a diminuição da temperatura. A uma
determinada temperatura, as concentrações em M e N e em X
e Y são ___IV___. Em diferentes instantes, as moléculas
representadas por um retângulo pertencem a um composto
que pode estar ___V___ ou no estado ___VI___.

As lacunas que correspondem aos números de I a VI devem ser
corretamente preenchidas por:

Note e adote:
Composto | Ponto de fusão (°C) | Ponto de ebulição (°C)
Ácido maleico | 138 | 202
Acetona | −95 | 56
Considere que não houve perda do solvente durante a filtração.`,
    images: [{"src":"/fuvest/2019/images/q40_solutions.jpg","width":308,"height":333}],
    alternatives: [
      { id: 'A', type: 'text', value: `I: saturadas; II: acetona; III: aumenta; IV: diferentes; V: sólido; VI: líquido.` },
      { id: 'B', type: 'text', value: `I: homogêneas; II: ácido maleico; III: diminui; IV: iguais; V: dissolvido; VI: líquido.` },
      { id: 'C', type: 'text', value: `I: saturadas; II: ácido maleico; III: diminui; IV: iguais; V: dissolvido; VI: sólido.` },
      { id: 'D', type: 'text', value: `I: heterogêneas; II: acetona; III: aumenta; IV: diferentes; V: sólido; VI: sólido.` },
      { id: 'E', type: 'text', value: `I: saturadas; II: ácido maleico; III: diminui; IV: iguais; V: sólido; VI: líquido.` }
    ],
    correct: 'C',
    explanation: `A presença de soluto sólido em equilíbrio identifica soluções saturadas. O resfriamento precipita mais ácido maleico, mostrando menor solubilidade; filtrar não altera a concentração da fase líquida à mesma temperatura. Os retângulos representam ácido dissolvido ou sólido. A sequência correta é C.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O gráfico a seguir indica a temperatura de ebulição de
bromoalcanos (CnH2n+1Br) para diferentes tamanhos de cadeia
carbônica.


Considerando as propriedades periódicas dos halogênios, a
alternativa que descreve adequadamente o comportamento
expresso no gráfico de temperaturas de ebulição versus
tamanho de cadeia carbônica para CnH2n+1F ( ) e CnH2n+1I (•) é:

Note e adote: P.E. = ponto de ebulição.`,
    images: [{"src":"/fuvest/2019/images/q41_boiling.jpg","width":643,"height":383},{"src":"/fuvest/2019/images/q41_options.jpg","width":643,"height":731}],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "Gráfico A da figura."
  },
  {
    "id": "B",
    "type": "text",
    "value": "Gráfico B da figura."
  },
  {
    "id": "C",
    "type": "text",
    "value": "Gráfico C da figura."
  },
  {
    "id": "D",
    "type": "text",
    "value": "Gráfico D da figura."
  },
  {
    "id": "E",
    "type": "text",
    "value": "Gráfico E da figura."
  }
],
    correct: 'E',
    explanation: `Cadeias maiores intensificam forças de dispersão e elevam a ebulição em ambas as séries. O iodo, mais polarizável que o flúor, produz interações intermoleculares mais intensas e ebulição mais alta para a mesma cadeia. O gráfico E representa essas duas tendências.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O cinamaldeído é um dos principais compostos que dão o sabor
e o aroma da canela. Quando exposto ao ar, oxida conforme a
equação balanceada:

Uma amostra de 19,80 g desse composto puro foi exposta ao
ar por 74 dias e depois pesada novamente, sendo que a massa
final aumentou em 1,20 g. A porcentagem desse composto que
foi oxidada no período foi de

Note e adote: Massas molares (g/mol): Cinamaldeído = 132; O₂ = 32. Considere que não houve perda de cinamaldeído ou do produto de oxidação por evaporação.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q09_2.jpg","width":603,"height":128}],
    alternatives: [
      { id: 'A', type: 'text', value: `10%` },
      { id: 'B', type: 'text', value: `25%` },
      { id: 'C', type: 'text', value: `50%` },
      { id: 'D', type: 'text', value: `75%` },
      { id: 'E', type: 'text', value: `90%` },
    ],
    correct: 'C',
    explanation: `A oxidação de aldeído a ácido incorpora um átomo de oxigênio por molécula. O ganho de 1,20 g equivale a 1,20/16=0,075 mol oxidados. Havia 19,80/132=0,150 mol inicialmente; assim, 50% reagiram. Resposta C.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma postagem de humor na internet trazia como título “Provas
de que gatos são líquidos” e usava, como essas provas, fotos
reais de gatos, como as reproduzidas aqui.

Bored Panda. https://www.boredpanda.com. Adaptado.

O efeito de humor causado na associação do título com as fotos
baseia‐se no fato de que líquidos

Note e adote:
Considere temperatura e pressão ambientes.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q43_1.jpg","width":639,"height":182},{"src":"/fuvest/2019/images/fuvest_2019_f1q43_2.jpg","width":639,"height":182}],
    alternatives: [
      { id: 'A', type: 'text', value: `metálicos, em repouso, formam uma superfície refletora de
luz, como os pelos dos gatos.` },
      { id: 'B', type: 'text', value: `têm volume constante e forma variável, propriedade que os
gatos aparentam ter.` },
      { id: 'C', type: 'text', value: `moleculares são muito viscosos, como aparentam ser os
gatos em repouso.` },
      { id: 'D', type: 'text', value: `são muito compressíveis, mantendo forma mas ajustando o
volume ao do recipiente, como os gatos aparentam ser.` },
      { id: 'E', type: 'text', value: `moleculares são voláteis, necessitando estocagem em
recipientes fechados, como os gatos aparentam ser.` },
    ],
    correct: 'B',
    explanation: `Líquidos mantêm volume aproximadamente constante, mas assumem a forma do recipiente. As fotos sugerem que gatos acomodam seus corpos de modo semelhante, produzindo o humor. A propriedade correta está em B.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A bola de futebol que foi utilizada na Copa de 2018 foi chamada
Telstar 18. Essa bola contém uma camada interna de borracha
que pertence a uma classe de polímeros genericamente
chamada de EPDM. A fórmula estrutural de um exemplo desses
polímeros é

Polímeros podem ser produzidos pela polimerização de
compostos insaturados (monômeros) como exemplificado para
o polipropileno (um homopolímero):

Os monômeros que podem ser utilizados para preparar o co‐
polímero do tipo EPDM, cuja fórmula estrutural foi
apresentada, são`,
    images: [{"src":"/fuvest/2019/images/q44_polymer.jpg","width":640,"height":208},{"src":"/fuvest/2019/images/q44_example.jpg","width":640,"height":158},{"src":"/fuvest/2019/images/q44_options.jpg","width":640,"height":823}],
    alternatives: [
      { id: 'A', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_f1q44_altA.jpg","width":640,"height":131} },
      { id: 'B', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_f1q44_altB.jpg","width":640,"height":173} },
      { id: 'C', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_f1q44_altC.jpg","width":640,"height":173} },
      { id: 'D', type: 'image', value: {"src":"/fuvest/2019/images/fuvest_2019_f1q44_altD.jpg","width":640,"height":166} },
      { id: 'E', type: 'text', value: `Conjunto de monômeros E da figura.` },
    ],
    correct: 'D',
    explanation: `A unidade repetitiva permite reconhecer segmentos derivados de eteno e propeno e o dieno bicíclico com o padrão de substituição indicado. A combinação D fornece esses monômeros; é preciso conservar o esqueleto carbônico ao abrir as ligações usadas na polimerização.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um grão de milho de pipoca, visto a olho nu,
apresenta duas regiões distintas,
representadas por A e B na figura. Em A,
ocorre o tecido acumulador de amido, usado,
pela planta, para nutrir o embrião. Em B, os
tecidos vegetais possuem maior teor de água.
Ao ser aquecida, parte da água transforma‐se em vapor,
aumentando a pressão interna do grão. Quando a temperatura
atinge 177 °C, a pressão se torna suficiente para romper o grão,
que vira uma pipoca.
Um estudo feito por um grupo de pesquisadores determinou
que o interior do grão tem 4,5 mg de água da qual, no momento
imediatamente anterior ao seu rompimento, apenas 9% está
na fase vapor, atuando como um gás ideal e ocupando 0,1 mL.
Dessa forma, foi possível calcular a pressão Pfinal no momento
imediatamente anterior ao rompimento do grão.

A associação correta entre região do milho e Pfinal é dada por:

Note e adote:
Constante universal dos gases: R = 0,082 L.atm/(K.mol);
K = °C + 273;
Massas molares (g/mol): H = 1; O = 16.`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q45_1.jpg","width":134,"height":48},{"src":"/fuvest/2019/images/fuvest_2019_f1q45_2.jpg","width":134,"height":48},{"src":"/fuvest/2019/images/fuvest_2019_f1q45_3.jpg","width":134,"height":48}],
    alternatives: [
      { id: 'A', type: 'text', value: `A = endosperma e Pfinal = 8,3 atm.` },
      { id: 'B', type: 'text', value: `B = endosperma e Pfinal = 5,9 atm.` },
      { id: 'C', type: 'text', value: `A = xilema e Pfinal = 22,1 atm.` },
      { id: 'D', type: 'text', value: `B = xilema e Pfinal = 5,9 atm.` },
      { id: 'E', type: 'text', value: `B = endosperma e Pfinal = 92,0 atm.` },
    ],
    correct: 'A',
    explanation: `A região A é o endosperma, reserva de amido. A massa de vapor é 4,5×0,09=0,405 mg, ou 2,25×10⁻⁵ mol. Com T=450 K e V=10⁻⁴ L, P=nRT/V≈8,3 atm. Portanto, A.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Em uma família, o número de irmãs de cada filha é igual à
metade do número de irmãos. Cada filho tem o mesmo número
de irmãos e irmãs.

O número total de filhos e filhas da família é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4` },
      { id: 'B', type: 'text', value: `5` },
      { id: 'C', type: 'text', value: `7` },
      { id: 'D', type: 'text', value: `10` },
      { id: 'E', type: 'text', value: `15` },
    ],
    correct: 'C',
    explanation: `Se há f filhas e m filhos, cada filha tem f−1 irmãs e m irmãos: m=2(f−1). Cada filho tem m−1 irmãos e f irmãs: m−1=f. Resolvendo, f=3 e m=4; total 7. Alternativa C.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Se a função f: ℝ − {2} → ℝ é definida por f(x) = (2x + 1)/(x − 2) e a função g: ℝ − {2} → ℝ é definida por g(x) = f(f(x)), então g(x) é igual a`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "x/2"
  },
  {
    "id": "B",
    "type": "text",
    "value": "x²"
  },
  {
    "id": "C",
    "type": "text",
    "value": "2x"
  },
  {
    "id": "D",
    "type": "text",
    "value": "2x + 3"
  },
  {
    "id": "E",
    "type": "text",
    "value": "x"
  }
],
    correct: 'E',
    explanation: `Substituindo f(x) na própria expressão, g(x)=[2(2x+1)/(x−2)+1]/[(2x+1)/(x−2)−2]. O numerador simplifica para 5x/(x−2) e o denominador para 5/(x−2), resultando em x. Logo, E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Considere a função polinomial f: ℝ → ℝ definida por

f(x) = ax² + bx + c,

em que a, b, c ∈ ℝ e a ≠ 0. No plano cartesiano xy, a única intersecção da reta y = 2 com o gráfico de f é o ponto (2; 2) e a intersecção da reta x = 0 com o gráfico de f é o ponto (0; −6). O valor de a + b + c é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `−2` },
      { id: 'B', type: 'text', value: `0` },
      { id: 'C', type: 'text', value: `2` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `6` },
    ],
    correct: 'B',
    explanation: `A única interseção com y=2 identifica o vértice (2,2), logo f(x)=a(x−2)²+2. Como f(0)=−6, a=−2. Assim, a+b+c=f(1)=−2+2=0. Resposta B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um dono de restaurante assim descreveu a evolução do
faturamento quinzenal de seu negócio, ao longo dos dez
primeiros meses após a inauguração: “Até o final dos três
primeiros meses, tivemos uma velocidade de crescimento mais
ou menos constante, quando então sofremos uma queda
abrupta, com o faturamento caindo à metade do que tinha sido
atingido. Em seguida, voltamos a crescer, igualando, um mês e
meio depois dessa queda, o faturamento obtido ao final do
terceiro mês. Agora, ao final do décimo mês, estamos
estabilizando o faturamento em um patamar 50% acima do
faturamento obtido ao final do terceiro mês”.

Considerando que, na ordenada, o faturamento quinzenal está
representado em unidades desconhecidas, porém uniformemente
espaçadas, qual dos gráficos é compatível com a descrição do
comerciante?`,
    images: [{"src":"/fuvest/2019/images/q49_options.jpg","width":645,"height":808}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'E',
    explanation: `O gráfico deve crescer até o mês 3, cair à metade, recuperar o patamar anterior no mês 4,5 e estabilizar perto de 1,5 vez aquele valor ao mês 10. Apenas E reúne essas condições.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Forma‐se uma pilha de folhas de papel, em que cada folha tem
0,1 mm de espessura. A pilha é formada da seguinte maneira:
coloca‐se uma folha na primeira vez e, em cada uma das vezes
seguintes, tantas quantas já houverem sido colocadas
anteriormente. Depois de 33 dessas operações, a altura da
pilha terá a ordem de grandeza`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `da altura de um poste.` },
      { id: 'B', type: 'text', value: `da altura de um prédio de 30 andares.` },
      { id: 'C', type: 'text', value: `do comprimento da Av. Paulista.` },
      { id: 'D', type: 'text', value: `da distância da cidade de São Paulo (SP) à cidade do Rio de
Janeiro (RJ).` },
      { id: 'E', type: 'text', value: `do diâmetro da Terra.` },
    ],
    correct: 'D',
    explanation: `A quantidade de folhas dobra a cada operação: após 33 operações, são 2³² folhas. Com 0,1 mm cada, a altura é cerca de 4,29×10⁸ mm=429 km. Essa ordem de grandeza corresponde à distância São Paulo–Rio de Janeiro: D.`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A figura mostra uma escada maciça de quatro degraus, todos
eles com formato de um paralelepípedo reto‐retângulo. A base
de cada degrau é um retângulo de dimensões 20 cm por 50 cm,
e a diferença de altura entre o piso e o primeiro degrau e entre
os degraus consecutivos é de 10 cm. Se essa escada for
prolongada para ter 20 degraus, mantendo o mesmo padrão,
seu volume será igual a`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q54_1.jpg","width":367,"height":212}],
    alternatives: [
      { id: 'A', type: 'text', value: `2,1 m3` },
      { id: 'B', type: 'text', value: `2,3 m3` },
      { id: 'C', type: 'text', value: `3,0 m3` },
      { id: 'D', type: 'text', value: `4,2 m3` },
      { id: 'E', type: 'text', value: `6,0 m3` },
    ],
    correct: 'A',
    explanation: `Cada faixa horizontal tem base 0,20×0,50=0,10 m² e alturas 0,10; 0,20; …; 2,00 m. O volume é 0,10×0,10×(1+⋯+20)=0,01×210=2,1 m³. Logo, A.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma empresa estuda cobrir um vão entre dois prédios (com
formato de paralelepípedos reto‐retângulos) que têm paredes
laterais paralelas, instalando uma lona na forma de um
quadrilátero, com pontas presas nos pontos A , B , C e D ,
conforme indicação da figura.

Sabendo que a lateral de um prédio tem 80 m de altura e 28 m
de largura, que a lateral do outro prédio tem 60 m de altura e
20 m de largura e que essas duas paredes laterais distam 15 m
uma da outra, a área total dessa lona seria de`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q52_1.jpg","width":271,"height":222},{"src":"/fuvest/2019/images/q52_source_2.jpg","width":271,"height":112}],
    alternatives: [
      { id: 'A', type: 'text', value: `300 m2` },
      { id: 'B', type: 'text', value: `360 m2` },
      { id: 'C', type: 'text', value: `600 m2` },
      { id: 'D', type: 'text', value: `720 m2` },
      { id: 'E', type: 'text', value: `1.200 m2` },
    ],
    correct: 'C',
    explanation: `A lona é um trapézio com bases paralelas de 28 e 20 m. A distância entre essas bases sobre a lona é √(20²+15²)=25 m, considerando o desnível e o vão. Sua área é (28+20)×25/2=600 m²: C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Se log₂y = −1/2 + (2/3)log₂x, para x > 0, então`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `y = ∛(x²)/√2` },
      { id: 'B', type: 'text', value: `y = √(x³/2)` },
      { id: 'C', type: 'text', value: `y = −1/√2 + ∛(x²)` },
      { id: 'D', type: 'text', value: `y = √2 · ∛(x²)` },
      { id: 'E', type: 'text', value: `y = √(2x³)` },
    ],
    correct: 'A',
    explanation: `Aplicando a exponenciação de base 2, y=2⁻¹/²×2^[(2/3)log₂x]=x²/³/√2=∛(x²)/√2. A expressão está em A.`,
    subject: ['mat'],
    topics: ['Logaritmos', 'Funções exponenciais', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Um triângulo retângulo com vértices denominados A , B e C
apoia‐se sobre uma linha horizontal, que corresponde ao solo,
e gira sem escorregar no sentido horário. Isto é, se a posição
inicial é aquela mostrada na figura, o movimento começa com
uma rotação em torno do vértice C até o vértice A tocar o solo,
após o que passa a ser uma rotação em torno de A , até o vértice
B tocar o solo, e assim por diante.

Usando as dimensões indicadas na figura (AB = 1 e BC = 2),
qual é o comprimento da trajetória percorrida pelo vértice B,
desde a posição mostrada, até a aresta BC apoiar‐se no solo
novamente?

ଷ`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q54_2.jpg","width":653,"height":229}],
    alternatives: [
      { id: 'A', type: 'text', value: `3π/2` },
      { id: 'B', type: 'text', value: `[(3 + √3)/3]π` },
      { id: 'C', type: 'text', value: `13π/6` },
      { id: 'D', type: 'text', value: `[(3 + √3)/2]π` },
      { id: 'E', type: 'text', value: `[(8 + 2√3)/3]π` },
    ],
    correct: 'C',
    explanation: `Como BC=2 é a hipotenusa e AB=1, os ângulos em C e B são 30° e 60°. Ao girar sobre C, B percorre arco de raio 2 e ângulo 150°: 5π/3. Sobre A, percorre raio 1 por 90°: π/2. Sobre B, não se desloca. A soma é 13π/6: C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Uma seta aponta para a posição zero no instante inicial. A cada
rodada, ela poderá ficar no mesmo lugar ou mover‐se uma
unidade para a direita ou mover‐se uma unidade para a
esquerda, cada uma dessas três possibilidades com igual
probabilidade.

Qual é a probabilidade de que, após 5 rodadas, a seta volte à
posição inicial?

ଵ`,
    images: [{"src":"/fuvest/2019/images/q55_source_1.jpg","width":618,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `1/9` },
      { id: 'B', type: 'text', value: `17/81` },
      { id: 'C', type: 'text', value: `1/3` },
      { id: 'D', type: 'text', value: `51/125` },
      { id: 'E', type: 'text', value: `125/243` },
    ],
    correct: 'B',
    explanation: `Para voltar ao zero em cinco rodadas, há igual número de passos à esquerda e à direita. As contagens são 1 para nenhum passo lateral, 20 para um de cada e 30 para dois de cada. São 51 sequências em 3⁵=243, ou 17/81. Resposta B.`,
    subject: ['mat'],
    topics: ['Probabilidade', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O gráfico mostra a evolução diária, em certo intervalo de tempo
não especificado na abscissa, de dois índices econômicos,
normalizados para que suas médias, no mesmo período, sejam
ambas iguais a 1. O valor do índice 1 no dia i é xᵢ e o valor do
índice 2 no dia i é yᵢ. O gráfico ilustra como cada um dos índices
xᵢ e yᵢ varia em função de i, mostrando os pontos (i, xᵢ)
(pontos escuros) e (i, yᵢ) (pontos claros).

Para entender melhor a relação entre os dois índices, um novo
gráfico foi feito com os pares (xᵢ, yᵢ), isto é, com o índice 1 na
abscissa contra o índice 2 na ordenada. O resultado foi:`,
    images: [{"src":"/fuvest/2019/images/q56_indices.jpg","width":650,"height":373},{"src":"/fuvest/2019/images/q56_options.jpg","width":650,"height":990}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'B',
    explanation: `Quando o índice 1 cresce, o 2 tende a cair, e vice-versa. Os pares (xi,yi) apresentam associação aproximadamente linear negativa, com dispersão ao redor da diagonal decrescente. Isso corresponde ao gráfico B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Examine o cartum.

ITURRUSGARAI, Adão. A vida como ela yeah. Folha de S. Paulo, ago.2018.

O efeito de humor que se obtém no cartum decorre,
principalmente,`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q57_3.jpg","width":639,"height":202}],
    alternatives: [
      { id: 'A', type: 'text', value: `da expressão facial da personagem.` },
      { id: 'B', type: 'text', value: `do uso de uma ferramenta fora de contexto.` },
      { id: 'C', type: 'text', value: `da situação rotineira exposta pela imagem.` },
      { id: 'D', type: 'text', value: `da ambiguidade presente na expressão “quebre a cara”.` },
      { id: 'E', type: 'text', value: `do emprego de linguagem popular.` },
    ],
    correct: 'D',
    explanation: `“Quebrar a cara” pode significar frustrar-se ou sofrer um ferimento literal. O cartum relaciona a expressão ao objeto e à situação visual, explorando essa ambiguidade. Resposta D.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Mito, na acepção aqui empregada, não significa mentira,
falsidade ou mistificação. Tomo de empréstimo a formulação
de Hans Blumenberg do mito político como um processo
contínuo de trabalho de uma narrativa que responde a uma
necessidade prática de uma sociedade em determinado 5
período. Narrativa simbólica que é, o mito político coloca em
suspenso o problema da verdade. Seu discurso não pretende ter
validade factual, mas também não pode ser percebido como
mentira (do contrário, não seria mito). O mito político confere
um sentido às circunstâncias que envolvem os indivíduos: ao 1
fazê‐los ver sua condição presente como parte de uma história
em curso, ajuda a compreender e suportar o mundo em que
vivem.
ENGELKE, Antonio. O anjo redentor. Piauí, ago. 2018, ed. 143, p. 24.

De acordo com o texto, o “mito político”`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "prejudica o entendimento do mundo real."
  },
  {
    "id": "B",
    "type": "text",
    "value": "necessita da abstração do tempo."
  },
  {
    "id": "C",
    "type": "text",
    "value": "depende da verificação da verdade."
  },
  {
    "id": "D",
    "type": "text",
    "value": "é uma fantasia desvinculada da realidade."
  },
  {
    "id": "E",
    "type": "text",
    "value": "atende a situações concretas."
  }
],
    correct: 'E',
    explanation: `O mito político responde a necessidades práticas de uma sociedade, ajudando seus integrantes a interpretar e suportar circunstâncias concretas. O texto não o reduz a mentira nem exige verificação factual. Logo, E.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Mito, na acepção aqui empregada, não significa mentira,
falsidade ou mistificação. Tomo de empréstimo a formulação
de Hans Blumenberg do mito político como um processo
contínuo de trabalho de uma narrativa que responde a uma
necessidade prática de uma sociedade em determinado 5
período. Narrativa simbólica que é, o mito político coloca em
suspenso o problema da verdade. Seu discurso não pretende ter
validade factual, mas também não pode ser percebido como
mentira (do contrário, não seria mito). O mito político confere
um sentido às circunstâncias que envolvem os indivíduos: ao 1
fazê‐los ver sua condição presente como parte de uma história
em curso, ajuda a compreender e suportar o mundo em que
vivem.
ENGELKE, Antonio. O anjo redentor. Piauí, ago. 2018, ed. 143, p. 24.

Sobre o sujeito da oração “em que vivem” (L. 12‐13), é correto
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Expressa indeterminação, cabendo ao leitor deduzir a quem
se refere a ação verbal.` },
      { id: 'B', type: 'text', value: `Está oculto e visa evitar a repetição da palavra
“circunstâncias” (L. 10).` },
      { id: 'C', type: 'text', value: `É uma função sintática preenchida pelo pronome “que”
(L. 12).` },
      { id: 'D', type: 'text', value: `É indeterminado, tendo em vista que não é possível
identificar a quem se refere a ação verbal.` },
      { id: 'E', type: 'text', value: `Está oculto e seu referente é o mesmo do pronome “os” em
“fazê‐los” (L. 11).` },
    ],
    correct: 'E',
    explanation: `O sujeito de “vivem” é elíptico, recuperado como “os indivíduos”. É o mesmo referente do pronome “os” em “fazê-los”. Portanto, E; o sujeito não é indeterminado nem o pronome relativo “que”.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Sim, estou me associando à campanha nacional contra os
verbos que acabam em "ilizar". Se nada for feito, daqui a pouco
eles serão mais numerosos do que os terminados simplesmente
em "ar". Todos os dias os maus tradutores de livros de
marketing e administração disponibilizam mais e mais termos
infelizes, que imediatamente são operacionalizados pela mídia,
reinicializando palavras que já existiam e eram perfeitamente
claras e eufônicas.
A doença está tão disseminada que muitos verbos honestos,
com currículo de ótimos serviços prestados, estão a ponto de
cair em desgraça entre pessoas de ouvidos sensíveis. Depois que
você fica alérgico a disponibilizar, como você vai admitir,
digamos, "viabilizar"? É triste demorar tanto tempo para a
gente se dar conta de que "desincompatibilizar" sempre foi um
palavrão.
FREIRE, Ricardo. Complicabilizando. Época, ago. 2003.

Com base no texto, é correto afirmar:`,
    images: [],
    alternatives: [
  {
    "id": "A",
    "type": "text",
    "value": "A “campanha nacional” a que se refere o autor tem por\nobjetivo banir da língua portuguesa os verbos terminados\nem “ilizar”."
  },
  {
    "id": "B",
    "type": "text",
    "value": "O autor considera o emprego de verbos como\n“reinicializando” (L. 7) e “viabilizar” (L. 13) uma verdadeira\n“doença”."
  },
  {
    "id": "C",
    "type": "text",
    "value": "A maioria dos verbos terminados em “(i)lizar”, presentes no\ntexto, foi incorporada à língua por influência estrangeira."
  },
  {
    "id": "D",
    "type": "text",
    "value": "O autor, no final do primeiro parágrafo, acaba usando\ninvoluntariamente os verbos que ele condena."
  },
  {
    "id": "E",
    "type": "text",
    "value": "Os prefixos “des” e “in”, que entram na formação do verbo\n“desincompatibilizar” (L. 14), têm sentido oposto, por isso o\nautor o considera um “palavrão”."
  }
],
    correct: 'C',
    explanation: `O autor associa a expansão dos verbos a traduções de marketing e administração e ao uso pela mídia. C reconhece a influência estrangeira. O emprego dos verbos criticados é deliberado e humorístico, não um deslize involuntário.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Seria difícil encontrar hoje um crítico literário respeitável
que gostasse de ser apanhado defendendo como uma ideia a
velha antítese estilo e conteúdo. A esse respeito prevalece um
religioso consenso. Todos estão prontos a reconhecer que estilo
e conteúdo são indissolúveis, que o estilo fortemente individual
de cada escritor importante é um elemento orgânico de sua
obra e jamais algo meramente “decorativo”.
Na prática da crítica, entretanto, a velha antítese persiste
praticamente inexpugnada.

Susan Sontag. “Do estilo”. Contra a interpretação.

Consideradas no contexto, as expressões “religioso consenso”,
“orgânico” e “inexpugnada”, sublinhadas no texto, podem ser
substituídas, sem alteração de sentido, respectivamente, por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `místico entendimento; biológico; invencível.` },
      { id: 'B', type: 'text', value: `piedoso acordo; puro; inesgotável.` },
      { id: 'C', type: 'text', value: `secular conformidade; natural; incompreensível.` },
      { id: 'D', type: 'text', value: `fervorosa unanimidade; visceral; insuperada.` },
      { id: 'E', type: 'text', value: `espiritual ajuste; vital; indomada.` },
    ],
    correct: 'D',
    explanation: `“Religioso consenso” exprime adesão fervorosa e unânime; “orgânico” indica integração visceral à obra; “inexpugnada” significa ainda não superada. A sequência contextual correta é D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Examine o anúncio.

Ministério Público do Trabalho no Rio Grande do Sul.

No contexto do anúncio, a frase “A diferença tem que ser só
uma letra” pressupõe a`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q15_3.jpg","width":674,"height":159},{"src":"/fuvest/2019/images/fuvest_2019_f1q15_4.jpg","width":674,"height":159}],
    alternatives: [
      { id: 'A', type: 'text', value: `necessidade de leis de proteção para todos que trabalham.` },
      { id: 'B', type: 'text', value: `existência de desigualdade entre homens e mulheres no
mercado de trabalho.` },
      { id: 'C', type: 'text', value: `permanência de preconceito racial na contratação de
mulheres para determinadas profissões.` },
      { id: 'D', type: 'text', value: `importância de campanhas dirigidas para a mulher
trabalhadora.` },
      { id: 'E', type: 'text', value: `discriminação de gênero que se manifesta na própria
linguagem.` },
    ],
    correct: 'B',
    explanation: `A reivindicação de diferença apenas na letra pressupõe que atualmente há desigualdade material entre trabalhadores e trabalhadoras. O anúncio combate essa assimetria de gênero no mercado de trabalho. Resposta B.`,
    subject: ['fil'],
    topics: ['Direitos humanos', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `I. Diante da dificuldade, municípios de diferentes regiões do
país realizaram um segundo “dia D” neste sábado. O
primeiro ocorreu em 18 de agosto. A adesão, no entanto,
ainda ficou abaixo do esperado. Agora, a recomendação é
que estados e municípios façam busca ativa para garantir
que todo o público‐alvo da campanha seja vacinado.

Folha de S. Paulo. São Paulo. 03/09/2018.

II. Pensar sobre a vaga, buscar conhecer a empresa e o que ela
busca já faz de você alguém especial. Muitos que procuram
o balcão de emprego não compreendem que os detalhes são
fundamentais para conseguir a recolocação. Agora, não
pense que você vai conseguir na primeira investida, a busca
por um novo emprego requer paciência e persistência, tenha
você 20 anos ou 50.

Balcão de Emprego. Disponível em: <https://empregabrasil.com.br/>

O termo “Agora” pode ser substituído, respectivamente, em I e
II e sem prejuízo de sentidos nos dois textos, por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Neste momento; Por conseguinte.` },
      { id: 'B', type: 'text', value: `Neste ínterim; De fato.` },
      { id: 'C', type: 'text', value: `Portanto; Ademais.` },
      { id: 'D', type: 'text', value: `Todavia; Então.` },
      { id: 'E', type: 'text', value: `Doravante; Mas.` },
    ],
    correct: 'E',
    explanation: `No primeiro trecho, “agora” aponta a recomendação a ser seguida daqui em diante: doravante. No segundo, muda o rumo do argumento e introduz uma ressalva: mas. A correspondência é E.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `I. Surge então a pergunta: se a fantasia funciona como
realidade; se não conseguimos agir senão mutilando o
nosso eu; se o que há de mais profundo em nós é no fim de
contas a opinião dos outros; se estamos condenados a não
atingir o que nos parece realmente valioso –, qual a
diferença entre o bem e o mal, o justo e o injusto, o certo e
o errado? O autor passou a vida a ilustrar esta pergunta, que
é modulada de maneira exemplar no primeiro e mais
conhecido dos seus grandes romances de maturidade.

II. É preciso todavia lembrar que essa ligação com o problema
geográfico e social só adquire significado pleno, isto é, só
atua sobre o leitor, graças à elevada qualidade artística do
livro. O seu autor soube transpor o ritmo mesológico para a
própria estrutura da narrativa, mobilizando recursos que a
fazem parecer movida pela mesma fatalidade sem saída.
(...) Da consciência mortiça da personagem podem emergir
os transes periódicos em que se estorce o homem esmagado
pela paisagem e pelos outros homens.

Nos fragmentos I e II, aqui adaptados, o crítico Antonio Candido
avalia duas obras literárias, que são, respectivamente,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A Relíquia e Sagarana.` },
      { id: 'B', type: 'text', value: `O Cortiço e Iracema.` },
      { id: 'C', type: 'text', value: `Sagarana e O Cortiço.` },
      { id: 'D', type: 'text', value: `Mayombe e Minha Vida de Menina.` },
      { id: 'E', type: 'text', value: `Memórias Póstumas de Brás Cubas e Vidas Secas.` },
    ],
    correct: 'E',
    explanation: `O primeiro fragmento trata da investigação moral e psicológica de Machado em Memórias póstumas de Brás Cubas. O segundo descreve a integração entre ambiente, opressão e estrutura narrativa em Vidas secas. A dupla está em E.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Atente para as seguintes afirmações relativas ao desfecho do
romance A Relíquia, de Eça de Queirós:

I. O autor revela, por meio de Teodorico, sua descrença num
Jesus divinizado, imagem que é substituída pela ideia de
Consciência.
II. Ao ser sincero com Crispim, Teodorico conquista a vida de
burguês que sempre almejou.
III. Teodorico dá ouvidos à mensagem de Cristo, arrepende‐se
de sua hipocrisia beata e abraça a fé católica.

Está correto o que se afirma apenas em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `I e II.` },
      { id: 'D', type: 'text', value: `II e III.` },
      { id: 'E', type: 'text', value: `I e III.` },
    ],
    correct: 'C',
    explanation: `O desfecho contrapõe a divinização externa de Jesus à Consciência e mostra Teodorico alcançar a vida burguesa por sua relação franca com Crispim. I e II são corretas. Não há conversão penitente à devoção católica, tornando III falsa. Logo, C.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O povo que chupa o caju, a manga, o cambucá e a jabuticaba,
pode falar uma língua com igual pronúncia e o mesmo espírito
do povo que sorve o figo, a pera, o damasco e a nêspera?

José de Alencar. Bênção Paterna. Prefácio a Sonhos d’ouro.

A graciosa ará, sua companheira e amiga, brinca junto dela. Às
vezes sobe aos ramos da árvore e de lá chama a virgem pelo
nome, outras remexe o uru de palha matizada, onde traz a
selvagem seus perfumes, os alvos fios do crautá, as agulhas da
juçara com que tece a renda e as tintas de que matiza o
algodão.
José de Alencar. Iracema.

Glossário:
“ará”: periquito; “uru”: cesto; “crautá”: espécie de bromélia; “juçara”: tipo de
palmeira espinhosa.

Com base nos trechos acima, é adequado afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Para Alencar, a literatura brasileira deveria ser capaz de
representar os valores nacionais com o mesmo espírito do
europeu que sorve o figo, a pera, o damasco e a nêspera.` },
      { id: 'B', type: 'text', value: `Ao discutir, no primeiro trecho, a importação de ideias e
costumes, Alencar propõe uma literatura baseada no
abrasileiramento da língua portuguesa, como se verifica no
segundo trecho.` },
      { id: 'C', type: 'text', value: `O contraste entre os verbos “chupar” e “sorver”,
empregados no primeiro trecho, revela o rebaixamento de
linguagem buscado pelo escritor em Iracema.` },
      { id: 'D', type: 'text', value: `Em Iracema, a construção de uma literatura exótica, tal
como se verifica no segundo trecho, pautou‐se pela recusa
de nossos elementos naturais.` },
      { id: 'E', type: 'text', value: `Ambos os trechos são representativos da tendência
escapista de nosso romantismo, na medida em que
valorizam os elementos naturais em detrimento da
realidade rotineira.` },
    ],
    correct: 'B',
    explanation: `Alencar defende que uma realidade brasileira distinta se expresse também em língua literária própria. O vocabulário indígena e os elementos naturais de Iracema concretizam esse abrasileiramento. A leitura adequada está em B.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `O povo que chupa o caju, a manga, o cambucá e a jabuticaba,
pode falar uma língua com igual pronúncia e o mesmo espírito
do povo que sorve o figo, a pera, o damasco e a nêspera?

José de Alencar. Bênção Paterna. Prefácio a Sonhos d’ouro.

A graciosa ará, sua companheira e amiga, brinca junto dela. Às
vezes sobe aos ramos da árvore e de lá chama a virgem pelo
nome, outras remexe o uru de palha matizada, onde traz a
selvagem seus perfumes, os alvos fios do crautá, as agulhas da
juçara com que tece a renda e as tintas de que matiza o
algodão.
José de Alencar. Iracema.

Glossário:
“ará”: periquito; “uru”: cesto; “crautá”: espécie de bromélia; “juçara”: tipo de
palmeira espinhosa.

No trecho “outras remexe o uru de palha matizada”, a palavra
sublinhada expressa ideia de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `concessão.` },
      { id: 'B', type: 'text', value: `finalidade.` },
      { id: 'C', type: 'text', value: `adição.` },
      { id: 'D', type: 'text', value: `tempo.` },
      { id: 'E', type: 'text', value: `consequência.` },
    ],
    correct: 'D',
    explanation: `“Outras” retoma elipticamente “vezes”: às vezes o periquito sobe à árvore; outras vezes remexe o cesto. O valor é temporal, alternativa D, não de adição ou consequência.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Sonetilho do falso Fernando Pessoa

Onde nasci, morri.
Onde morri, existo.
E das peles que visto
muitas há que não vi.

Sem mim como sem ti
posso durar. Desisto
de tudo quanto é misto
e que odiei ou senti.

Nem Fausto nem Mefisto,
à deusa que se ri
deste nosso oaristo*,

eis-me a dizer: assisto
além, nenhum, aqui,
mas não sou eu, nem isto.

Carlos Drummond de Andrade. Claro Enigma.
*conversa íntima entre casais.

Ulisses

O mito é o nada que é tudo.
O mesmo sol que abre os céus
É um mito brilhante e mudo —
O corpo morto de Deus,
Vivo e desnudo.

Este, que aqui aportou,
Foi por não ser existindo.
Sem existir nos bastou.
Por não ter vindo foi vindo
E nos criou.

Assim a lenda se escorre
A entrar na realidade,
E a fecundá-la decorre.
Em baixo, a vida, metade
De nada, morre.

Fernando Pessoa. Mensagem.

Considerando os poemas, assinale a alternativa correta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As noções de que a identidade do poeta independe de sua
existência biográfica, no “Sonetilho”, e de que o mito se
perpetua para além da vida, em “Ulisses”, produzem uma
analogia entre os poemas.` },
      { id: 'B', type: 'text', value: `As referências a Mefisto (“diabo”, na lenda alemã de
Fausto) e a Deus no “Sonetilho” e em “Ulisses”,
respectivamente, associadas ao polo de opostos “morte” e
“vida”, revelam uma perspectiva cristã comum aos poemas.` },
      { id: 'C', type: 'text', value: `O resgate da forma clássica, no “Sonetilho”, e a referência à
primeira pessoa do plural, em “Ulisses”, denotam um
mesmo espírito agregador e comunitário.` },
      { id: 'D', type: 'text', value: `O eu lírico de cada poema se identifica, respectivamente,
com seus títulos. No poema de Drummond, trata‐se de
alguém referido como “falso Fernando Pessoa”, já no
poema de Pessoa, o eu lírico é “Ulisses”.` },
      { id: 'E', type: 'text', value: `Os versos “As coisas tangíveis / tornam‐se insensíveis / à
palma da mão. // Mas as coisas findas, / muito mais que
lindas, / essas ficarão”, de outro poema de Claro Enigma,
sugerem uma relação de contraste com os poemas citados.` },
    ],
    correct: 'A',
    explanation: `O Sonetilho problematiza uma identidade que ultrapassa a biografia individual; Ulisses trata da eficácia do mito para além de uma existência factual. A aproximação entre permanência simbólica e limites da vida produz a analogia indicada em A.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Sonetilho do falso Fernando Pessoa

Onde nasci, morri.
Onde morri, existo.
E das peles que visto
muitas há que não vi.

Sem mim como sem ti
posso durar. Desisto
de tudo quanto é misto
e que odiei ou senti.

Nem Fausto nem Mefisto,
à deusa que se ri
deste nosso oaristo*,

eis-me a dizer: assisto
além, nenhum, aqui,
mas não sou eu, nem isto.

Carlos Drummond de Andrade. Claro Enigma.
*conversa íntima entre casais.

Ulisses

O mito é o nada que é tudo.
O mesmo sol que abre os céus
É um mito brilhante e mudo —
O corpo morto de Deus,
Vivo e desnudo.

Este, que aqui aportou,
Foi por não ser existindo.
Sem existir nos bastou.
Por não ter vindo foi vindo
E nos criou.

Assim a lenda se escorre
A entrar na realidade,
E a fecundá-la decorre.
Em baixo, a vida, metade
De nada, morre.

Fernando Pessoa. Mensagem.

O oxímoro é uma “figura em que se combinam palavras de
sentido oposto que parecem excluir‐se mutuamente, mas que,
no contexto, reforçam a expressão” (HOUAISS, 2001). No
poema “Sonetilho do falso Fernando Pessoa”, o emprego dessa
figura de linguagem ocorre em:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“Onde morri, existo” (L. 2).` },
      { id: 'B', type: 'text', value: `“E das peles que visto / muitas há que não vi” (L. 3‐4).` },
      { id: 'C', type: 'text', value: `“Desisto / de tudo quanto é misto / e que odiei ou senti”
(L. 6‐8).` },
      { id: 'D', type: 'text', value: `“à deusa que se ri / deste nosso oaristo” (L. 10‐11).` },
      { id: 'E', type: 'text', value: `“mas não sou eu, nem isto” (L. 14).` },
    ],
    correct: 'A',
    explanation: `“Onde morri, existo” reúne morte e existência, termos aparentemente excludentes, para intensificar o paradoxo do sujeito. É um oxímoro, presente em A.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `E grita a piranha cor de palha, irritadíssima:
– Tenho dentes de navalha, e com um pulo de ida‐e‐volta
resolvo a questão!...
– Exagero... – diz a arraia – eu durmo na areia, de ferrão a
prumo, e sempre há um descuidoso que vem se espetar.
– Pois, amigas, – murmura o gimnoto*, mole, carregando a
bateria – nem quero pensar no assunto: se eu soltar três
pensamentos elétricos, bate‐poço, poço em volta, até vocês
duas boiarão mortas...

*peixe elétrico.

Esse texto, extraído de Sagarana, de Guimarães Rosa,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `antecipa o destino funesto do ex‐militar Cassiano Gomes e
do marido traído Turíbio Todo, em “Duelo”, ao qual serve
como epígrafe.` },
      { id: 'B', type: 'text', value: `assemelha‐se ao caráter existencial da disputa entre
Brilhante, Dansador e Rodapião na novela “Conversa de
Bois”.` },
      { id: 'C', type: 'text', value: `reúne as três figurações do protagonista da novela “A hora
e vez de Augusto Matraga”, assim denominados: Augusto
Estêves, Nhô Augusto e Augusto Matraga.` },
      { id: 'D', type: 'text', value: `representa o misticismo e a atmosfera de feitiçaria que
envolve o preto velho João Mangalô e sua desavença com o
narrador‐personagem José, em “São Marcos”.` },
      { id: 'E', type: 'text', value: `constitui uma das cantigas de “O burrinho Pedrês”, em que
a sagacidade da boiada se sobressai à ignorância do
burrinho.` },
    ],
    correct: 'A',
    explanation: `A disputa entre piranha, arraia e peixe elétrico antecipa estratégias de violência e o destino dos perseguidores em Duelo. A epígrafe alude ao enredo de Cassiano Gomes e Turíbio Todo. Portanto, A.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `I. Cinquenta anos! Não era preciso confessá‐lo. Já se vai
sentindo que o meu estilo não é tão lesto* como nos primeiros
dias. Naquela ocasião, cessado o diálogo com o oficial da
marinha, que enfiou a capa e saiu, confesso que fiquei um pouco
triste. Voltei à sala, lembrou‐me dançar uma polca, embriagar‐
me das luzes, das flores, dos cristais, dos olhos bonitos, e do
burburinho surdo e ligeiro das conversas particulares. E não me
arrependo; remocei. Mas, meia hora depois, quando me retirei
do baile, às quatro da manhã, o que é que fui achar no fundo do
carro? Os meus cinquenta anos.

*ágil

II. Meu caro crítico,
Algumas páginas atrás, dizendo eu que tinha
cinquenta anos, acrescentei: “Já se vai sentindo que o meu
estilo não é tão lesto como nos primeiros dias”. Talvez aches
esta frase incompreensível, sabendo‐se o meu atual estado;
mas eu chamo a tua atenção para a sutileza daquele
pensamento. O que eu quero dizer não é que esteja agora mais
velho do que quando comecei o livro. A morte não envelhece.
Quero dizer, sim, que em cada fase da narração da minha vida
experimento a sensação correspondente. Valha‐me Deus! é
preciso explicar tudo.

Machado de Assis, Memórias Póstumas de Brás Cubas.

Entre os dois trechos do romance, nota‐se o movimento que vai
da memória de vivências à revisão que o defunto autor faz de
um mesmo episódio. A citação, pertencente a outro capítulo do
mesmo livro, que melhor sintetiza essa duplicidade narrativa,
é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“A conclusão, portanto, é que há duas forças capitais: o
amor, que multiplica a espécie, e o nariz, que a subordina
ao indivíduo”.` },
      { id: 'B', type: 'text', value: `“Obra de finado. Escrevi‐a com a pena da galhofa e a tinta
da melancolia, e não é difícil perceber o que poderá sair
desse conúbio”.` },
      { id: 'C', type: 'text', value: `“Mas o livro é enfadonho, cheira a sepulcro, traz certa
contração cadavérica; vício grave, e aliás ínfimo, porque o
maior defeito do livro és tu, leitor”.` },
      { id: 'D', type: 'text', value: `“Viver não é a mesma cousa que morrer; assim o afirmam
todos os joalheiros desse mundo, gente muito vista na
gramática”.` },
      { id: 'E', type: 'text', value: `“Não havia ali a atmosfera somente da águia e do beija‐flor;
havia também a da lesma e do sapo”.` },
    ],
    correct: 'B',
    explanation: `O narrador combina revivescência melancólica do passado e distanciamento jocoso de quem já morreu. A “pena da galhofa” e a “tinta da melancolia” resumem essa duplicidade. A citação correspondente é B.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `I. Cinquenta anos! Não era preciso confessá‐lo. Já se vai
sentindo que o meu estilo não é tão lesto* como nos primeiros
dias. Naquela ocasião, cessado o diálogo com o oficial da
marinha, que enfiou a capa e saiu, confesso que fiquei um pouco
triste. Voltei à sala, lembrou‐me dançar uma polca, embriagar‐
me das luzes, das flores, dos cristais, dos olhos bonitos, e do
burburinho surdo e ligeiro das conversas particulares. E não me
arrependo; remocei. Mas, meia hora depois, quando me retirei
do baile, às quatro da manhã, o que é que fui achar no fundo do
carro? Os meus cinquenta anos.

*ágil

II. Meu caro crítico,
Algumas páginas atrás, dizendo eu que tinha
cinquenta anos, acrescentei: “Já se vai sentindo que o meu
estilo não é tão lesto como nos primeiros dias”. Talvez aches
esta frase incompreensível, sabendo‐se o meu atual estado;
mas eu chamo a tua atenção para a sutileza daquele
pensamento. O que eu quero dizer não é que esteja agora mais
velho do que quando comecei o livro. A morte não envelhece.
Quero dizer, sim, que em cada fase da narração da minha vida
experimento a sensação correspondente. Valha‐me Deus! é
preciso explicar tudo.

Machado de Assis, Memórias Póstumas de Brás Cubas.

A passagem final do texto II – “Valha‐me Deus! é preciso
explicar tudo.” – denota um elemento presente no estilo do
romance, ou seja,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o realismo, visto no rigor explicativo dos fatos.` },
      { id: 'B', type: 'text', value: `a religiosidade, que se socorre do auxílio divino.` },
      { id: 'C', type: 'text', value: `o humor, capaz de relativizar as ideias.` },
      { id: 'D', type: 'text', value: `a metalinguagem, que imprime linearidade à narração.` },
      { id: 'E', type: 'text', value: `a ironia, própria do discurso positivo.` },
    ],
    correct: 'C',
    explanation: `Ao reclamar que precisa explicar tudo ao crítico, o defunto autor ironiza a própria exposição e relativiza suas afirmações. O humor marca a interlocução com o leitor e impede uma explicação dogmática. Logo, C.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `What time is it? That simple question probably is asked more
often today than ever. In our clock‐studded, cell‐phone society,
the answer is never more than a glance away, and so we can
blissfully partition our days into ever smaller increments for ever
more tightly scheduled tasks, confident that we will always 5
know it is 7:03 P.M.
Modern scientific revelations about time, however, make
the question endlessly frustrating. If we seek a precise
knowledge of the time, the elusive infinitesimal of “now”
dissolves into a scattering flock of nanoseconds. Bound by the 1
speed of light and the velocity of nerve impulses, our
perceptions of the present sketch the world as it was an instant
ago—for all that our consciousness pretends otherwise, we can
never catch up.
Even in principle, perfect synchronicity escapes us. Relativity 1
dictates that, like a strange syrup, time flows slower on moving
trains than in the stations and faster in the mountains than in
the valleys. The time for our wristwatch or digital screen is not
exactly the same as the time for our head.
Our intuitions are deeply paradoxical. Time heals all 2
wounds, but it is also the great destroyer. Time is relative but
also relentless. There is time for every purpose under heaven,
but there is never enough.

Scientific American, October 24, 2014. Adaptado.

No texto, a pergunta “What time is it?” (L. 1), inserida no
debate da ciência moderna sobre a noção de tempo,`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q68_1.jpg","width":313,"height":198}],
    alternatives: [
      { id: 'A', type: 'text', value: `corrobora a crença de que a passagem do tempo é uma
garantia de renovação para a humanidade.` },
      { id: 'B', type: 'text', value: `consiste na prova de que “o agora” é a realização de uma
troca harmoniosa com o mundo.` },
      { id: 'C', type: 'text', value: `representa a obsessão dos seres humanos pelo controle da
vida com auxílio do relógio.` },
      { id: 'D', type: 'text', value: `revela o esforço empreendido pelas pessoas na distribuição
das tarefas ao longo do dia.` },
      { id: 'E', type: 'text', value: `mostra o descompasso e a imprecisão relativos à percepção
do presente e do passado.` },
    ],
    correct: 'E',
    explanation: `A pergunta cotidiana parece ter resposta instantânea, mas ciência, percepção e relatividade mostram que nunca captamos um presente perfeitamente sincronizado. A discussão enfatiza esse descompasso temporal e a imprecisão da percepção. Resposta E.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `What time is it? That simple question probably is asked more
often today than ever. In our clock‐studded, cell‐phone society,
the answer is never more than a glance away, and so we can
blissfully partition our days into ever smaller increments for ever
more tightly scheduled tasks, confident that we will always 5
know it is 7:03 P.M.
Modern scientific revelations about time, however, make
the question endlessly frustrating. If we seek a precise
knowledge of the time, the elusive infinitesimal of “now”
dissolves into a scattering flock of nanoseconds. Bound by the 1
speed of light and the velocity of nerve impulses, our
perceptions of the present sketch the world as it was an instant
ago—for all that our consciousness pretends otherwise, we can
never catch up.
Even in principle, perfect synchronicity escapes us. Relativity 1
dictates that, like a strange syrup, time flows slower on moving
trains than in the stations and faster in the mountains than in
the valleys. The time for our wristwatch or digital screen is not
exactly the same as the time for our head.
Our intuitions are deeply paradoxical. Time heals all 2
wounds, but it is also the great destroyer. Time is relative but
also relentless. There is time for every purpose under heaven,
but there is never enough.

Scientific American, October 24, 2014. Adaptado.

No texto, a expressão que melhor representa o caráter
supostamente exato do tempo é:`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q68_1.jpg","width":313,"height":198}],
    alternatives: [
      { id: 'A', type: 'text', value: `“In our clock‐studded, cell‐phone society” (L. 2).` },
      { id: 'B', type: 'text', value: `“never more than a glance away” (L. 3).` },
      { id: 'C', type: 'text', value: `“confident that we will always know it is 7:03 P.M.” (L. 5‐6).` },
      { id: 'D', type: 'text', value: `“Bound by the speed of light” (L. 10‐11).` },
      { id: 'E', type: 'text', value: `“like a strange syrup” (L. 16).` },
    ],
    correct: 'C',
    explanation: `A confiança em saber que são exatamente 7:03 da tarde representa a aparência de precisão oferecida pelos relógios. A expressão selecionada por C traduz essa segurança que o restante do texto problematiza.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `What time is it? That simple question probably is asked more
often today than ever. In our clock‐studded, cell‐phone society,
the answer is never more than a glance away, and so we can
blissfully partition our days into ever smaller increments for ever
more tightly scheduled tasks, confident that we will always 5
know it is 7:03 P.M.
Modern scientific revelations about time, however, make
the question endlessly frustrating. If we seek a precise
knowledge of the time, the elusive infinitesimal of “now”
dissolves into a scattering flock of nanoseconds. Bound by the 1
speed of light and the velocity of nerve impulses, our
perceptions of the present sketch the world as it was an instant
ago—for all that our consciousness pretends otherwise, we can
never catch up.
Even in principle, perfect synchronicity escapes us. Relativity 1
dictates that, like a strange syrup, time flows slower on moving
trains than in the stations and faster in the mountains than in
the valleys. The time for our wristwatch or digital screen is not
exactly the same as the time for our head.
Our intuitions are deeply paradoxical. Time heals all 2
wounds, but it is also the great destroyer. Time is relative but
also relentless. There is time for every purpose under heaven,
but there is never enough.

Scientific American, October 24, 2014. Adaptado.

De acordo com o texto, considera‐se contraditório, em relação
à percepção humana do tempo,`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q68_1.jpg","width":313,"height":198}],
    alternatives: [
      { id: 'A', type: 'text', value: `seu poder de cura e destruição.` },
      { id: 'B', type: 'text', value: `sua natureza pública e privada.` },
      { id: 'C', type: 'text', value: `seu caráter ordenado e irregular.` },
      { id: 'D', type: 'text', value: `seu sentido de submissão e liberdade.` },
      { id: 'E', type: 'text', value: `seu grau de abundância e desperdício.` },
    ],
    correct: 'A',
    explanation: `O texto afirma que o tempo cura feridas e também é grande destruidor. Esses atributos contrapostos constituem uma das percepções humanas paradoxais sobre ele. Alternativa A.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `For most, The Gateway International Bridge functions as
it should, allowing people to get between the U.S. and
Mexico. But on a hot Sunday afternoon, a dozen migrants at
the mouth of the bridge weren’t getting anywhere at all.
They had been told, once again, to wait.
At a press conference the next day, President Trump once
again touted the border wall he has promised supporters.
“The wall is getting longer and taller and stronger each and
every day”, he said, even though construction has not
begun. The President’s characterization of the physical wall
was false, but his Administration has effectively erected an
invisible one.
It is built, in part, from situations like the one at the
bridge, which illustrates the problem with this kind of
barrier. The practices that Trump praises for keeping out
criminals also punish those who are trying to follow the
rules.
Those migrants who spoke to TIME at the bridge had
varied stories but shared a determination to cross. Some
understood a bit of what could happen to them next. How
long could it take to get processed? And if they did
ultimately apply for asylum, it remained to be seen whether
their stories would qualify. The regulations governing such
matters are complicated, and the vast majority who apply
are rejected. But in theory, their fates would be decided at
immigration courts, not at the border.

TIME, August 23, 2018. Adaptado.

De acordo com o texto, para ingresso nos Estados Unidos, o
cruzamento da fronteira entre este país e o México, no local
denominado The Gateway International Bridge, é`,
    images: [{"src":"/fuvest/2019/images/q76_source_1.jpg","width":321,"height":107},{"src":"/fuvest/2019/images/q76_source_2.jpg","width":321,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `dificultado para alguns migrantes.` },
      { id: 'B', type: 'text', value: `negado para casos de reincidentes.` },
      { id: 'C', type: 'text', value: `adiado para os migrantes que seguem as regras.` },
      { id: 'D', type: 'text', value: `condicionado à nacionalidade do solicitante.` },
      { id: 'E', type: 'text', value: `liberado para os migrantes com documentação válida.` },
    ],
    correct: 'A',
    explanation: `A ponte permite circulação para muitos, mas o grupo de migrantes descrito é obrigado a aguardar repetidamente. A passagem é, portanto, dificultada para alguns migrantes, como indica A, sem uma proibição uniforme a todos.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `For most, The Gateway International Bridge functions as
it should, allowing people to get between the U.S. and
Mexico. But on a hot Sunday afternoon, a dozen migrants at
the mouth of the bridge weren’t getting anywhere at all.
They had been told, once again, to wait.
At a press conference the next day, President Trump once
again touted the border wall he has promised supporters.
“The wall is getting longer and taller and stronger each and
every day”, he said, even though construction has not
begun. The President’s characterization of the physical wall
was false, but his Administration has effectively erected an
invisible one.
It is built, in part, from situations like the one at the
bridge, which illustrates the problem with this kind of
barrier. The practices that Trump praises for keeping out
criminals also punish those who are trying to follow the
rules.
Those migrants who spoke to TIME at the bridge had
varied stories but shared a determination to cross. Some
understood a bit of what could happen to them next. How
long could it take to get processed? And if they did
ultimately apply for asylum, it remained to be seen whether
their stories would qualify. The regulations governing such
matters are complicated, and the vast majority who apply
are rejected. But in theory, their fates would be decided at
immigration courts, not at the border.

TIME, August 23, 2018. Adaptado.

A frase nominal “this kind of barrier” (L. 14‐15) refere‐se`,
    images: [{"src":"/fuvest/2019/images/q76_source_1.jpg","width":321,"height":107},{"src":"/fuvest/2019/images/q76_source_2.jpg","width":321,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `ao muro de Trump na fronteira com o México.` },
      { id: 'B', type: 'text', value: `à ponte The Gateway International Bridge.` },
      { id: 'C', type: 'text', value: `a protestos de migrantes na fronteira.` },
      { id: 'D', type: 'text', value: `ao muro invisível criado por práticas do governo Trump.` },
      { id: 'E', type: 'text', value: `a medidas adotadas nos tribunais de imigração.` },
    ],
    correct: 'D',
    explanation: `“This kind of barrier” retoma a barreira invisível produzida pelas práticas administrativas do governo, não uma parede material já construída. O texto diz que essas práticas atingem inclusive quem tenta seguir as regras. Logo, D.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `For most, The Gateway International Bridge functions as
it should, allowing people to get between the U.S. and
Mexico. But on a hot Sunday afternoon, a dozen migrants at
the mouth of the bridge weren’t getting anywhere at all.
They had been told, once again, to wait.
At a press conference the next day, President Trump once
again touted the border wall he has promised supporters.
“The wall is getting longer and taller and stronger each and
every day”, he said, even though construction has not
begun. The President’s characterization of the physical wall
was false, but his Administration has effectively erected an
invisible one.
It is built, in part, from situations like the one at the
bridge, which illustrates the problem with this kind of
barrier. The practices that Trump praises for keeping out
criminals also punish those who are trying to follow the
rules.
Those migrants who spoke to TIME at the bridge had
varied stories but shared a determination to cross. Some
understood a bit of what could happen to them next. How
long could it take to get processed? And if they did
ultimately apply for asylum, it remained to be seen whether
their stories would qualify. The regulations governing such
matters are complicated, and the vast majority who apply
are rejected. But in theory, their fates would be decided at
immigration courts, not at the border.

TIME, August 23, 2018. Adaptado.

Segundo o texto, após ingresso nos Estados Unidos, os
migrantes que requerem asilo`,
    images: [{"src":"/fuvest/2019/images/q76_source_1.jpg","width":321,"height":107},{"src":"/fuvest/2019/images/q76_source_2.jpg","width":321,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `têm seu processo julgado com mais rapidez.` },
      { id: 'B', type: 'text', value: `precisam comprovar sua idoneidade.` },
      { id: 'C', type: 'text', value: `aguardam na fronteira, onde sua petição é avaliada.` },
      { id: 'D', type: 'text', value: `são mais determinados a permanecer no país.` },
      { id: 'E', type: 'text', value: `têm seu pedido negado com frequência.` },
    ],
    correct: 'E',
    explanation: `O texto afirma que a grande maioria dos pedidos de asilo é rejeitada, embora em tese a decisão devesse ocorrer nos tribunais de imigração. A informação solicitada corresponde a E.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `For most, The Gateway International Bridge functions as
it should, allowing people to get between the U.S. and
Mexico. But on a hot Sunday afternoon, a dozen migrants at
the mouth of the bridge weren’t getting anywhere at all.
They had been told, once again, to wait.
At a press conference the next day, President Trump once
again touted the border wall he has promised supporters.
“The wall is getting longer and taller and stronger each and
every day”, he said, even though construction has not
begun. The President’s characterization of the physical wall
was false, but his Administration has effectively erected an
invisible one.
It is built, in part, from situations like the one at the
bridge, which illustrates the problem with this kind of
barrier. The practices that Trump praises for keeping out
criminals also punish those who are trying to follow the
rules.
Those migrants who spoke to TIME at the bridge had
varied stories but shared a determination to cross. Some
understood a bit of what could happen to them next. How
long could it take to get processed? And if they did
ultimately apply for asylum, it remained to be seen whether
their stories would qualify. The regulations governing such
matters are complicated, and the vast majority who apply
are rejected. But in theory, their fates would be decided at
immigration courts, not at the border.

TIME, August 23, 2018. Adaptado.

Com base no texto e nos fatos que envolveram a política
imigratória dos EUA em junho de 2018, é correto afirmar:`,
    images: [{"src":"/fuvest/2019/images/q76_source_1.jpg","width":321,"height":107},{"src":"/fuvest/2019/images/q76_source_2.jpg","width":321,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `O presidente Donald Trump, por pressão do Conselho de
Direitos Humanos da Organização das Nações Unidas
(ONU), flexibilizou a punição aos imigrantes ilegais,
passando a tratar os casos em cortes de imigração e não
mais por meio de indiciamento criminal.` },
      { id: 'B', type: 'text', value: `O presidente Donald Trump finalizou a construção do muro
na fronteira México‐EUA, desde a costa leste até a oeste,
com o objetivo de conter a nova onda imigratória de
venezuelanos e hondurenhos.` },
      { id: 'C', type: 'text', value: `Imigrantes mexicanos que seguiram as regras oficiais para
imigração nos EUA obtiveram concessão de asilo político em
curto prazo, especialmente nas cortes da Califórnia,
tradicional reduto conservador e base eleitoral do
presidente Donald Trump.` },
      { id: 'D', type: 'text', value: `A construção de uma barreira física entre México e EUA visa,
segundo o presidente Donald Trump, consolidar um estado
fronteiriço, no qual os imigrantes deverão permanecer
algum tempo antes de ingressarem em outras partes do
país.` },
      { id: 'E', type: 'text', value: `As barreiras construídas entre México e EUA são, além de
físicas, também psicológicas, como pôde ser visto no caso
em que milhares de crianças imigrantes foram separadas de
suas famílias.` },
    ],
    correct: 'E',
    explanation: `As restrições ultrapassam muros físicos e incluem práticas com efeitos psicológicos, como a separação de crianças e familiares na fronteira em 2018. E articula o texto a esse contexto, sem afirmar que a construção do muro estava concluída.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `(…) o “arco do triunfo” é um fragmento de muro que, embora
isolado da muralha, tem a forma de uma porta da cidade. (...)
Os primeiros exemplos documentados são estruturas do século
II a.C., mas os principais arcos de triunfo são os do Império,
como os arcos de Tito, de Sétimo Severo ou de Constantino,
todos no foro romano, e todos de grande beleza pela elegância
de suas proporções.

PEREIRA, J. R. A., Introdução à arquitetura. Das origens ao século XXI. Porto
Alegre: Salvaterra, 2010, p. 81.

Dentre os vários aspectos da arquitetura romana, destaca‐se a
monumentalidade de suas construções. A relação entre o “arco
do triunfo” e a História de Roma está baseada`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `no processo de formação da urbe romana e de edificação
de entradas defensivas contra invasões de povos
considerados bárbaros.` },
      { id: 'B', type: 'text', value: `nas celebrações religiosas das divindades romanas
vinculadas aos ritos de fertilidade e aos seus ancestrais
etruscos.` },
      { id: 'C', type: 'text', value: `nas celebrações das vitórias militares romanas que
permitiram a expansão territorial, a consolidação territorial
e o estabelecimento do sistema escravista.` },
      { id: 'D', type: 'text', value: `na edificação de monumentos comemorativos em memória
das lutas dos plebeus e do alargamento da cidadania
romana.` },
      { id: 'E', type: 'text', value: `nos registros das perseguições ao cristianismo e da
destruição de suas edificações monásticas.` },
    ],
    correct: 'C',
    explanation: `Arcos triunfais celebravam vitórias militares e a autoridade imperial. A expansão de Roma trouxe domínio territorial, recursos e escravizados, associando monumentalidade e poder militar. Resposta C.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Os comentadores do texto sagrado (…) reconhecem a
submissão da mulher ao homem como um dos momentos da
divisão hierárquica que regula as relações entre Deus, Cristo e
a humanidade, encontrando ainda a origem e o fundamento
divino daquela submissão na cena primária da criação de Adão
e Eva e no seu destino antes e depois da queda.

CASAGRANDE, C., A mulher sob custódia, in: História das Mulheres, Lisboa:
Afrontamento, 1993, v. 2, p. 122‐123.

O excerto refere‐se à apreensão de determinadas passagens
bíblicas pela cristandade medieval, especificamente em relação
à condição das mulheres na sociedade feudal. A esse respeito,
é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As mulheres originárias da nobreza podiam ingressar nos
conventos e ministrar os sacramentos como os homens de
mesma condição social.` },
      { id: 'B', type: 'text', value: `A culpabilização das mulheres pela expulsão do Paraíso
Terrestre servia de justificativa para sua subordinação social
aos homens.` },
      { id: 'C', type: 'text', value: `As mulheres medievais eram impedidas do exercício das
atividades políticas, ao contrário do que acontecera no
mundo greco‐romano.` },
      { id: 'D', type: 'text', value: `As mulheres medievais eram iletradas e tinham o acesso à
cultura e às artes proibido, devido à sua condição social e
natural.` },
      { id: 'E', type: 'text', value: `A submissão das mulheres medievais aos homens esteve
desvinculada de normatizações acerca da sexualidade.` },
    ],
    correct: 'B',
    explanation: `Interpretações medievais da queda de Adão e Eva responsabilizavam a mulher pelo pecado e justificavam sua submissão ao homem. B identifica essa legitimação religiosa da hierarquia de gênero, sem negar toda participação cultural feminina.`,
    subject: ['fil'],
    topics: ['Cidadania', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Lasar Segall, Navio de Emigrantes, 1939‐41, óleo com areia sobre tela.

Esta imagem é a reprodução de`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q82_1.jpg","width":689,"height":286},{"src":"/fuvest/2019/images/fuvest_2019_f1q81_1.jpg","width":689,"height":286}],
    alternatives: [
      { id: 'A', type: 'text', value: `uma pintura impressionista, marcada por pinceladas soltas
e pela temática da emigração americana para o continente
europeu.` },
      { id: 'B', type: 'text', value: `um mosaico cubista, caracterizado pelas formas
geométricas que procuram salientar a esperança daqueles
que se dirigem para terras estrangeiras.` },
      { id: 'C', type: 'text', value: `uma pintura expressionista, que reforça o sofrimento dos
que se deslocavam em um contexto de perseguições e
intolerâncias.` },
      { id: 'D', type: 'text', value: `um painel surrealista, que procurava destacar o
subconsciente atormentado daqueles que deixavam seus
locais de origem.` },
      { id: 'E', type: 'text', value: `uma pintura futurista, influenciada pelas referências de
modernização tecnológica características da primeira
metade do século XX.` },
    ],
    correct: 'C',
    explanation: `Navio de Emigrantes, de Lasar Segall, acentua sofrimento e insegurança das pessoas deslocadas em contexto de intolerâncias. Sua linguagem é expressionista, não impressionista ou futurista. Logo, C.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Sobre a revolução cultural ocorrida na China, a partir de 1966,
é correto afirmar que se tratou de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `movimento dirigido por intelectuais e estudantes contra o
governo ditatorial de Mao Tsé‐Tung.` },
      { id: 'B', type: 'text', value: `proposta encaminhada pelos camponeses em busca da
retomada das raízes xintoístas da China imperial.` },
      { id: 'C', type: 'text', value: `reação dos intelectuais refratários ao regime comunista que
pretendia restaurar o mandarinato.` },
      { id: 'D', type: 'text', value: `expurgo de cunho anti‐intelectualista que recusava as
influências ocidental e soviética.` },
      { id: 'E', type: 'text', value: `um processo que culminou nas reivindicações de livre‐
pensamento e na abertura da China para o mercado.` },
    ],
    correct: 'D',
    explanation: `A Revolução Cultural mobilizada por Mao promoveu expurgos, perseguições a intelectuais e combate a influências consideradas burguesas ou revisionistas, inclusive soviéticas. A caracterização adequada é D, não abertura liberal ao mercado.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Examine a tabela.

Porcentagem da variação do desempenho
econômico do Brasil

Anos Produto Indústria Agricultura
Interno Bruto
(PIB)
1971 12,0 12,0 11,3
1972 11,1 13,0 4,1
1973 13,6 16,3 3,6
1974 9,7 9,2 8,2
1975 5,4 5,9 4,8
1976 9,7 12,4 2,9
1977 5,7 3,9 11,8
1978 5,0 7,2 ‐2,6
1979 6,4 6,4 5,0
1980 7,2 7,9 6,3
1981 ‐1,6 ‐5,5 6,4
1982 0,9 0,6 ‐2,5
1983 ‐3,2 ‐6,8 2,2
1984 4,5 6,0 3,2

FISHLOW, A., Uma história de dois presidentes: a economia política da gestão
da crise. STEPHAN, A. (org), Democratizando o Brasil. Rio de Janeiro: Paz e
Terra: 1988, p. 144

Os dados da tabela referem‐se a anos transcorridos durante a
Ditadura Militar no Brasil. O desempenho econômico nesse
período entrelaçou‐se ao panorama político do país. Nesse
sentido, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Os sinais de esgotamento do “milagre brasileiro”,
associados à crise internacional do petróleo entre 1973 e
1974, foram os responsáveis pelo recrudescimento da
política repressiva dos governos militares.` },
      { id: 'B', type: 'text', value: `As eleições pluripartidárias de 1982 ocorreram em meio à
recessão de 1981 e 1983, no governo de João Baptista
Figueiredo, e caracterizaram‐se como um passo importante
no processo de democratização do país.` },
      { id: 'C', type: 'text', value: `A crise internacional do petróleo de 1979 e seus efeitos na
economia brasileira provocaram uma queda abrupta no PIB
nacional e o fim imediato do regime, por falta de
sustentação política.` },
      { id: 'D', type: 'text', value: `As oscilações do PIB brasileiro, registradas na tabela,
correspondem igualmente às variações das taxas de
crescimento e retração na indústria e na agricultura e aos
processos de intensificação da repressão política e da
censura.` },
      { id: 'E', type: 'text', value: `A crise internacional do petróleo de 1979 não afetou a
agricultura brasileira, mas coincidiu com as primeiras
eleições pluripartidárias desde 1966, marcadas pela
estrondosa vitória dos partidos de oposição.` },
    ],
    correct: 'B',
    explanation: `A eleição pluripartidária de 1982 ocorreu no governo Figueiredo, entre os anos recessivos de 1981 e 1983 indicados pela tabela. Ela integrou o processo de abertura e democratização. B é correta; a crise não encerrou imediatamente a ditadura.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Sob qualquer aspecto, este [a Revolução Industrial] foi
provavelmente o mais importante acontecimento na história do
mundo, pelo menos desde a invenção da agricultura e das
cidades. E foi iniciado pela Grã‐Bretanha. É evidente que isto
não foi acidental.

Eric Hobsbawm, A Era das Revoluções. São Paulo: Paz e Terra, 2005.
19ª edição, p. 52.

A Revolução Industrial, ocorrida na Inglaterra nos decênios
finais do século XVIII,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `deveu‐se ao pioneirismo científico e tecnológico dos
britânicos, aliado a uma grande oferta de mão de obra
especializada e a uma política estatal pacifista e voltada
para o comércio.` },
      { id: 'B', type: 'text', value: `originou‐se das profundas transformações agrárias
expressas pela concentração fundiária, perda da posse da
terra pelo campesinato e formação de uma mão de obra
assalariada.` },
      { id: 'C', type: 'text', value: `vinculou‐se à derrocada da aristocracia e à ascensão da
burguesia, orientada pela política mercantilista e
sintetizada na filosofia de Adam Smith.` },
      { id: 'D', type: 'text', value: `resultou da supressão de leis protecionistas de inspiração
mercantilista e do combate ao tráfico negreiro, com vistas à
conquista de mercados externos consumidores.` },
      { id: 'E', type: 'text', value: `decorreu da ampla difusão de um ideário Ilustrado, o qual
teria promovido aquilo que o sociólogo alemão Max Weber
descreve como o “espírito do capitalismo”.` },
    ],
    correct: 'B',
    explanation: `Cercamentos e concentração de terras reduziram o acesso camponês aos meios de subsistência e ampliaram o trabalho assalariado disponível para as fábricas. B vincula essas mudanças agrárias ao pioneirismo industrial britânico.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Décio Villares, A República (Museu Republicano, RJ, ca 1900)

Produzida no contexto da implantação da ordem republicana
no Brasil, esta imagem`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q86_1.jpg","width":285,"height":248},{"src":"/fuvest/2019/images/q86_source_2.jpg","width":285,"height":125}],
    alternatives: [
      { id: 'A', type: 'text', value: `caracteriza representação cívica inspirada na Revolução
Francesa, adequada ao projeto democrático estabelecido
pelos republicanos brasileiros.` },
      { id: 'B', type: 'text', value: `faz uso alegórico de um tema clássico para expressar o
repúdio à exclusão da participação feminina nas instituições
políticas do Império.` },
      { id: 'C', type: 'text', value: `é uma alegoria da liberdade, da pátria e da nação, que
contrasta com os limites da cidadania na nova ordem
brasileira.` },
      { id: 'D', type: 'text', value: `emprega símbolo católico como estratégia para obter a
adesão da Igreja e diminuir a animosidade dos movimentos
messiânicos.` },
      { id: 'E', type: 'text', value: `é expressão artística do projeto positivista de divulgar uma
concepção da sociedade brasileira sintonizada com os ideais
de eugenia.` },
    ],
    correct: 'C',
    explanation: `A figura feminina representa alegoricamente liberdade, pátria e nação. Sua utilização contrasta com uma República que manteve a exclusão política de mulheres e de amplas parcelas da população. Portanto, C.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `É difícil acreditar que a Revolução Francesa teria sido muito
diferente, mesmo que a Revolução Americana nunca tivesse
acontecido. É fácil mostrar que os americanos não tentaram
uma semelhante ruptura substancial com o passado, como
fizeram os franceses. No entanto, (...) as duas revoluções foram
muito parecidas.

Robert R. Palmer, The Age of The Democratic Revolution: The Challenge,
Princeton, Princeton University Presse, vol I, 1959, p.267.

Com base no texto e em seus conhecimentos acerca da
Revolução Francesa e do revolucionário processo de
independência dos Estados Unidos, assinale a afirmação
correta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A revolução norte‐americana repercutiu pouco nos
movimentos liberais da Europa e, mesmo na França da
época da Ilustração, seu impacto foi mais de ordem
econômica do que política.` },
      { id: 'B', type: 'text', value: `O processo de independência dos Estados Unidos foi
marcado pela ausência de divisões internas entre os colonos
e pela exclusão das camadas populares da sociedade no
processo político.` },
      { id: 'C', type: 'text', value: `O processo de independência dos Estados Unidos foi
consumado pela redação de uma Constituição, cuja
elaboração ficou a cargo de notáveis, que representavam os
interesses das classes proprietárias.` },
      { id: 'D', type: 'text', value: `A guerra da independência norte‐americana caracterizou‐
se pela ausência de radicalismo político e social, o que se
deveu à menor penetração dos ideais Ilustrados nos últimos
anos do período colonial.` },
      { id: 'E', type: 'text', value: `A revolução norte‐americana repercutiu não só na
Ilustração europeia e na Revolução Francesa, como
demonstrou de modo teórico e prático a viabilidade de um
grande Estado republicano e democrático.` },
    ],
    correct: 'E',
    explanation: `A independência estadunidense mostrou a possibilidade prática de um grande Estado republicano e influenciou debates ilustrados e a Revolução Francesa. E reconhece essa repercussão sem apagar os limites sociais e escravistas da nova ordem.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Em junho de 1995, a seleção de rugby da África do Sul
conquistou a Copa do Mundo dessa modalidade esportiva ao
vencer a equipe da Nova Zelândia por 15 a 12, na cidade de
Johannesburgo. O capitão sul‐africano, François Pienaar,
recebeu a taça destinada à seleção campeã das mãos de Nelson
Mandela.

Esse acontecimento esportivo`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `é um dos marcos do fim do Apartheid, devido à constituição
de uma primeira seleção multirracial representando a África
do Sul.` },
      { id: 'B', type: 'text', value: `tornou‐se uma das justificativas para o veto à participação
da África do Sul em eventos esportivos devido à proibição
da presença de atletas brancos.` },
      { id: 'C', type: 'text', value: `permitiu a vitória eleitoral de Mandela, apoiado
massivamente pelos bôeres insuflados pelo nacionalismo
sul‐africano.` },
      { id: 'D', type: 'text', value: `desencadeou uma série de conflitos raciais entre negros e
brancos devido às rivalidades entre os atletas da seleção
sul‐africana.` },
      { id: 'E', type: 'text', value: `foi realizado graças a um esforço conjunto de Nelson
Mandela e de Frederik de Klerk, agraciados, por isso, com o
prêmio Nobel da Paz.` },
    ],
    correct: 'A',
    explanation: `A Copa de 1995 e a seleção multirracial tornaram-se símbolos de reconciliação e superação do apartheid sob Mandela. A corresponde a esse significado histórico; não foi o evento que causou sua eleição ou a concessão do Nobel.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `Observe as imagens das duas charges de Angelo Agostini
publicadas no periódico Vida Fluminense. Ambas oferecem
representações sobre a Guerra do Paraguai, que causaram
forte impacto na opinião pública. A imagem I retrata Solano
López como o “Nero do século XIX”; a imagem II figura um
soldado brasileiro que retorna dos campos de batalha.

I II

12/06/1869 11/06/1870

Sobre as imagens, é correto afirmar, respectivamente:`,
    images: [{"src":"/fuvest/2019/images/fuvest_2019_f1q89_1.jpg","width":639,"height":190},{"src":"/fuvest/2019/images/fuvest_2019_f1q88_1.jpg","width":639,"height":190}],
    alternatives: [
      { id: 'A', type: 'text', value: `Atribui um caráter redentor ao chefe da tropa paraguaia;
fixa o assombro do soldado brasileiro ao constatar a
persistência da opressão escravista.` },
      { id: 'B', type: 'text', value: `Denuncia os efeitos da guerra entre a população brasileira;
ilustra a manutenção da violência entre a população cativa.` },
      { id: 'C', type: 'text', value: `Reconhece os méritos militares do general López; denota a
incongruência entre o recrutamento de negros libertos e a
manutenção da escravidão.` },
      { id: 'D', type: 'text', value: `Personifica o culpado pelo morticínio do povo paraguaio;
estimula o debate sobre o fim do trabalho escravo no Brasil.` },
      { id: 'E', type: 'text', value: `Fixa atributos de barbárie ao ditador Solano López; sublinha
a incompatibilidade entre o Exército e o exercício da
cidadania.` },
    ],
    correct: 'D',
    explanation: `Na primeira charge, a comparação a Nero responsabiliza López pela destruição paraguaia. Na segunda, o soldado negro que retorna encontra a continuidade da escravidão, expondo a contradição e alimentando a crítica abolicionista. Logo, D.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2019,
    phase: 1,
    text: `A história do século XIX foi marcada pela tensão entre tradições
políticas e intelectuais que apelava, ora para a força do
nacionalismo, ora para o vigor das ideias internacionalistas.
Indique a alternativa que traduz uma destas tradições.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A formulação de alianças militares, a união de forças
monárquicas e abolição das fronteiras políticas
contribuíram para minar o poder dos Estados‐Nacionais.` },
      { id: 'B', type: 'text', value: `O 1º de Maio e os rituais trabalhistas manifestavam a
ascensão de partidos e de movimentos de massa, expressão
do nacionalismo da classe trabalhadora.` },
      { id: 'C', type: 'text', value: `As guerras de caráter religioso que eclodiram na Europa
demonstram um enfraquecimento do poder universal da
Igreja Católica e a ascensão de tradições religiosas nacionais.` },
      { id: 'D', type: 'text', value: `O apelo ao direito de autodeterminação dos povos
questionou o poder das casas dinásticas e contribuiu para a
posterior fragmentação dos grandes impérios europeus.` },
      { id: 'E', type: 'text', value: `O culto do progresso e da liberdade despertou os ideais
republicanos e democráticos que contribuíram para o
estabelecimento de federações supranacionais.` },
    ],
    correct: 'D',
    explanation: `O princípio de autodeterminação sustenta reivindicações nacionais contra soberanias dinásticas. No século XIX, esses movimentos contribuíram para a fragmentação de grandes impérios multinacionais. D identifica essa tradição nacionalista.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
];

export default fuvest_2019_f1;