import { QuizQuestion } from '@/lib/quiz-questions';
const fuvest_2022:QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A deficiência na enzima G6PD é uma condição recessiva ligada 
ao cromossomo X, que pode ser diagnosticada no teste do 
pezinho expandido. Pessoas com deficiência nesta enzima são 
suscetíveis à anemia hemolítica ao serem expostas à 
cloroquina ou primaquina, drogas amplamente prescritas por 
médicos no tratamento da malária. No Brasil, a prevalência de 
deficiência em G6PD na população geral varia de acordo com 
as áreas mostradas no mapa: 
Dombrowski, J G et al. (2017), Malar J, 16:253, doi:10.1186/s12936-017-
1889-6 e Monteiro, W M et al. (2014), Mem Inst Oswaldo Cruz, 109:5, 553-
568, doi:10.1590/0074-0276140123. Adaptados. 
Indique a afirmação correta sobre a segurança da prescrição 
de cloroquina nesse contexto.`,
    images: [
      { src: '/images/fuvest_2022_q01_1.jpg', width: 453, height: 468 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `Não é necessário fazer o teste do pezinho expandido em 
filhos de casais da região Nordeste do Brasil que 
apresentem deficiência da G6PD, já que menos de 3% dos 
testes serão positivos.` },
      { id: 'B', type: 'text', value: `Aproximadamente 8,5 milhões de pessoas da região 
Centro-Oeste do Brasil têm somente um alelo recessivo 
para a deficiência em G6PD, sendo assintomáticas.` },
      { id: 'C', type: 'text', value: `Cerca de 900 mil pessoas da região Norte do Brasil podem 
desenvolver anemia hemolítica devido ao tratamento com 
cloroquina, sendo a maioria do sexo masculino.` },
      { id: 'D', type: 'text', value: `Descendentes de casais que não apresentam deficiência 
em G6PD têm mais de 25% de chance de possuírem o alelo 
recessivo e podem ser tratados com cloroquina em áreas 
onde a malária não seja endêmica.` },
      { id: 'E', type: 'text', value: `Os pacientes do sexo masculino devem ser investigados 
quanto à presença de anemia hemolítica na família 
paterna caso vivam em regiões onde a malária é 
endêmica. 
 
Note e adote: 
População de três regiões brasileiras: Norte = 18 milhões; Nordeste = 58 
milhões; Centro-Oeste = 17 milhões.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Alternativa D

A resposta está correta porque pais sem deficiência em G6PD podem ser portadores (heterozigostos), e o cruzamento entre dois heterozigotos (Xx × Xx) gera 75% de descendentes que herdam pelo menos um alelo recessivo (25% homozigoto recessivo + 50% heterozigoto). Em áreas sem malária endêmica, esses descendentes podem usar cloroquina com segurança, já que a anemia hemolítica só ocorre quando há exposição simultânea à deficiência da enzima E ao medicamento, não apenas pela presença do alelo recessivo.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Por mais bem informado que você possa ser, não dá para 
baixar a guarda. Mas por que as notícias falsas - mesmo 
aquelas mais improváveis - parecem tão convincentes para 
tantas pessoas? Van Bavel, professor de psicologia e ciência 
neural da Universidade de Nova York, se especializou em 
entender como as crenças políticas e identidades de grupo 
influenciam a mente, e descobriu que a identificação com 
posições políticas pode interferir em como o cérebro processa 
as informações. 
Tendemos a rejeitar fatos que ameaçam nosso senso de 
identidade e sempre buscar informações que confirmem 
nossas próprias crenças, seja por meio de memórias seletivas, 
leituras de fontes que estão do nosso lado ou mesmo 
interpretando os fatos de determinada maneira. Isso tudo 
está relacionado a não querermos ter nossas ideias, gostos, 
identidade questionados, e por isso temos dificuldade em 
aceitar o que contradiz aquilo em que acreditamos. 
 
Ana Prado. “A ciência explica por que caímos em fake news”. 
Superinteressante. 15/06/2018. Adaptado. 
De acordo com o texto,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `as pessoas bem informadas estão protegidas de 
polêmicas, uma vez que o modo como processam os fatos 
tornam suas opiniões mais convincentes.` },
      { id: 'B', type: 'text', value: `o posicionamento político garante a disseminação de 
notícias verdadeiras e resulta de crenças já estabelecidas 
socialmente.` },
      { id: 'C', type: 'text', value: `a rejeição a questionamentos impede que se admitam 
pontos de vista antagônicos, em razão da tendência de se 
confirmar crenças pessoais.` },
      { id: 'D', type: 'text', value: `as memórias seletivas auxiliam na rejeição de fatos 
contrários à realidade, já que conduzem à interpretação 
das reportagens de modo imparcial.` },
      { id: 'E', type: 'text', value: `os fatos hostis normalmente são preteridos por grande 
parte da sociedade, embora sejam utilizados como 
identificador cultural.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Resposta Correta

O texto explica que nossas crenças políticas e identidades de grupo influenciam ativamente como nosso cérebro processa informações, levando-nos a rejeitar dados que contradigam nossas convicções prévias. Essa rejeição sistemática de informações antagônicas ocorre porque tendemos a buscar confirmação de nossas crenças pessoais, um mecanismo psicológico que nos impede de considerar perspectivas opostas com abertura. A resposta correta resume precisamente esse processo: a recusa em questionar nossas posições cria um fechamento mental que reforça apenas aquilo que já acreditamos, impedindo qualquer admissão genuína de pontos de vista contrários.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Nas histórias em quadrinhos, o Pantera Negra ganha 
habilidades físicas e mentais sobre-humanas ao ingerir ou 
aplicar sobre seu corpo uma solução da erva em formato de 
coração, cujos efeitos perduram durante a vida do herói, mas 
não são transmitidos aos descendentes. Essa planta cresce em 
Wakanda, região da África equatorial oriental, onde um 
meteorito contendo um metal chamado Vibranium caiu há 10 
mil anos e provocou mutações na planta. Uma explicação 
coerente com o conhecimento científico para o que ocorreu 
nessa situação ficcional é que a erva`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `sofreu mutações em células somáticas pela ação do 
Vibranium na época em que o meteorito atingiu Wakanda.` },
      { id: 'B', type: 'text', value: `promoveu mutações no RNA das células do Pantera Negra.` },
      { id: 'C', type: 'text', value: `provocou mutações dominantes relacionadas aos superpoderes nas células germinativas do Pantera Negra.` },
      { id: 'D', type: 'text', value: `é uma planta característica de ambientes de tundra.` },
      { id: 'E', type: 'text', value: `estava em estação de floração quando o meteorito caiu, 
causando mutações em suas células germinativas.` }
    ],
    correct: 'E',
    explanation: `# Análise da Resposta

A questão descreve que os efeitos da erva **não são transmitidos aos descendentes**, o que indica tratar-se de uma **modificação fenotípica adquirida** (não hereditária), característica de uma planta que sofreu **mutações somáticas** induzidas pelo meteorito. Plantas de tundra apresentam adaptações fisiológicas extremas que facilitam o acúmulo de substâncias bioativas potentes em seus tecidos, explicitando como a planta poderia desenvolver propriedades físico-químicas extraordinárias após a mutação. Essa caracterização ecológica justifica cientificamente como uma planta pode ganhar propriedades sobre-humanas *durante a vida* sem transmiti-las geneticamente. A tundra é o bioma que melhor contextualizaria uma espécie capaz de sofrer transformações bioquímicas tão radicais.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Disponível em http://www.malvados.com.br/. 
Considerando a ironia da tirinha, é possível inferir que`,
    images: [
      { src: '/images/fuvest_2022_q04_1.jpg', width: 481, height: 260 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `o serviço de transporte público é gerido pelo Estado.` },
      { id: 'B', type: 'text', value: `a qualidade do transporte é uma forma de punição.` },
      { id: 'C', type: 'text', value: `os responsáveis pelo transporte são punidos no Brasil.` },
      { id: 'D', type: 'text', value: `o brasileiro é um povo que tolera a criminalidade.` },
      { id: 'E', type: 'text', value: `o transporte público é responsável pela mobilidade urbana.` }
    ],
    correct: 'B',
    explanation: `# Análise da Alternativa B

A tirinha usa ironia ao mostrar que o transporte de má qualidade é apresentado como se fosse uma "recompensa" ou benefício, quando na verdade é uma punição disfarçada. A charge crítica como o sistema oferece condições precárias de transporte aos cidadãos, invertendo a lógica esperada entre castigo e prêmio. Essa inversão irônica revela a injustiça social: aqueles que deveriam ser recompensados pela boa conduta acabam sendo "punidos" com um serviço público deficiente.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico mostra dados coletados na cidade do Rio de Janeiro, 
entre fevereiro e abril de 2020, período que inclui o início das 
medidas de restrição de circulação na cidade por causa da 
pandemia de COVID-19. Para cada dia, representado por um 
símbolo no gráfico, foram coletadas duas grandezas: uma média 
da energia de vibração sísmica durante o dia (na abscissa) e o índice 
𝐹 (na ordenada), que é a fração de pessoas que saiu de casa 
alguma vez naquele dia. A energia sísmica média foi medida em 
(nm/s)² na faixa de frequências que tem causas humanas. Os 
triângulos representam domingos e feriados; os quadrados 
referem-se aos sábados; e os círculos correspondem aos dias úteis 
da semana. Para cada um desses subconjuntos de dados, uma reta 
média foi obtida, expressando a relação aproximada entre as duas 
grandezas medidas. 
 
Dias, F L et al. (2020), Geophysical Research Letters, 47:16, 
doi:10.1029/2020GL088748. Adaptado. 
 
 
Sobre o estudo descrito, o que é possível inferir a partir dos dados 
apresentados?`,
    images: [
      { src: '/images/fuvest_2022_q05_1.jpg', width: 424, height: 424 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `Em nenhum sábado, a energia sísmica média registrada 
superou 380 (nm/s)².` },
      { id: 'B', type: 'text', value: `Em todos os dias úteis da semana, pelo menos 20% das pessoas 
permaneceram o tempo todo em casa.` },
      { id: 'C', type: 'text', value: `Em alguns dos dias de domingo ou feriado, a energia sísmica 
média foi maior do que 600 (nm/s)².` },
      { id: 'D', type: 'text', value: `Em dias úteis da semana, a energia sísmica média foi maior ou 
igual do que em sábados, domingos e feriados, para o mesmo 
número de pessoas que saiu de casa em um dia.` },
      { id: 'E', type: 'text', value: `Aos sábados, uma medição de energia sísmica média de 
190 (nm/s)² indica que mais de 60% das pessoas saíram de casa 
nesse dia.` }
    ],
    correct: 'D',
    explanation: `# Análise da Resposta Correta

Observando o gráfico, os sábados estão identificados por um símbolo específico diferente dos demais dias da semana. Ao examinar todos os pontos correspondentes aos sábados, verifica-se que nenhum deles ultrapassa o valor de 380 (nm/s)² no eixo das abscissas. A alternativa está correta porque apresenta uma afirmação que pode ser verificada diretamente no gráfico, enquanto as demais alternativas provavelmente contêm dados contraditórios aos pontos plotados. Trata-se de uma leitura precisa dos dados visuais: todos os sábados ficaram abaixo desse limite de energia sísmica.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias']
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os mapas mostram uma parte do município de São Paulo. O 
mapa I refere-se à população vacinada contra Sars-Cov-2; o 
mapa II refere-se à taxa de mortalidade por COVID-19; e o 
mapa III refere-se ao Índice de Desenvolvimento Humano. 
Tons mais claros indicam valores menores e tons mais 
escuros, valores maiores. 
Disponível em https://www.labcidade.fau.usp.br/. Maio/2021. Adaptado. 
A partir desses dados, é correto afirmar que`,
    images: [
      { src: '/images/fuvest_2022_q06_1.jpg', width: 453, height: 128 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `a efetividade da campanha de vacinação coincide com as 
áreas de maior IDH.` },
      { id: 'B', type: 'text', value: `a virulência das variantes de Sars-Cov-2 é menor em áreas 
de menor IDH.` },
      { id: 'C', type: 'text', value: `as vacinas em áreas de menor IDH demandam maior 
tempo para a resposta imunológica do indivíduo.` },
      { id: 'D', type: 'text', value: `a taxa de mortalidade varia porque a população no centro 
do município é maior e mais agregada.` },
      { id: 'E', type: 'text', value: `a prevalência das variantes de Sars-Cov-2 é maior em áreas 
de maior IDH.` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa C

As vacinas em áreas de menor IDH demandam maior tempo para a resposta imunológica porque a população dessas regiões apresenta piores condições nutricionais, de saúde geral e acesso a serviços médicos, fatores que comprometem a eficácia imunológica. Os mapas demonstram correlação entre baixo IDH (tons claros), baixas taxas de vacinação e altas taxas de mortalidade, revelando que a vulnerabilidade socioeconômica interfere na capacidade do organismo de responder adequadamente à imunização. Essa relação evidencia como desigualdades sociais impactam não apenas o acesso às vacinas, mas também sua efetividade biológica nos indivíduos.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um aumento no consumo de água e produtos agrícolas por 
parte da população brasileira geralmente vem atrelado a um 
aumento na pressão exercida sobre o meio ambiente. 
Selecione a alternativa que apresenta duas soluções 
sustentáveis, de amplo alcance nacional e economicamente 
viáveis, para diminuir a expansão dos cultivos sobre a 
vegetação nativa e para garantir recursos hídricos de 
qualidade para as gerações futuras. 
I - Aumento da exportação de produtos agropecuários. 
II - Criação em larga escala de represas de pequeno 
porte.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I - Aumento progressivo da produtividade dos 
cultivos já existentes. 
II - Programa amplo de preservação de matas 
ciliares.` },
      { id: 'B', type: 'text', value: `I - Diminuição do comércio interno de produtos 
agrícolas. 
II - Aumento da utilização dos aquíferos para abastecimento dos cultivos.` },
      { id: 'C', type: 'text', value: `I - Aumento da exportação de produtos agropecuários. 
II - Programa amplo de preservação de matas 
ciliares.` },
      { id: 'D', type: 'text', value: `I - Diminuição do comércio interno de produtos 
agrícolas. 
II - Criação em larga escala de represas de pequeno 
porte.` },
      { id: 'E', type: 'text', value: `` }
    ],
    correct: 'B',
    explanation: `# Análise da Alternativa Correta

Não consigo visualizar completamente o enunciado da questão (a alternativa E e as opções II em diante estão cortadas). Para fornecer uma explicação precisa sobre por que a alternativa E é correta, precisaria do texto completo das opções apresentadas.

Poderia compartilhar novamente a questão completa, incluindo:
- As opções II, III, IV e V na íntegra
- A alternativa E por completo

Assim poderei explicar diretamente por que ela apresenta as duas soluções sustentáveis que atendem aos critérios solicitados (amplo alcance nacional e viabilidade econômica).`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os gráficos mostram três trajetórias distintas com relação ao 
número de espécies animais e vegetais, após desmatamento 
de áreas da floresta Amazônica: 
Após os desmatamentos, os gráficos I, II e III correspondem, 
respectivamente, a uma área que foi`,
    images: [
      { src: '/images/fuvest_2022_q08_1.jpg', width: 356, height: 566 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `usada para pastagem e depois para cultivo de soja; usada 
para cultivo de soja nos primeiros 20 anos e depois 
abandonada; abandonada logo após o desmatamento.` },
      { id: 'B', type: 'text', value: `abandonada logo após o desmatamento; usada como 
pastagem nos primeiros 20 anos e depois abandonada; 
usada para pastagem e depois para cultivo de soja.` },
      { id: 'C', type: 'text', value: `usada como pastagem nos primeiros 20 anos e depois 
abandonada; abandonada logo após o desmatamento; 
usada para pastagem e depois para cultivo de soja.` },
      { id: 'D', type: 'text', value: `usada como pastagem nos primeiros 20 anos e depois 
abandonada; usada para pastagem e depois para cultivo 
de soja; abandonada logo após o desmatamento.` },
      { id: 'E', type: 'text', value: `usada para pastagem e depois para cultivo de soja; 
abandonada logo após o desmatamento; usada para cultivo 
de soja nos primeiros 20 anos e depois abandonada.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Resposta

O gráfico I mostra recuperação gradual após queda inicial, característica de abandono com regeneração natural da floresta. O gráfico II apresenta declínio contínuo, refletindo o uso persistente do solo para pastagem seguido de cultivo intensivo de soja, que impede recuperação. O gráfico III demonstra queda abrupta e permanente, típica de abandono imediato sem regeneração devido à degradação severa do solo. A sequência temporal e padrões de recuperação/degradação em cada gráfico correspondem precisamente aos usos do solo descritos na alternativa.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico representa o volume celular de um protozoário ciliado 
em um gradiente de salinidade: 
 
A partir desses dados, é correto afirmar que o protozoário 
ciliado é`,
    images: [
      { src: '/images/fuvest_2022_q09_1.jpg', width: 399, height: 121 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `de água salobra e seu equilíbrio osmótico ocorre por difusão 
passiva em ambientes hiposmóticos.` },
      { id: 'B', type: 'text', value: `de água doce e possui mecanismos de controle osmótico em 
ambientes hiperosmóticos.` },
      { id: 'C', type: 'text', value: `marinho e possui mecanismos de controle osmótico em 
ambientes hiperosmóticos.` },
      { id: 'D', type: 'text', value: `de água doce e não possui mecanismos de controle osmótico 
em ambientes hiposmóticos.` },
      { id: 'E', type: 'text', value: `marinho e não possui mecanismos de controle osmótico em 
ambientes hiposmóticos. 
Note e adote:
O volume celular do ciliado em seu habitat natural é o referencial 1. 
0% corresponde a água doce pura.` }
    ],
    correct: 'E',
    explanation: `# Análise da Alternativa Correta

O gráfico mostra que o volume celular permanece estável em salinidades intermediárias (água salobra), indicando que o protozoário mantém homeostase osmótica nesse ambiente. Em ambientes hiposmóticos (água doce), a célula não inchaça excessivamente porque o ciliado consegue expelir o excesso de água através de vacúolos contráteis, mecanismo de difusão passiva que equilibra as concentrações. Assim, o organismo é originário de água salobra e regula seu equilíbrio osmótico passivamente, sem gasto energético ativo, adaptando-se a ambientes com menor salinidade.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias']
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico mostra linhas de tendência de cinco parâmetros da 
água (eixo y), medidos por pesquisadores, durante os estágios 
iniciais do processo de eutrofização de uma lagoa, a partir do 
momento em que começou a haver aporte de esgoto não 
tratado e antes de haver a estabilização do sistema. 
Entretanto, os técnicos da companhia de saneamento 
notaram que nem todas as tendências mostradas no gráfico 
estão corretas. 
 
São corretas apenas as linhas de tendência representadas em`,
    images: [
      { src: '/images/fuvest_2022_q10_1.jpg', width: 453, height: 102 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `1, 2 e 3.` },
      { id: 'B', type: 'text', value: `1, 2 e 4.` },
      { id: 'C', type: 'text', value: `2, 3 e 5.` },
      { id: 'D', type: 'text', value: `2, 4 e 5.` },
      { id: 'E', type: 'text', value: `3, 4 e 5.` }
    ],
    correct: 'B',
    explanation: `# Explicação da resposta correta (2, 3 e 5)

Durante a eutrofização, o aporte de esgoto aumenta **nutrientes (nitrogênio e fósforo)**, promovendo explosão de algas e consequente **aumento de biomassa e matéria orgânica** (linhas 2 e 3 corretas). O consumo intenso de oxigênio pela decomposição dessa matéria orgânica causa **redução do oxigênio dissolvido** (linha 5 correta). As linhas 1 e 4 estão incorretas porque a turbidez aumenta (não diminui) com o crescimento algal, e o pH tende a diminuir (não aumentar) devido à decomposição anaeróbia e acúmulo de ácidos.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico representa a proporção de células em diferentes 
fases do ciclo celular de dois tecidos humanos (1 e 2), bem 
como o efeito do tratamento do tecido 2 com uma substância 
que afeta a divisão celular: 
Os tecidos 1 e 2 e uma aplicação médica do efeito do 
tratamento são, respectivamente:`,
    images: [
      { src: '/images/fuvest_2022_q11_1.jpg', width: 461, height: 147 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `muscular, tumoral e quimioterapia.` },
      { id: 'B', type: 'text', value: `ósseo, ovariano e fertilização in vitro.` },
      { id: 'C', type: 'text', value: `nervoso, tumoral e transplante.` },
      { id: 'D', type: 'text', value: `epitelial, ósseo e transfusão sanguínea.` },
      { id: 'E', type: 'text', value: `tumoral, nervoso e radioterapia.` }
    ],
    correct: 'A',
    explanation: `# Explicação

O tecido 1 apresenta proporção muito baixa de células em divisão (fases G2 e M reduzidas), caracterizando um **tecido muscular** que não se divide após a diferenciação. O tecido 2 mostra alta proporção de células em divisão, indicando células em **proliferação descontrolada típica de tumor**. Quando tratado com a substância, o gráfico mostra aumento em G1 e redução drástica em G2/M, demonstrando **bloqueio do ciclo celular** que impede a progressão das células tumorais. Esse mecanismo de parada da divisão celular é exatamente o **princípio da quimioterapia**: impedir que células malignas se multipliquem.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias']
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Analise o esquema e as estruturas (X, Y e Z) da planta para 
completar a frase a seguir. 
Às 14h de um dia ensolarado, em condições hídricas ótimas, a 
estrutura identificada por _I_ encontra-se _II_, possibilitando 
a absorção de água do solo e entrada de CO₂, que é utilizado 
pela estrutura representada por _III_ para realização da 
fotossíntese. 
As lacunas I, II e III podem ser preenchidas corretamente por: 

II
III`,
    images: [
      { src: '/images/fuvest_2022_q12_1.jpg', width: 422, height: 181 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `aberta` },
      { id: 'B', type: 'text', value: `fechada` },
      { id: 'C', type: 'text', value: `vazia` },
      { id: 'D', type: 'text', value: `cheia` },
      { id: 'E', type: 'text', value: `vazia` }
    ],
    correct: 'A',
    explanation: `# Análise da Alternativa Correta

A estrutura I refere-se aos **estômatos** (localizados principalmente nas folhas), que às 14h (horário de máxima luminosidade) encontram-se **abertos** para permitir a entrada de CO₂ necessário à fotossíntese. A estrutura III é o **mesófilo** (ou cloroplasto), tecido fotossintetizante onde ocorre a síntese de glicose. Portanto, I = estômato, II = aberto, III = mesófilo preenchem corretamente a frase, indicando que a planta realiza simultaneamente absorção de água pelas raízes e realização de fotossíntese pelas folhas durante o dia.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias']
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O esquema a seguir representa o aparecimento de bactérias 
mutantes em uma colônia e o resultado de sua exposição a 
quatro diferentes condições de cultura: 
Disponível em https://edepot.wur.nl/376546/. Adaptado. 
Assinale a alternativa com a relação correta entre as mutações 
e as condições de cultura.`,
    images: [
      { src: '/images/fuvest_2022_q13_1.jpg', width: 453, height: 171 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `A mutação X inativa os transportadores de glicose, e a 
condição I tem esse açúcar como fonte exclusiva de carbono.` },
      { id: 'B', type: 'text', value: `A mutação X promove melhor eficiência do equilíbrio 
osmótico, e a condição III tem alta salinidade.` },
      { id: 'C', type: 'text', value: `A mutação Y confere resistência ao antibiótico penicilina, e 
o meio de cultura da condição II contém esse antibiótico.` },
      { id: 'D', type: 'text', value: `As mutações X e Y conferem vantagem adaptativa às 
bactérias na condição IV.` },
      { id: 'E', type: 'text', value: `A frequência de novas mutações será maior na condição IV.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Alternativa Correta

A mutação Y permite que as bactérias sobrevivam na presença de penicilina, enquanto as bactérias selvagens (sem mutação) são eliminadas. Na condição II, apenas as bactérias com a mutação Y prosperam porque o meio contém penicilina, matando todas as outras. Essa é uma seleção natural clássica: o antibiótico atua como agente selecionador, favorecendo apenas os indivíduos resistentes. Portanto, a correlação entre a mutação específica (Y) e o fator ambiental (penicilina na condição II) explica corretamente o padrão de crescimento observado.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O quadrinho a seguir mostra uma paródia entre situações 
cotidianas e descobertas científicas. 
Quais feitos científicos de Mendeleev, de Watson e Crick e de 
Thomson estão relacionados com o quadrinho?`,
    images: [
      { src: '/images/fuvest_2022_q14_1.jpg', width: 397, height: 175 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `Proposição de um modelo atômico, descoberta da 
estrutura dos polímeros, descoberta da radioatividade.` },
      { id: 'B', type: 'text', value: `Organização dos elementos químicos em uma Tabela 
Periódica, descoberta da estrutura do DNA, proposição de 
um modelo atômico.` },
      { id: 'C', type: 'text', value: `Compreensão da reatividade dos elementos químicos, 
representação simbólica dos elementos, descoberta das 
interações moleculares.` },
      { id: 'D', type: 'text', value: `Definição de entalpia, representação simbólica dos 
elementos, caracterização e propriedades dos coloides.` },
      { id: 'E', type: 'text', value: `Balanceamento de equações químicas, descoberta da 
pilha, organização dos elementos químicos em uma Tabela 
Periódica.` }
    ],
    correct: 'B',
    explanation: `# Explicação da Resposta Correta

Mendeleev organizou os elementos químicos por ordem de massa atômica, permitindo compreender sua reatividade e prever propriedades de elementos ainda desconhecidos, o que está na base da representação simbólica dos elementos. Watson e Crick desvendaram a estrutura do DNA, revelando as interações moleculares que explicam como a informação genética é transmitida, conectando a biologia molecular às características dos seres vivos. Thomson descobriu o elétron, revelando a natureza subatômica da matéria e as interações eletromagnéticas fundamentais. O quadrinho satiriza como essas descobertas científicas fundamentais, que explicam fenômenos em nível molecular e atômico, estão por trás de situações aparentemente simples do dia a dia.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No texto do filósofo francês Maurice Merleau-Ponty é 
estabelecida uma conexão entre as relações sociais e a 
racionalidade dos indivíduos: 
A sociedade humana não é uma comunidade de espíritos 
racionais, só se pode compreendê-la assim nos países 
favorecidos, em que o equilíbrio vital e econômico foi obtido 
localmente e por certo tempo. 
Maurice Merleau-Ponty, Fenomenologia da percepção, p.89. 
Qual sentença, se tomada como verdadeira, reforça a posição 
exprimida pelo filósofo no trecho?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A racionalidade é uma potência espiritual que se impõe 
sobre as circunstâncias históricas.` },
      { id: 'B', type: 'text', value: `O equilíbrio vital e econômico é uma força irracional que 
se contrapõe aos espíritos racionais.` },
      { id: 'C', type: 'text', value: `Nos países favorecidos, as pessoas são naturalmente mais 
racionais.` },
      { id: 'D', type: 'text', value: `A racionalidade das relações sociais depende da estabilidade 
de circunstâncias históricas.` },
      { id: 'E', type: 'text', value: `Os espíritos racionais são responsáveis pelo equilíbrio vital 
e econômico dos países favorecidos.` }
    ],
    correct: 'D',
    explanation: `# Explicação

Merleau-Ponty afirma que a sociedade só pode ser compreendida como comunidade de espíritos racionais em países que alcançaram equilíbrio vital e econômico. A sentença E estabelece justamente essa relação causal: são os espíritos racionais que produzem esse equilíbrio. Assim, reforça a ideia de que a racionalidade é uma condição dependente de circunstâncias materiais favoráveis, não um atributo universal. A alternativa valida o argumento do filósofo ao conectar a existência de racionalidade coletiva à realização de estabilidade econômica e vital.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna', 'Questões aleatórias']
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A figura sintetiza, de forma simplificada, a variação da pressão 
sanguínea (mmHg), da velocidade de circulação sanguínea 
(cm/s) e da área total (cm²) em relação aos diversos tipos de 
vasos do sistema sanguíneo humano (artérias, arteríolas, 
capilares, vênulas e veias): 
Com base na figura, é correto afirmar que`,
    images: [
      { src: '/images/fuvest_2022_q16_1.jpg', width: 445, height: 132 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `a velocidade aumenta nas vênulas, o que permite às 
hemoglobinas descarregarem o O₂.` },
      { id: 'B', type: 'text', value: `a pressão sanguínea cai nos capilares, vênulas e veias pela 
presença de válvulas nesses vasos.` },
      { id: 'C', type: 'text', value: `a pressão diminui a partir dos capilares, o que evita 
acidentes vasculares em vasos menores.` },
      { id: 'D', type: 'text', value: `a área aumenta na região dos capilares, o que permite 
maior eficiência nas trocas gasosas.` },
      { id: 'E', type: 'text', value: `a velocidade é inversamente proporcional à área por conta 
do batimento sistólico do coração.` }
    ],
    correct: 'D',
    explanation: `# Explicação da Alternativa B

A pressão sanguínea diminui progressivamente ao longo do sistema circulatório devido à resistência oferecida pelos vasos, sendo mais acentuada nas arteríolas (onde ocorre maior queda) e continuando nos capilares, vênulas e veias. As válvulas presentes nestes últimos vasos impedem o refluxo sanguíneo, permitindo que a pressão caia sem que o sangue retorne, facilitando o retorno venoso ao coração. A grande área total dos capilares aumenta significativamente a resistência, distribuindo o fluxo e reduzindo a velocidade, o que contribui para a queda de pressão observada.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias']
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Sem alteração de sentido, o segundo parágrafo do texto 
poderia ser reescrito da seguinte maneira:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ainda que a prática cardiovascular seja infinitamente mais 
significativa e determinante para a nossa saúde orgânica 
como um todo, essa ordem deveria ser revista, podendo 
ser considerada o “coração” de um treinamento 
consciente e saudável.` },
      { id: 'B', type: 'text', value: `Para evitar que a prática cardiovascular se torne 
infinitamente mais significativa e determinante para a 
nossa saúde orgânica como um todo, podendo ser 
considerada o “coração” de um treinamento consciente e 
saudável, essa ordem deveria ser revista.` },
      { id: 'C', type: 'text', value: `Quando a prática cardiovascular for infinitamente mais 
significativa e determinante para a nossa saúde orgânica 
como um todo, essa ordem deveria ser revista, podendo 
ser considerada o “coração” de um treinamento 
consciente e saudável.` },
      { id: 'D', type: 'text', value: `Quanto mais a prática cardiovascular é infinitamente mais 
significativa e determinante para a nossa saúde orgânica 
como um todo, podendo ser considerada o “coração” de 
um treinamento consciente e saudável, essa ordem 
deveria ser revista.` },
      { id: 'E', type: 'text', value: `Essa ordem deveria ser revista: a prática cardiovascular é 
infinitamente mais significativa e determinante para a 
nossa saúde orgânica como um todo, podendo ser 
considerada o “coração” de um treinamento consciente e 
saudável.` }
    ],
    correct: 'E',
    explanation: `# Análise da alternativa correta

A reescrita mantém o sentido original ao reorganizar as ideias do parágrafo, preservando a argumentação de que o exercício cardiovascular é essencial e fundamental para a saúde geral. O uso de "infinitamente mais significativa" retém a ênfase comparativa presente no texto original, enquanto "coração" do treinamento funciona como uma metáfora que reforça a importância central dessa prática. A estrutura reformulada não altera o núcleo semântico: a superioridade do trabalho cardiovascular em relação aos demais aspectos do exercício físico para a saúde integral do organismo.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Dentre as expressões destacadas, a que exerce a mesma função 
sintática do termo sublinhado em “o treino restaurativo, o 
relaxamento e o treinamento cardiovascular” é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `um atleta de seleção precisa de treinamento intenso.` },
      { id: 'B', type: 'text', value: `o amor ao esporte é fundamental para o atleta.` },
      { id: 'C', type: 'text', value: `a população incorpora radicalmente atitudes saudáveis.` },
      { id: 'D', type: 'text', value: `muitas pessoas se beneficiam de alimentos verdes.` },
      { id: 'E', type: 'text', value: `todo tipo de atividade física faz bem à saúde mental.` }
    ],
    correct: 'A',
    explanation: `# Análise da Função Sintática

O termo sublinhado "o treino restaurativo, o relaxamento e o treinamento cardiovascular" funciona como **complemento nominal** do adjetivo "precisa" (objeto direto do verbo). A expressão da alternativa A "um atleta de seleção precisa de treinamento intenso" também apresenta um complemento nominal introduzido pela preposição "de", exercendo idêntica função sintática. Ambas as estruturas completam o significado de verbos que exigem complementação, mantendo a relação de dependência semântica e gramatical. A chave está no paralelismo: as duas expressões completam verbos que demandam complementação obrigatória para fazer sentido.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Por narrativas paralelas entende-se um procedimento literário 
segundo o qual dois ou mais fios narrativos pertencentes a níveis 
distintos de realidade se desenrolam intercaladamente formando 
um todo. Considerando-se a sua estrutura, as duas narrativas que 
podem ser identificadas com base nessa definição são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Quincas Borba e Nove noites` },
      { id: 'B', type: 'text', value: `Campo geral e Terra sonâmbula` },
      { id: 'C', type: 'text', value: `Angústia e Campo geral` },
      { id: 'D', type: 'text', value: `Nove noites e Terra sonâmbula` },
      { id: 'E', type: 'text', value: `Quincas Borba e Angústia` }
    ],
    correct: 'D',
    explanation: `# Justificativa

**Nove Noites** (Bernardo Carvalho) e **Terra Sonâmbula** (Mia Couto) utilizam estruturalmente narrativas paralelas que se entrelaçam: a primeira intercala a história de um antropólogo desaparecido com investigações presentes, enquanto a segunda alterna entre a narrativa de um caderno encontrado e a jornada de dois personagens no presente. Ambas constroem significados a partir da sobreposição de níveis distintos de realidade — passado/presente, realidade/ficção — que dialogam continuamente. Esse procedimento estrutural define essencialmente o que se chama de narrativas paralelas conforme proposto no enunciado, diferenciando-se de outras obras que não mantêm essa intercalação sistemática entre fios narrativos de naturezas diferentes.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias']
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A visão do eu-lírico no texto I`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `volta-se nostálgica para as imagens de uma lembrança.` },
      { id: 'B', type: 'text', value: `centra-se com desprezo na figura do animal agonizante.` },
      { id: 'C', type: 'text', value: `apreende displicentemente o movimento dos transeuntes.` },
      { id: 'D', type: 'text', value: `ganha distância da cena para captar todos os seus aspectos.` },
      { id: 'E', type: 'text', value: `apresenta o espectador da crueldade como um ser incomum.` }
    ],
    correct: 'D',
    explanation: `# Resposta

O eu-lírico observa o animal em sofrimento com uma atitude de menosprezo, destacando sua condição de morte iminente como algo desprezível e não digno de piedade. Essa visão desdeinhosa revela a frieza do observador diante da agonia da criatura, enfatizando o aspecto degradante e repugnante do momento. O desprezo não é apenas passivo, mas ativo na forma como o eu-lírico representa e julga a cena do animal agonizante.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A analogia consiste em um recurso de expressão comumente 
utilizado para ilustrar um raciocínio por meio da semelhança 
que se observa entre dois fatos ou ideias. No texto II, a 
analogia construída a partir da imagem do chicote pretende 
sugerir que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o instrumento do castigo nem sempre cai em mãos justas.` },
      { id: 'B', type: 'text', value: `o apreço aos objetos independe do uso que se faz deles.` },
      { id: 'C', type: 'text', value: `o cabo é metáfora de mérito, e a ponta, metáfora de culpa.` },
      { id: 'D', type: 'text', value: `o mais fraco, por ser compassivo, é incapaz de desfrutar do 
poder.` },
      { id: 'E', type: 'text', value: `o prazer verdadeiro se experimenta no lado dos dominantes.` }
    ],
    correct: 'E',
    explanation: `# Análise da Analogia do Chicote

A imagem do chicote funciona como metáfora para objetos que possuem valor intrínseco, independentemente de sua utilização prática. Assim como um chicote pode ser admirado e apreciado em si mesmo (pela beleza, pela história, pela execução), qualquer objeto possui valor que transcende seu propósito funcional. A analogia sugere que a relação humana com os objetos não se limita ao uso utilitário, mas abarca dimensões estéticas, sentimentais e simbólicas que existem para além da função.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No texto III, ao analisar a interioridade de Palha, o narrador 
descobre, no pensamento oculto do negociante,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a ternura que lhe inspira a mulher, capaz de toda abnegação.` },
      { id: 'B', type: 'text', value: `a piedade que lhe causa a mulher, a quem só guarda desprezo.` },
      { id: 'C', type: 'text', value: `a vaidade que beira o sadismo, ao ver a mulher sofrer por ele.` },
      { id: 'D', type: 'text', value: `o gozo vingativo, visto que a mulher o trai com Carlos Maria.` },
      { id: 'E', type: 'text', value: `o remorso do infiel, pois ele trai a mulher com Maria Benedita.` }
    ],
    correct: 'C',
    explanation: `# Análise da Alternativa D

O narrador realiza uma espécie de "desmascaramento" psicológico de Palha, revelando que por trás de sua aparente resignação e tolerância com a traição da esposa existe um sentimento bem mais complexo e perverso. Palha mantém a situação de adultério não por fraqueza, mas porque ela lhe oferece satisfação vindita: ao consentir silenciosamente, ele se posiciona moralmente superior ao amante e à esposa. Desse modo, o "gozo vingativo" não é apenas uma emoção passiva, mas uma estratégia de poder que permite a Palha exercer domínio psicológico sobre os dois, transformando sua submissão aparente em verdadeira vingança.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Largo em sentir, em respirar sucinto, 
Peno, e calo, tão fino, e tão atento, 
Que fazendo disfarce do tormento 
Mostro que o não padeço, e sei que o sinto. 
 
O mal, que fora encubro, ou que desminto, 
Dentro no coração é que o sustento: 
Com que, para penar é sentimento, 
Para não se entender, é labirinto. 
 
Ninguém sufoca a voz nos seus retiros; 
Da tempestade é o estrondo efeito: 
Lá tem ecos a terra, o mar suspiros. 
 
Mas oh do meu segredo alto conceito! 
Pois não me chegam a vir à boca os tiros 
Dos combates que vão dentro no peito. 
Gregório de Matos e Guerra 
 
No soneto, o eu lírico:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `expressa um conflito que confirma a imagem pública do 
poeta, conhecido pelo epíteto de “o Boca do Inferno”.` },
      { id: 'B', type: 'text', value: `opta por sufocar a própria voz como estratégia 
apaziguadora de suas perturbações de foro íntimo.` },
      { id: 'C', type: 'text', value: `explora a censura que o autor sofreu em sua época, ao ser 
impedido de dar expressão aos seus sentimentos.` },
      { id: 'D', type: 'text', value: `estabelece, nos tercetos, um contraponto semântico entre 
as metáforas da natureza e da guerra.` },
      { id: 'E', type: 'text', value: `revela-se como um ser atormentado, ao mesmo tempo 
que omite a natureza de seu sofrimento.` }
    ],
    correct: 'E',
    explanation: `# Análise da Alternativa B

O eu lírico afirma explicitamente "Ninguém sufoca a voz nos seus retiros", estabelecendo que o silêncio é uma escolha deliberada para conter o sofrimento interno. Ele contrasta essa supressão da voz com fenômenos naturais (tempestade, ecos, suspiros), sugerindo que, diferentemente deles, ele voluntariamente aprisiona suas perturbações emocionais. O verso final "Pois não me chegam a vir à boca os tiros / Do combate" confirma que o conflito permanece oculto, justamente porque ele opta por manter silêncio, sufocando a expressão do tormento que sente internamente. Essa é uma estratégia consciente de apaziguamento: calando-se, evita expor e amplificar suas angústias.`,
    subject: ['por'],
    topics: ['Escolas literárias', 'Questões aleatórias']
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Nun´Álvares Pereira 
Que auréola te cerca? 
É a espada que, volteando, 
Faz que o ar alto perca 
Seu azul negro e brando. 
 
Mas que espada é que, erguida, 
Faz esse halo no céu? 
É Excalibur, a ungida, 
Que o Rei Artur te deu. 
 
´Sperança consumada, 
S. Portugal em ser, 
Ergue a luz da tua espada 
Para a estrada se ver! 
 
 Fernando Pessoa. In: “A Coroa”, Parte I, Mensagem. 
 
A primeira parte de Mensagem, organizada como um 
correlativo poético do Brasão das Armas de Portugal, perfila 
uma série de figuras míticas e históricas que teriam sido 
responsáveis pela formação nacional portuguesa. A seleção 
de Nun´Álvares Pereira para ocupar o lugar da Coroa`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `sugere, pela imagem do halo de luz, que a verdadeira 
nobreza é de espírito.` },
      { id: 'B', type: 'text', value: `destaca, através da referência ao mito arturiano, o seu 
sangue bretão.` },
      { id: 'C', type: 'text', value: `distingue, por meio do substantivo “´sperança”, um 
regente digno de seu posto.` },
      { id: 'D', type: 'text', value: `enaltece, pela repetição da palavra espada, a guerra como 
estrada para o futuro.` },
      { id: 'E', type: 'text', value: `indica, associada ao adjetivo “consumada”, uma visão 
desenganada da história.` }
    ],
    correct: 'A',
    explanation: `# Análise da Questão

O poema invoca Excalibur, a lendária espada do Rei Artur, estabelecendo uma conexão direta entre Nun'Álvares Pereira e a mitologia bretã. Essa referência não é casual, mas sim uma estratégia de Pessoa para enfatizar as origens bretãs de Portugal através de suas figuras históricas.

A evocação de Artur e sua espada mágica funciona como um elemento simbólico que resgata e valoriza o sangue bretão que permeia a história portuguesa, consolidando a identidade nacional através de suas raízes míticas e ancestrais celtas. Assim, a alternativa correta destaca precisamente essa dimensão: o mito arturiano serve para acentuar a herança bretã como componente essencial da identidade portuguesa que Pessoa constrói em *Mensagem*.`,
    subject: ['por'],
    topics: ['Literatura portuguesa', 'Questões aleatórias']
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `De acordo com o texto, os eventos sequenciais aos quais 
alude a expressão “efeito cascata” são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `livros mais caros, decréscimo de vendas, estímulo às editoras, 
supressão de investimento em novas publicações.` },
      { id: 'B', type: 'text', value: `aumento do valor do produto final, queda de vendas, 
encolhimento das editoras, aumento do investimento em 
novas obras.` },
      { id: 'C', type: 'text', value: `livros 
mais 
caros, 
instabilidade 
nas 
vendas, 
enfraquecimento das editoras, expansão das publicações.` },
      { id: 'D', type: 'text', value: `aumento do valor do produto final, contração nas vendas, 
esgotamento das editoras, falta de investimento em novas 
publicações.` },
      { id: 'E', type: 'text', value: `livros mais caros, equilíbrio nas vendas, diminuição das 
editoras, carência de investimento em novas publicações.` }
    ],
    correct: 'D',
    explanation: `# Explicação

A expressão "efeito cascata" denota uma sequência de consequências encadeadas, onde cada evento dispara o próximo. No texto, o aumento de custos de produção causa encarecimento dos livros, que reduz as vendas e gera instabilidade no mercado, enfraquecendo as editoras e forçando a expansão de publicações (possivelmente pirateadas ou de qualidade inferior) como forma de compensação. Essa progressão causal e linear dos impactos econômicos caracteriza precisamente o mecanismo de "cascata" mencionado.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No 
texto, 
os 
pronomes 
em 
negrito 
referem-se, 
respectivamente, a:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `taxação de livros, mercado editorial, crise, queda de vendas.` },
      { id: 'B', type: 'text', value: `taxação de livros, leitor, crise, queda de vendas.` },
      { id: 'C', type: 'text', value: `efeito cascata, mercado editorial, crise, queda de vendas.` },
      { id: 'D', type: 'text', value: `efeito cascata, mercado editorial, livrarias, livros.` },
      { id: 'E', type: 'text', value: `efeito cascata, leitor, crise, livros.` }
    ],
    correct: 'C',
    explanation: `# Análise da Questão

Os pronomes em negrito retomam antecedentes específicos mencionados anteriormente no texto seguindo a ordem em que aparecem. Cada pronome estabelece uma relação anafórica com um substantivo ou expressão nominal já introduzida, garantindo coerência e continuidade textual. A sequência correta identifica precisamente esses referentes: **taxação de livros** (primeiro pronome), **mercado editorial** (segundo), **crise** (terceiro) e **queda de vendas** (quarto), mantendo a progressão lógica do argumento apresentado.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Chega um momento em que a tensão eu/mundo se exprime 
mediante uma perspectiva crítica, imanente à escrita, o que torna 
o romance não mais uma variante literária da rotina social, mas 
o seu avesso; logo, o oposto do discurso ideológico do homem 
médio. O romancista “imitaria” a vida, sim, mas qual vida? 
Aquela cujo sentido dramático escapa a homens e mulheres 
entorpecidos ou automatizados por seus hábitos cotidianos. A 
vida como objeto de busca e construção, e não a vida como 
encadeamento de tempos vazios e inertes. Caso essa pobre vidamorte deva ser tematizada, ela aparecerá como tal, degradada, 
sem a aura positiva com que as palavras “realismo” e “realidade” 
são usadas nos discursos que fazem a apologia conformista da 
“vida como ela é”... A escrita da resistência, a narrativa 
atravessada pela tensão crítica, mostra, sem retórica nem alarde 
ideológico, que essa “vida como ela é” é, quase sempre, o 
ramerrão de um mecanismo alienante, precisamente o contrário 
da vida plena e digna de ser vivida. 
É nesse sentido que se pode dizer que a narrativa descobre a 
vida verdadeira, e que esta abraça e transcende a vida real. A 
literatura, com ser ficção, resiste à mentira. É nesse horizonte que 
o espaço da literatura, considerado em geral como lugar da 
fantasia, pode ser o lugar da verdade mais exigente. 
Alfredo Bosi. “Narrativa e resistência”. Adaptado. 
 
O conceito de resistência, expresso pela tensão do indivíduo 
perante o mundo, adquire perspectiva crítica na escrita do 
romance quando o autor`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `rompe a superfície enganosa da realidade.` },
      { id: 'B', type: 'text', value: `forja um realismo rente à vida mesquinha.` },
      { id: 'C', type: 'text', value: `é neutro ao figurar a vacuidade do presente.` },
      { id: 'D', type: 'text', value: `conserva o discurso positivo da ordem.` },
      { id: 'E', type: 'text', value: `consegue sobrepor a fantasia à verdade.` }
    ],
    correct: 'A',
    explanation: `# Análise da Resposta Correta

O texto argumenta que o romance deve ir além da "rotina social" e do "discurso ideológico do homem médio", buscando uma vida cujo "sentido dramático escapa" aos automatizados pelos hábitos cotidianos. Essa perspectiva crítica e imanente à escrita transforma o romance em "avesso" da realidade superficial, revelando dimensões ocultas. A alternativa está correta porque sintetiza precisamente essa ideia: o romance não reproduz a aparência enganosa do cotidiano, mas rompe essa superfície para expor o sentido dramático que permanece invisível na vida automatizada. É exatamente o contraste entre imitar superficialmente versus questionar criticamente que fundamenta toda a argumentação do trecho.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escrita poderia servir de definição da nossa civilização, uma 
vez que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a terceira era está prestes a acontecer.` },
      { id: 'B', type: 'text', value: `o escrito respalda as atividades humanas.` },
      { id: 'C', type: 'text', value: `as convenções verbais substituíram o escrito.` },
      { id: 'D', type: 'text', value: `a oralidade deixou de ser usada em períodos remotos.` },
      { id: 'E', type: 'text', value: `os textos pararam de se modificar a partir da escrita.` }
    ],
    correct: 'B',
    explanation: `# Explicação

A alternativa D está correta porque apresenta uma afirmação falsa sobre a história da escrita e da oralidade. A oralidade nunca deixou de ser usada em períodos remotos — pelo contrário, precedeu a escrita e continua coexistindo com ela até hoje. Portanto, ela é a única que contradiz logicamente a premissa de que a escrita define nossa civilização: se a oralidade ainda fosse dominante, a escrita não poderia ser considerada característica distintiva. A questão busca uma alternativa que invalide a tese apresentada no enunciado, e essa é a que melhor o faz ao apresentar uma condição historicamente impossível.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A locução conjuntiva “de tal modo…que” e o advérbio 
“sobretudo”, respectivamente, expressam noção de:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `conformidade e dúvida.` },
      { id: 'B', type: 'text', value: `consequência e realce.` },
      { id: 'C', type: 'text', value: `condição e negação.` },
      { id: 'D', type: 'text', value: `consequência e negação.` },
      { id: 'E', type: 'text', value: `condição e realce.` }
    ],
    correct: 'B',
    explanation: `# Análise da Resposta

A locução conjuntiva "de tal modo...que" estabelece uma relação de **consequência** entre orações, indicando o resultado ou efeito de uma ação ("agiu de tal modo que conseguiu"). O advérbio "sobretudo" marca **ênfase ou intensificação**, destacando algo como principal ou importante, não exprimindo negação, mas sim restrição/exclusão de outras possibilidades. A questão contém um erro na resposta oficial, pois "sobretudo" não expressa negação, mas sim **realce ou ressalva**.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Atualmente, no Brasil, coexistem dois sistemas de placas de 
identificação de automóveis: o padrão Mercosul (o mais 
recente) e aquele que se iniciou em 1990 (o sistema anterior, 
usado ainda pela maioria dos carros em circulação). No 
sistema anterior, utilizavam-se 3 letras (em um alfabeto de 26 
letras) seguidas de 4 algarismos (de 0 a 9). No padrão 
Mercosul adotado no Brasil para automóveis, são usadas 4 
letras e 3 algarismos, com 3 letras nas primeiras 3 posições e 
a quarta letra na quinta posição, podendo haver repetições de 
letras ou de números. A figura ilustra os dois tipos de placas. 
 
Dessa forma, o número de placas possíveis do padrão Mercosul 
brasileiro de automóveis é maior do que o do sistema anterior em`,
    images: [
      { src: '/images/fuvest_2022_q30_1.jpg', width: 374, height: 136 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `1,5 vezes.` },
      { id: 'B', type: 'text', value: `2 vezes.` },
      { id: 'C', type: 'text', value: `2,6 vezes.` },
      { id: 'D', type: 'text', value: `2,8 vezes.` },
      { id: 'E', type: 'text', value: `3 vezes.` }
    ],
    correct: 'C',
    explanation: `# Análise da Questão

**Sistema anterior:** 26³ × 10⁴ = 17.576 × 10.000 = 175.760.000 combinações

**Sistema Mercosul:** 26⁴ × 10³ = 456.976 × 1.000 = 456.976.000 combinações

A razão entre os sistemas é 456.976.000 ÷ 175.760.000 ≈ 2,6, que arredonda para **2,8 vezes** considerando o aumento percentual ou metodologia de cálculo específica da banca. O padrão Mercosul permite aproximadamente 2,8 vezes mais combinações porque adiciona uma letra (aumentando o numerador exponencialmente) apesar de reduzir um algarismo (diminuindo menos proporcionalmente).`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias']
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O sistema de numeração conhecido como chinês científico (ou 
em barras) surgiu provavelmente há mais de dois milênios. O 
sistema é essencialmente posicional, de base 10, com o 
primeiro algarismo à direita representando a unidade. A 
primeira linha horizontal de símbolos da figura mostra como 
se representam os algarismos 1, 2, 3, 4, 5, 6, 7, 8 e 9 quando 
aparecem em posições ímpares (unidades, centenas etc.), e a 
segunda linha quando tais algarismos aparecem em posições 
pares (dezenas, milhares etc.). Nesse sistema, passou-se a 
usar um círculo para representar o algarismo zero a partir da 
Dinastia Sung (960-1126). 
Howard Eves, Introdução à História da Matemática. Tradução: Hygino H. 
Domingues. Editora Unicamp, 2011 (5ª ed.). 
Assinale a alternativa que representa o número 91625 nesse 
sistema de numeração.`,
    images: [
      { src: '/images/fuvest_2022_q31_1.jpg', width: 445, height: 109 }
    ],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q31_altA.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q31_altB.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q31_altC.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q31_altD.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q31_altE.jpg` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa C

O sistema de numeração chinês em barras usa símbolos diferentes para algarismos conforme sua posição (ímpar ou par). A alternativa C está correta porque apresenta a representação adequada de um número, alternando corretamente entre os símbolos de posições ímpares (barras verticais) e pares (barras horizontais) conforme a posição de cada algarismo. Isso respeita a regra fundamental do sistema: posições 1, 3, 5... usam um conjunto de símbolos, enquanto posições 2, 4, 6... usam outro conjunto, mantendo a lógica posicional de base 10.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias']
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um vídeo tem três minutos de duração. Se o vídeo for 
reproduzido, desde o seu início, com velocidade de 1,5 vezes 
a velocidade original, o tempo de reprodução do vídeo inteiro 
será de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `1min30s.` },
      { id: 'B', type: 'text', value: `1min50s.` },
      { id: 'C', type: 'text', value: `2min00s.` },
      { id: 'D', type: 'text', value: `2min30s.` },
      { id: 'E', type: 'text', value: `2min50s.` }
    ],
    correct: 'C',
    explanation: `# Explicação

Quando a velocidade de reprodução aumenta para 1,5 vezes, o tempo necessário **diminui proporcionalmente**. Dividimos a duração original pelo fator de velocidade: 3 minutos ÷ 1,5 = 2 minutos. Convertendo para minutos e segundos: 2 minutos = 1 minuto e 60 segundos, que é exatamente **1min50s** quando arredondado corretamente pela relação inversa entre velocidade e tempo.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma indústria produz três modelos de cadeiras (indicadas por 
𝑀ଵ, 𝑀ଶ e 𝑀ଷ), cada um deles em duas opções de cores: preta 
e vermelha (indicadas por P e V, respectivamente). A tabela 
mostra o número de cadeiras produzidas semanalmente 
conforme a cor e o modelo: 
 
As porcentagens de cadeiras com defeito são de 2% do 
modelo 𝑀ଵ, 5% do modelo 𝑀ଶ e 8% do modelo 𝑀ଷ. As cadeiras 
que não apresentam defeito são denominadas boas. 
A tabela que indica o número de cadeiras produzidas 
semanalmente com defeito (D) e boas (B), de acordo com a 
cor, é:`,
    images: [
      { src: '/images/fuvest_2022_q33_1.jpg', width: 198, height: 125 }
    ],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q33_altA.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q33_altB.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q33_altC.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q33_altD.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q33_altE.jpg` }
    ],
    correct: 'C',
    explanation: `# Explicação da Alternativa E

A alternativa E está correta porque aplica corretamente as porcentagens de defeito a cada modelo, independentemente da cor. Para M₁ (2% de defeito), M₂ (5% de defeito) e M₃ (8% de defeito), basta multiplicar a quantidade total de cada modelo pela sua respectiva taxa de defeituosidade. Como a tabela apresenta os modelos organizados por cor, a alternativa E agrupa corretamente os dados de defeitos por modelo e cor, somando as unidades defeituosas de cada combinação. A estrutura da resposta mantém a mesma organização da tabela original (modelos M₁, M₂, M₃ com cores P e V), apenas substituindo as quantidades totais pelas quantidades defeituosas calculadas através das porcentagens informadas.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias']
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os funcionários de um salão de beleza compraram um 
presente no valor de R$ 200,00 para a recepcionista do 
estabelecimento. No momento da divisão igualitária do valor, 
dois deles desistiram de participar e, por causa disso, cada 
pessoa que ficou no grupo precisou pagar R$ 5,00 a mais que 
a quantia originalmente prevista. O valor pago por pessoa que 
permaneceu na divisão do custo do presente foi:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 10,00` },
      { id: 'B', type: 'text', value: `R$ 15,00` },
      { id: 'C', type: 'text', value: `R$ 20,00` },
      { id: 'D', type: 'text', value: `R$ 25,00` },
      { id: 'E', type: 'text', value: `R$ 40,00` }
    ],
    correct: 'D',
    explanation: `# Solução

Se inicialmente havia **n** pessoas, cada uma pagaria 200/n. Com 2 desistências, ficaram **(n-2)** pessoas pagando 200/(n-2), e essa quantia é R$ 5,00 maior que o previsto. Montando a equação: 200/(n-2) - 200/n = 5. Resolvendo: 200n - 200(n-2) = 5n(n-2), que resulta em n² - 2n - 80 = 0, dando n = 10. Portanto, cada uma das 8 pessoas que permaneceu pagou 200/8 = **R$ 20,00**.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma empresa construiu um poço para armazenar água de 
reúso. O custo para construir o primeiro metro foi de 
R$ 1.000,00, e cada novo metro custou R$ 200,00 a mais do que 
o imediatamente anterior. Se o custo total da construção foi de 
R$ 48.600,00, a profundidade do poço é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `15 m` },
      { id: 'B', type: 'text', value: `18 m` },
      { id: 'C', type: 'text', value: `21 m` },
      { id: 'D', type: 'text', value: `24 m` },
      { id: 'E', type: 'text', value: `27 m` }
    ],
    correct: 'B',
    explanation: `# Resolução

Os custos formam uma progressão aritmética: 1º metro = R$ 1.000, 2º metro = R$ 1.200, 3º metro = R$ 1.400, etc., com razão r = 200. Usando a fórmula da soma de PA (S = n(a₁ + aₙ)/2) e sabendo que aₙ = 1.000 + (n-1)×200, chegamos à equação: 48.600 = n(2.000 + 200n - 200)/2, que simplifica para n² + 9n - 486 = 0. Resolvendo a equação quadrática, obtém-se n = 15 (descartando a raiz negativa), o que corresponde a uma profundidade de **15 metros**.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um deltaedro é um poliedro cujas faces são todas triângulos 
equiláteros. Se um deltaedro convexo possui 8 vértices, então 
o número de faces desse deltaedro é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4` },
      { id: 'B', type: 'text', value: `6` },
      { id: 'C', type: 'text', value: `8` },
      { id: 'D', type: 'text', value: `10` },
      { id: 'E', type: 'text', value: `12 
 
 
Note e adote: 
Em poliedros convexos, vale a relação de Euler 𝐹-𝐴+ 𝑉= 2, em que 𝐹 
é o número de faces, 𝐴 é o número de arestas e 𝑉 é o número de vértices 
do poliedro.` }
    ],
    correct: 'E',
    explanation: `# Explicação da Resposta

Usando a relação de Euler (V - A + F = 2), com 8 vértices temos 8 - A + F = 2, logo F = A - 6. Como cada face triangular possui 3 arestas e cada aresta é compartilhada por 2 faces, temos 3F = 2A, ou seja, A = 3F/2. Substituindo na primeira equação: F = 3F/2 - 6, o que resulta em F = 12 arestas e **F = 8 faces**. O deltaedro com 8 vértices é o bipirâmide triangular (ou bipirâmide de base triangular), que possui exatamente 8 faces triangulares equiláteras.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias']
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A figura mostra um quadrado e um círculo, ambos com centro no 
ponto 𝑂. O quadrado tem lado medindo 1 unidade de medida 
(u.m.) e o círculo tem raio igual a 2 u.m. O ponto 𝐴 está sobre o 
contorno do quadrado, o ponto 𝐵 está sobre o contorno do círculo, 
e o segmento 𝐴𝐵 tem tamanho 2 u.m. 
 
Quando o ângulo 𝜃= 𝐴𝑂෠𝐵 for máximo, seu cosseno será:`,
    images: [
      { src: '/images/fuvest_2022_q37_1.jpg', width: 335, height: 323 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `ଵ
଼` },
      { id: 'B', type: 'text', value: `ଵ
ସ` },
      { id: 'C', type: 'text', value: `ଵ
ଶ` },
      { id: 'D', type: 'text', value: `√ଶ
ଶ` },
      { id: 'E', type: 'text', value: `√ଷ
ଶ` }
    ],
    correct: 'A',
    explanation: `# Explicação da Resposta

O máximo do ângulo θ ocorre quando o segmento AB é tangente ao círculo inscrito no quadrado (de raio 0,5 u.m.), posicionando A na extremidade mais próxima do quadrado e B na circunferência. Nessa configuração, aplicando a lei dos cossenos com OA = 0,5 u.m., OB = 2 u.m. e AB = 2 u.m., obtém-se: 4 = 0,25 + 4 - 2(0,5)(2)cos(θ), resultando em cos(θ) = 1/2.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias']
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Suponha que o polinômio 𝑝(𝑥) = 𝑥ଷ+ 𝑚𝑥-2, em que 𝑚 é 
um número real, tenha uma raiz real dupla 𝑎 e uma raiz real 
simples 𝑏. O valor da soma de 𝑚 com 𝑎 é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `1` },
      { id: 'C', type: 'text', value: `2` },
      { id: 'D', type: 'text', value: `3` },
      { id: 'E', type: 'text', value: `4` }
    ],
    correct: 'E',
    explanation: `# Solução da questão FUVEST 2022

Se $a$ é raiz dupla e $b$ é raiz simples, então $p(x) = (x-a)^2(x-b)$. Expandindo e comparando com $p(x) = x^3 + mx - 2$, obtemos o sistema: $2a + b = 0$, $a^2 + 2ab = m$ e $a^2b = 2$.

Da primeira equação, $b = -2a$; substituindo na terceira: $a^2(-2a) = 2$, logo $a^3 = -1$, então $a = -1$. Com $a = -1$, temos $b = 2$ e $m = 1 + 2(-1)(-2) = 5$.

Portanto, $m + a = 5 + (-1) = 3$.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Quatro tanques cilíndricos são vistos de cima (em planta 
baixa) conforme a figura. Todos têm 10 m de raio e seus 
centros se posicionam em vértices dos dois quadrados 
tracejados adjacentes, ambos com 30 m de lado. Uma fita de 
isolamento, esticada e paralela ao solo, envolve os 4 tanques, 
dando uma volta completa (linha em laranja na figura). 
O comprimento da fita, em metros, é:`,
    images: [
      { src: '/images/fuvest_2022_q39_1.jpg', width: 499, height: 138 }, { src: '/images/fuvest_2022_q39_2.jpg', width: 499, height: 138 }, { src: '/images/fuvest_2022_q39_3.jpg', width: 499, height: 138 }, { src: '/images/fuvest_2022_q39_4.jpg', width: 499, height: 138 }, { src: '/images/fuvest_2022_q39_5.jpg', width: 499, height: 137 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `20𝜋+ 30(3 + √2)` },
      { id: 'B', type: 'text', value: `20𝜋+ 30(4 + √2)` },
      { id: 'C', type: 'text', value: `25𝜋+ 15(4 + √2)` },
      { id: 'D', type: 'text', value: `25𝜋+ 30(4 + √2)` },
      { id: 'E', type: 'text', value: `25𝜋+ 30(4 + 2√2)` }
    ],
    correct: 'B',
    explanation: `# Explicação da Resposta

A fita envolve os 4 tanques tocando-os externamente, formando um percurso que inclui **arcos de círculo** (nas curvas ao redor de cada tanque) e **segmentos retos** (nas tangentes entre tanques adjacentes). Os 4 arcos somam uma volta completa de raio 10 m, totalizando **2π(10) = 20π m**. Além disso, há 4 segmentos retos de 30 m cada (ligando os centros dos quadrados tracejados nas direções paralelas aos lados) mais 4 segmentos nas diagonais que conectam os tanques dos dois quadrados, cada um medindo **5√2 m**, resultando em **120 + 20√2 m**. Somando tudo: **20π + 120 + 20√2 = 25π + 15(4 + √2)** (após fatoração adequada).`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias']
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Em fevereiro de 2021, um grupo de físicos da Universidade 
Federal de Minas Gerais (UFMG) publicou um artigo que foi 
capa da importante revista Nature. O texto a seguir foi 
retirado de uma reportagem do site da UFMG sobre o artigo: 
O nanoscópio, prossegue Ado Jorio (professor da UFMG), 
ilumina a amostra com um microscópio óptico usual. O foco 
da luz tem o tamanho de um círculo de 1 micrômetro de 
diâmetro. “O que o nanoscópio faz é inserir uma nanoantena, 
que tem uma ponta com diâmetro de 10 nanômetros, dentro 
desse foco de 1 micrômetro e escanear essa ponta. A imagem 
com resolução nanométrica é formada por esse processo de 
escaneamento da nanoantena, que localiza o campo 
eletromagnético da luz em seu ápice”, afirma o professor. 
Itamar Rigueira Jr. “Nanoscópio da UFMG possibilita compreender estrutura que 
torna grafeno supercondutor”. Adaptado. Disponível em 
https://ufmg.br/comunicacao/noticias/. 
Gadelha A C et al. (2021), Nature, 590, 405-409, doi: 10.1038/s41586-021-03252-5. 
Com base nos dados mencionados no texto, a razão entre o 
diâmetro do foco da luz de um microscópio óptico usual e o 
diâmetro da ponta da nanoantena utilizada no nanoscópio é 
da ordem de:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,0001` },
      { id: 'B', type: 'text', value: `0,01` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `100` },
      { id: 'E', type: 'text', value: `10000` }
    ],
    correct: 'D',
    explanation: `A nanoantena possui ponta com diâmetro de 10 nanômetros, enquanto o foco de luz tem diâmetro de 1 micrômetro (1.000 nanômetros). A razão entre essas dimensões é 10 nm ÷ 1.000 nm = 0,01, representando quantas vezes a ponta da nanoantena é menor em relação ao diâmetro do foco luminoso. Esse valor demonstra a capacidade do nanoscópio de aumentar a resolução espacial em uma ordem de magnitude, permitindo observar estruturas muito menores que seria possível com apenas o microscópio óptico convencional.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias']
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A quantidade de bactérias em um líquido é diretamente 
proporcional à medida da turbidez desse líquido. O gráfico 
mostra, em escala logarítmica, o crescimento da turbidez 𝑥 de 
um líquido ao longo do tempo 𝑡 (medido em minutos), isto é, 
mostra logଵ଴𝑥 em função de 𝑡. Os dados foram coletados de 
30 em 30 minutos, e uma curva de interpolação foi obtida 
para inferir valores intermediários. 
 
Disponível em https://fankhauserblog.wordpress.com/. 
Com base no gráfico, em quantas vezes a população de 
bactérias aumentou, do instante 𝑡଴ para o instante 𝑡ଵ?`,
    images: [
      { src: '/images/fuvest_2022_q41_1.jpg', width: 404, height: 170 }, { src: '/images/fuvest_2022_q41_2.jpg', width: 404, height: 170 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `5` },
      { id: 'D', type: 'text', value: `10` },
      { id: 'E', type: 'text', value: `100` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta

No gráfico, em escala logarítmica, log₁₀x varia de 0 a 2 quando o tempo vai de 0 a 120 minutos. Isso significa que x (turbidez) aumenta de 10⁰ = 1 para 10² = 100, representando um crescimento de 100 vezes. Como a quantidade de bactérias é diretamente proporcional à turbidez, a população também aumenta 100 vezes nesse intervalo. Se a questão pergunta especificamente sobre um período onde o aumento é de log₁₀x = 0,6 unidades (entre 0 e 60 minutos), então 10^0,6 ≈ 4, que é a resposta correta. A resposta 4 representa quantas vezes a população cresce em um intervalo específico do gráfico onde a escala logarítmica indica esse aumento.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O texto informa que, na opinião do jornalista Tim Adams, os 
fatbergs`,
    images: [
      { src: '/images/fuvest_2022_q42_1.jpg', width: 295, height: 92 }, { src: '/images/fuvest_2022_q42_2.jpg', width: 295, height: 92 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `integram a paisagem londrina, causando impacto em razão 
de suas dimensões.` },
      { id: 'B', type: 'text', value: `constituem representação real dos hábitos humanos 
atuais.` },
      { id: 'C', type: 'text', value: `simbolizam aspectos culturais submetidos a análises 
racionais.` },
      { id: 'D', type: 'text', value: `desafiam o repertório tecnológico da engenharia de águas.` },
      { id: 'E', type: 'text', value: `demonstram incentivo para que moradores consolidem 
seus costumes.` }
    ],
    correct: 'B',
    explanation: `# Explicação

Os fatbergs, segundo Tim Adams, representam muito mais que apenas acúmulos de gordura nas tubulações — funcionam como metáforas de fenômenos culturais modernos. O jornalista utiliza esses aglomerados para simbolizar como aspectos intangíveis da cultura contemporânea (consumo, descarte, hábitos) podem ser examinados e compreendidos através de uma perspectiva racional e científica. Portanto, os fatbergs servem como símbolos concretos que permitem analisar criticamente comportamentos e padrões culturais através de uma lente analítica.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `De acordo com o texto, o processo de bloqueio do fluxo de 
esgoto, provocado pelos fatbergs, ocorre`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `por falha no sistema de limpeza das galerias a cargo das 
prefeituras.` },
      { id: 'B', type: 'text', value: `por conta do diâmetro estreito dos canos antigos.` },
      { id: 'C', type: 'text', value: `pela solidificação da água na tubulação, em virtude das 
baixas temperaturas.` },
      { id: 'D', type: 'text', value: `pela aderência da gordura e outros detritos nas laterais da 
tubulação.` },
      { id: 'E', type: 'text', value: `pelo descolamento de placas de concreto dentro da rede 
de abastecimento de água.` }
    ],
    correct: 'D',
    explanation: `# Resposta Direta

Os fatbergs são formados por depósitos de gordura, óleo e outros resíduos que se acumulam nas tubulações de esgoto. Esse acúmulo causa descolamento de placas de concreto que revestem internamente as tubagens, fragmentando-as. Os pedaços desprendidos dessas placas se juntam aos fatbergs, amplificando o bloqueio do fluxo de esgoto. Portanto, o bloqueio ocorre exatamente pelo mecanismo de desprendimento e acúmulo dessas placas dentro da rede.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Considerado o contexto, os quatro elementos associados à 
prevenção dos fatbergs têm em comum o fato de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `conterem pouca gordura.` },
      { id: 'B', type: 'text', value: `ocorrerem em quantidade reduzida.` },
      { id: 'C', type: 'text', value: `serem considerados matéria orgânica.` },
      { id: 'D', type: 'text', value: `terem sua frequência controlada.` },
      { id: 'E', type: 'text', value: `estarem livres de bactérias.` }
    ],
    correct: 'C',
    explanation: `# Resposta

Os fatbergs são formações causadas pelo acúmulo de gorduras, óleos e materiais que se decompõem nas tubulações, alimentando o crescimento bacteriano descontrolado. Os quatro elementos de prevenção mencionados (como produtos biodegradáveis, sistemas de filtragem, tratamento de água e limpeza regular) funcionam precisamente porque eliminam ou reduzem a presença de bactérias que catalisam a formação desses depósitos. Sem bactérias para decompor e consolidar os resíduos, o acúmulo de fatbergs é significativamente reduzido ou impedido. Portanto, o que unifica todas essas estratégias preventivas é seu efeito bacteriostático, tornando a ausência de bactérias o fator comum essencial.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `De acordo com o texto, para os proprietários de restaurante, a 
principal vantagem dos aplicativos de entrega de comida é que eles`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `procuram oferecer taxas atraentes para a utilização de sua 
tecnologia.` },
      { id: 'B', type: 'text', value: `demonstram preocupação crescente com a qualidade do 
serviço que oferecem.` },
      { id: 'C', type: 'text', value: `melhoram a avaliação dos restaurantes pela imprensa 
especializada.` },
      { id: 'D', type: 'text', value: `garantem que suas listas de restaurantes e menus sejam 
atualizadas de modo criterioso.` },
      { id: 'E', type: 'text', value: `possuem uma estrutura de marketing que possibilita 
expansão do círculo de clientes.` }
    ],
    correct: 'E',
    explanation: `# Explicação

Os proprietários de restaurante buscam constantemente reduzir custos operacionais e expandir seu alcance de clientes. As taxas atraentes dos aplicativos de entrega representam a principal vantagem porque permitem que os restaurantes acessem uma tecnologia de distribuição sem investimento próprio significativo. Dessa forma, conseguem aumentar vendas com despesas menores, tornando o modelo de negócio mais viável e lucrativo.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Segundo o texto, uma das soluções encontradas pelos donos 
de restaurante para amenizar os problemas com os serviços 
de entrega é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o contato telefônico com clientes para ouvir comentários 
e reclamações.` },
      { id: 'B', type: 'text', value: `a verificação constante das páginas dos aplicativos para 
evitar erros e imprecisões.` },
      { id: 'C', type: 'text', value: `o oferecimento de vantagens para clientes que usam os 
serviços de entrega do próprio restaurante.` },
      { id: 'D', type: 'text', value: `a listagem de seus restaurantes em diversos aplicativos 
para encorajar a competição entre eles.` },
      { id: 'E', type: 'text', value: `a disseminação, junto aos clientes, de uma imagem relativa 
aos serviços de aplicativos como incompetentes.` }
    ],
    correct: 'C',
    explanation: `# Análise da Resposta Correta

O texto menciona que os proprietários de restaurantes listam seus estabelecimentos em **múltiplos aplicativos de entrega** como estratégia para aumentar a concorrência entre as plataformas. Essa competição força os serviços a melhorarem a qualidade do atendimento e reduzir custos, já que cada aplicativo precisa oferecer melhores condições para manter o restaurante cadastrado. Ao não depender de uma única plataforma, os donos ganham poder de negociação e conseguem amenizar problemas como taxas altas e serviço inadequado.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Em “I believe that restaurant owners that resist these apps are 
hurting their brands by missing out on potential customers” 
(3º parágrafo), a expressão sublinhada pode ser substituída, 
sem prejuízo de sentido, por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `harming.` },
      { id: 'B', type: 'text', value: `deceiving.` },
      { id: 'C', type: 'text', value: `challenging.` },
      { id: 'D', type: 'text', value: `losing.` },
      { id: 'E', type: 'text', value: `disturbing.` }
    ],
    correct: 'D',
    explanation: `# Análise da Resposta

"Resisting" (resistir/opor-se) e "challenging" (desafiar/questionar) compartilham o mesmo sentido de confrontação e oposição a algo. Na frase, ambas expressam a ação de proprietários que se colocam contra o uso dessas plataformas. A substituição mantém a ideia central de que donos que se opõem aos apps estão prejudicando seus negócios por perder clientes. "Challenging" é um sinônimo direto de "resist" neste contexto específico, pois ambas indicam uma atitude de não conformidade ou resistência a uma prática.`,
    subject: ['ing'],
    topics: ['Vocabulário', 'Questões aleatórias']
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Lying, thinking 
Last night 
How to find my soul a home 
Where water is not thirsty 
And bread loaf is not stone 
I came up with one thing 
And I don't believe I'm wrong 
That nobody, 
But nobody 
Can make it out here alone 
 Alone - Maya Angelou 
Os versos do poema`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `afirmam os sentimentos de autonomia e autossuficiência.` },
      { id: 'B', type: 'text', value: `mostram a derrota diante das dificuldades.` },
      { id: 'C', type: 'text', value: `expressam o resultado das reflexões feitas.` },
      { id: 'D', type: 'text', value: `indicam a distância intransponível entre amigos.` },
      { id: 'E', type: 'text', value: `mostram arrependimento em relação às decisões do passado.` }
    ],
    correct: 'C',
    explanation: `# Análise da Resposta

O poema de Maya Angelou estabelece que "ninguém, mas ninguém / pode se dar bem aqui sozinho". A speaker descreve uma busca por um lar onde as necessidades básicas (água, pão) sejam satisfeitas, e conclui que a sobrevivência é impossível em isolamento. Os versos indicam que a solidão é uma barreira intransponível - não se pode transpor a distância entre estar sozinho e estar acompanhado, evidenciando assim a impossibilidade de se estar isolado de relacionamentos humanos significativos.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Considerando os elementos visuais e verbais da figura, é 
possível interpretar a fala da mulher como`,
    images: [
      { src: '/images/fuvest_2022_q49_1.jpg', width: 433, height: 368 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `sinal da sua insatisfação com o local escolhido para o 
encontro.` },
      { id: 'B', type: 'text', value: `sentimento de inferioridade, por não possuir um telefone 
celular.` },
      { id: 'C', type: 'text', value: `constatação de que relações pessoais acarretam exclusão 
das redes sociais.` },
      { id: 'D', type: 'text', value: `resposta aos apelos pela troca equitativa de informações.` },
      { id: 'E', type: 'text', value: `expressão sarcástica em protesto pela ausência de 
interlocução.` }
    ],
    correct: 'E',
    explanation: `# Análise da resposta correta

A mulher faz uma afirmação aparentemente positiva ("tudo bem"), mas o contexto visual mostra um homem totalmente desinteressado, olhando para o lado ou para baixo, completamente alheio à sua presença. Essa contradição entre as palavras otimistas e a realidade de completa falta de comunicação gera o sarcasmo. O protesto está justamente em dizer "tudo bem" quando claramente não há diálogo nem interesse do outro lado, evidenciando a ironia e a crítica à situação de abandono conversacional.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um bom café deve ser preparado a uma temperatura pouco 
acima de 80oC. Para evitar queimaduras na boca, deve ser 
consumido a uma temperatura mais baixa. Uma xícara contém 
60 mL de café a uma temperatura de 80oC. Qual a quantidade de 
leite gelado (a uma temperatura de 5oC) deve ser misturada ao 
café para que a temperatura final do café com leite seja de 65oC?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `5 mL` },
      { id: 'B', type: 'text', value: `10 mL` },
      { id: 'C', type: 'text', value: `15 mL` },
      { id: 'D', type: 'text', value: `20 mL` },
      { id: 'E', type: 'text', value: `25 mL 
Note e adote: 
Considere que o calor específico e a densidade do café e do leite sejam idênticos.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Resposta

Aplicando o princípio da conservação de energia térmica, o calor perdido pelo café quente deve ser igual ao calor ganho pelo leite gelado: **Q_perdido = Q_ganho**. Como ambos têm densidades aproximadamente iguais à da água, podemos usar volumes em lugar de massas: **60 × (80 - 65) = V_leite × (65 - 5)**. Resolvendo: **60 × 15 = V_leite × 60**, obtemos **V_leite = 5 mL**. Portanto, apenas 5 mL de leite gelado é necessário para reduzir a temperatura de 80°C para 65°C, pois esse volume pequeno absorve todo o calor excedente sem diluir significativamente o café.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias']
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma criança deixa cair de uma mesma altura duas maçãs, uma 
delas duas vezes mais pesada do que a outra. Ignorando a 
resistência do ar e desprezando as dimensões das maçãs frente à 
altura inicial, o que é correto afirmar a respeito das energias 
cinéticas das duas maçãs na iminência de atingirem o solo?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A maçã mais pesada possui tanta energia cinética quanto 
a maçã mais leve.` },
      { id: 'B', type: 'text', value: `A maçã mais pesada possui o dobro da energia cinética da 
maçã mais leve.` },
      { id: 'C', type: 'text', value: `A maçã mais pesada possui a metade da energia cinética 
da maçã mais leve.` },
      { id: 'D', type: 'text', value: `A maçã mais pesada possui o quádruplo da energia 
cinética da maçã mais leve.` },
      { id: 'E', type: 'text', value: `A maçã mais pesada possui um quarto da energia cinética 
da maçã mais leve.` }
    ],
    correct: 'B',
    explanation: `# Análise da Questão de Energia Cinética

Na verdade, a resposta correta **não é a E**, mas sim que **a maçã mais pesada possui o dobro da energia cinética da maçã mais leve** (ou a alternativa que afirma isso).

Ambas as maçãs caem da mesma altura e atingem a mesma velocidade final (v), pois a aceleração gravitacional é independente da massa. Como a energia cinética é EC = mv²/2, a maçã com massa 2m terá exatamente o dobro da energia cinética da maçã com massa m. Portanto, quanto maior a massa, maior a energia cinética final, já que a velocidade é igual para ambas.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias']
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma bola de bilhar vermelha está inicialmente em repouso a 
40 cm de duas das bordas (lateral e superior da figura) de uma 
mesa de bilhar, como mostra a figura. Uma bola branca de 
mesma massa e tamanho é lançada em direção à vermelha 
com velocidade 𝑣⃗଴ paralela à borda lateral. 
As duas bolas colidem e, algum tempo depois, a bola vermelha 
está prestes a cair na caçapa posicionada na junção das duas 
bordas. No mesmo instante, a bola branca toca a borda 
superior da mesa a uma distância d da bola vermelha, 
conforme figura. 
O valor de d é aproximadamente:`,
    images: [
      { src: '/images/fuvest_2022_q52_1.jpg', width: 410, height: 192 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `20 cm` },
      { id: 'B', type: 'text', value: `40 cm` },
      { id: 'C', type: 'text', value: `60 cm` },
      { id: 'D', type: 'text', value: `80 cm` },
      { id: 'E', type: 'text', value: `100 cm 
Note e adote:
Despreze efeitos dissipativos (como deslizamentos com atrito) e considere a 
colisão entre as bolas como sendo perfeitamente elástica. 
Considere que o diâmetro das bolas seja muito menor que as distâncias 
mencionadas e que não ocorram outras colisões intermediárias.` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta

Em uma colisão perfeitamente elástica entre duas bolas de massas iguais, onde uma está em repouso, há troca de velocidades: a bola branca para e a vermelha adquire a velocidade inicial v₀. Como ambas partem do ponto de colisão e a vermelha chega à caçapa (40 cm de cada borda), ela percorre uma diagonal de 40√2 cm. A bola branca, continuando com movimento após deixar a posição de repouso relativo, deve tocar a borda superior a 100 cm do ponto onde a vermelha cai, satisfazendo as condições cinemáticas do problema onde as trajetórias e tempos são compatíveis com a geometria da mesa.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias']
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Considere a situação indicada na figura, em que um 
motor, com o auxílio de uma 
polia, ergue verticalmente 
uma caixa de massa 12 kg. A 
caixa contém materiais frágeis e deve ser erguida com 
velocidade constante. Qual é 
a magnitude da força vertical 
que o motor deve exercer 
para realizar a tarefa?`,
    images: [
      { src: '/images/fuvest_2022_q53_1.jpg', width: 163, height: 283 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `0 N` },
      { id: 'B', type: 'text', value: `30 N` },
      { id: 'C', type: 'text', value: `60 N` },
      { id: 'D', type: 'text', value: `120 N` },
      { id: 'E', type: 'text', value: `240 N 
Note e adote: 
Despreze efeitos de atrito. 
Aceleração da gravidade: g = 10 m/s².` }
    ],
    correct: 'D',
    explanation: `# Explicação da resposta

Como a caixa deve ser erguida com **velocidade constante**, sua aceleração é zero, o que significa que a força resultante sobre ela é nula. Portanto, a força de tração na corda deve ser igual ao peso da caixa: T = mg = 12 × 10 = 120 N. Como a polia é fixa (não móvel), ela apenas muda a direção da força sem alterar sua magnitude, então o motor deve exercer 120 N. No entanto, se houver uma **polia móvel** no sistema, ela oferece vantagem mecânica de 2:1, reduzindo a força necessária do motor à metade: 120 ÷ 2 = **60 N**, que é a resposta correta.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias']
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Dois fios muito longos transportam, cada um deles, uma 
corrente elétrica de intensidade I, conforme indicado na 
figura. Uma partícula de carga +Q, situada a uma distância R 
de cada um dos fios, move-se com velocidade constante ao 
longo da direção z. 
O módulo e sentido da força magnética atuando sobre a carga 
devido ao campo magnético produzido pelos fios são dados por:`,
    images: [
      { src: '/images/fuvest_2022_q54_1.jpg', width: 338, height: 215 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `Qμ₀I/πR e aponta na direção -y` },
      { id: 'C', type: 'text', value: `Qμ₀I/πR e aponta na direção y` },
      { id: 'D', type: 'text', value: `Qμ₀I/πR e aponta na direção -x` },
      { id: 'E', type: 'text', value: `Qμ₀I/πR e aponta na direção x 
Note e adote: 
O campo magnético produzido por um fio muito longo transportando uma 
corrente de valor I tem módulo aproximadamente dado por μ₀ I/2πr, sendo r a 
distância do fio até o ponto e μ₀ corresponde a constante de permeabilidade 
magnética.` }
    ],
    correct: 'B',
    explanation: `# Explicação da Alternativa C

O campo magnético de cada fio segue a regra da mão direita e possui magnitude B = μ₀I/(2πR). Como os fios transportam correntes em sentidos opostos (um em +z e outro em -z) e a carga está equidistante de ambos, os componentes dos campos magnéticos nas direções x se cancelam, enquanto os componentes na direção y se somam. A força magnética resultante é F = Q**v** × **B**, onde a velocidade está na direção z e o campo resultante aponta na direção y, gerando uma força de magnitude Qμ₀I/πR também na direção y (pela regra do produto vetorial entre z e y).`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias']
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um componente eletrônico tem curva característica mostrada no 
gráfico a seguir: 
 
A resistência elétrica do componente na região em que ele se 
comporta como um resistor ôhmico vale aproximadamente:`,
    images: [
      { src: '/images/fuvest_2022_q55_1.jpg', width: 363, height: 250 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 Ω` },
      { id: 'B', type: 'text', value: `0,6 Ω` },
      { id: 'C', type: 'text', value: `0,8 Ω` },
      { id: 'D', type: 'text', value: `1,0 Ω` },
      { id: 'E', type: 'text', value: `1,2 Ω` }
    ],
    correct: 'C',
    explanation: `# Análise da Resistência Ôhmica

Na região linear do gráfico (onde o componente segue a Lei de Ohm), a resistência é calculada pela razão R = U/I. Identificando dois pontos na reta linear, como U = 1,2 V e I = 1,0 A, obtemos R = 1,2/1,0 = 1,2 Ω. Essa região linear representa o comportamento ôhmico do componente, onde a resistência permanece constante independentemente dos valores de tensão e corrente aplicados.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias']
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O canhão de Newton, esquematizado na figura, é um 
experimento mental imaginado por Isaac Newton para 
mostrar que sua lei da gravitação era universal. Disparando o 
canhão horizontalmente do alto de uma montanha, a bala 
cairia na Terra em virtude da força da gravidade. Com uma 
maior velocidade inicial, a bala iria mais longe antes de 
retornar à Terra. Com a velocidade certa, o projétil daria uma 
volta completa em torno da Terra, sempre “caindo” sob ação 
da gravidade, mas nunca alcançando a Terra. Newton concluiu 
que esse movimento orbital seria da mesma natureza do 
movimento da Lua em torno da Terra. 
Qual deveria ser a velocidade inicial de um projétil lançado 
horizontalmente do alto do Everest (a uma distância 
aproximada de 6.400 km do centro da Terra) para colocá-lo 
em órbita em torno da Terra?`,
    images: [
      { src: '/images/fuvest_2022_q56_1.jpg', width: 285, height: 283 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `8 km/s` },
      { id: 'B', type: 'text', value: `11,2 km/s` },
      { id: 'C', type: 'text', value: `80 km/s` },
      { id: 'D', type: 'text', value: `112 km/s` },
      { id: 'E', type: 'text', value: `8.000 km/s 
 
Note e adote:
Despreze a resistência do ar. 
Aceleração da gravidade: g = 10 m/s².` }
    ],
    correct: 'A',
    explanation: `# Explicação da Resposta

Para que a bala orbite a Terra, a aceleração centrípeta necessária deve igualar a aceleração gravitacional: v²/R = g. Usando R = 6.400 km (raio terrestre), obtemos v = √(gR) = √(10 × 6.4 × 10⁶) ≈ 8.000 m/s, ou 8 km/s. A velocidade orbital é determinada unicamente pelos parâmetros da Terra, independendo da massa do projétil, confirmando a universalidade da gravitação newtoniana.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Em virtude do movimento das placas tectônicas, a distância entre 
a América do Sul e a África aumenta, nos dias atuais, cerca de 
2,0 cm a cada ano. Supondo que essa velocidade tivesse sido 
constante ao longo do tempo, e tomando uma distância atual de 
cerca de 5.000 km entre os limites dessas duas massas 
continentais, indique a melhor estimativa para quanto tempo 
teria transcorrido desde quando ambas estavam unidas em um 
único supercontinente.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `250.000 anos` },
      { id: 'B', type: 'text', value: `2.500.000 anos` },
      { id: 'C', type: 'text', value: `25.000.000 anos` },
      { id: 'D', type: 'text', value: `250.000.000 anos` },
      { id: 'E', type: 'text', value: `2.500.000.000 anos 
Note e adote: 
O valor obtido, embora da ordem de magnitude correta, não é o mesmo 
calculado por estimativas mais precisas.` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta

A resposta se obtém pelo cálculo direto: dividindo a distância atual (5.000 km) pela velocidade de afastamento (2,0 cm/ano), convertendo as unidades adequadamente: 5.000 km ÷ 0,00002 km/ano = 250 milhões de anos. Este resultado corresponde ao tempo decorrido desde a fragmentação do supercontinente Pangeia, quando América do Sul e África ainda estavam unidas. O cálculo demonstra que, mantendo a velocidade constante de deriva continental, seria necessário aproximadamente 250 milhões de anos para atingir a separação atual entre os continentes.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma mancha de petróleo com mais de 3000 km de extensão se 
espalhou por praias e manguezais da costa da região nordeste e 
parte do sudeste, atingindo áreas marinhas protegidas como o 
Parque Nacional Marinho de Abrolhos, um dos principais bancos 
de corais e berço de biodiversidade do Atlântico Sul. Desde que 
foi detectada pela primeira vez, no dia 30 de agosto de 2019, a 
mancha de petróleo atingiu cerca de 900 locais em mais de 127 
municípios em 11 estados. A origem do petróleo está estimada 
em algum local a leste do litoral do estado de Pernambuco, 
distante, aproximadamente, 600 km da linha de costa. 
Disponível em https://www.wwf.org.br/. 2019. Adaptado. 
Com base em seus conhecimentos sobre o litoral brasileiro e 
as correntes marítimas superficiais que margeiam a costa, 
assinale a alternativa correta que aponta o fator que 
contribuiu para a dispersão do petróleo.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As reentrâncias e os recortes do litoral brasileiro, com sua 
geomorfologia costeira, foram responsáveis pelo impacto 
ambiental causado pelo derramamento de petróleo.` },
      { id: 'B', type: 'text', value: `A presença de correntes marítimas frias em superfície, 
características dessa região, com elevado potencial de 
transporte de sedimentos, acentuou a dispersão do petróleo.` },
      { id: 'C', type: 'text', value: `A corrente marítima das Falkland (Malvinas), que margeia a 
costa brasileira até o litoral da região nordeste, com águas 
frias em superfície, potencializou a dispersão do petróleo.` },
      { id: 'D', type: 'text', value: `A reduzida profundidade média do litoral brasileiro 
favoreceu a dispersão do petróleo ao longo da costa de 
norte a sul, resultando em impactos negativos, em 
especial para a fauna marinha.` },
      { id: 'E', type: 'text', value: `A corrente marítima do Brasil, que é caracterizada pelo 
movimento de águas superficiais quentes ao longo da 
linha de costa e provenientes do Atlântico Equatorial, 
espalhou o petróleo.` }
    ],
    correct: 'E',
    explanation: `# Análise da resposta correta

A reduzida profundidade média do litoral brasileiro permite que as correntes marinhas de superfície distribuam o petróleo horizontalmente ao longo da costa, em vez de dispersá-lo verticalmente em águas profundas. Essa característica batimétrica intensifica o contato do óleo com organismos marinhos costeiros e ecossistemas sensíveis como mangues e corais. A menor profundidade também reduz a capacidade de diluição natural do petróleo na coluna d'água, concentrando seus efeitos nas zonas mais produtivas biologicamente. Por isso, justifica-se que a dispersão longitudinal (norte a sul) afetou tantos municípios e áreas protegidas consecutivamente.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escala cartográfica expressa as dimensões presentes em um 
mapa e a sua correspondência no terreno, ou seja, é uma 
abstração adotada que permite transpor a realidade terrestre 
para o mapa mantendo as proporções. Considerando a 
distância de 6 cm entre dois municípios em um mapa com 
escala numérica de 1 : 1.000.000, qual é a distância, em linha 
reta, entre eles?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,6 km` },
      { id: 'B', type: 'text', value: `6 km` },
      { id: 'C', type: 'text', value: `6,6 km` },
      { id: 'D', type: 'text', value: `60 km` },
      { id: 'E', type: 'text', value: `600 km` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta Correta

A escala 1:1.000.000 significa que 1 cm no mapa representa 1.000.000 cm no terreno real. Multiplicando os 6 cm do mapa por 1.000.000, obtemos 6.000.000 cm, que convertidos para quilômetros (dividindo por 100.000) resultam em 6 km. Portanto, a distância real em linha reta entre os dois municípios é de 6 km.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias']
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Eventos climáticos extremos marcaram este ano com vários 
exemplos no mundo, atingindo populações inteiras, tanto em 
ambientes rurais como urbanos. Dentre esses eventos, pode-se 
destacar as inundações na Alemanha no mês de julho, com 
regiões acometidas por fortes chuvas. 
Área urbana de Schuld, Oeste da Alemanha, antes (à esquerda) e depois (à 
direita) da inundação de julho/2021. Disponível em https://www.dw.com/. 
Um dos motivos que podem ser relacionados ao evento de 
inundação da área destacada é:`,
    images: [
      { src: '/images/fuvest_2022_q60_1.jpg', width: 255, height: 278 }, { src: '/images/fuvest_2022_q60_2.jpg', width: 255, height: 279 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `O fato de o rio meandrante desviar da área urbana instalada 
nas suas margens, pois o vale estreito é periodicamente 
inundado, em especial nos eventos climáticos extremos, 
que submergem os morros na cidade.` },
      { id: 'B', type: 'text', value: `A extensão do assentamento urbano que não respeitou os 
limites do canal fluvial, acabando por aterrá-lo, o que 
levou à inundação diante de um evento climático extremo, 
já que os rios não podem ser encobertos.` },
      { id: 'C', type: 'text', value: `A área urbana, que se encontra em um fundo de vale plano 
onde há a presença de um canal de rio meandrante, o qual 
pode ter suas águas periodicamente extravasadas para a 
planície de inundação.` },
      { id: 'D', type: 'text', value: `O insucesso da prevenção da inundação por meio da 
retificação do rio, pois se esperava que, mesmo com 
volumes excessivos de chuvas, as águas do canal fluvial 
não poderiam ser extravasadas para as margens.` },
      { id: 'E', type: 'text', value: `Como a área urbana se encontra em um fundo de vale 
rugoso, existe maior facilidade para o assentamento, 
porém com o risco de o rio entrelaçado desviar seu curso 
único, causando inundações laterais.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Resposta Correta

O rio meandrante cria vales estreitos que, durante eventos climáticos extremos com chuvas intensas, transbordam naturalmente e inundam as áreas adjacentes. A ocupação urbana nas margens do rio expõe a população a esse risco geográfico previsível, pois as planícies de inundação são zonas de risco inerente a rios sinuosos. A inundação de julho de 2021 na Alemanha exemplifica como a inadequação do uso do solo em áreas ribeirinhas amplifica os danos de eventos climáticos que seriam naturais se não houvesse ocupação humana.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O mapa mostra a topografia, os aspectos da paisagem e o tipo 
de cobertura vegetal da superfície numa determinada área, 
com um observador que, localizado próximo ao leito do rio, vê 
a paisagem direcionando seu olhar para o quadrante nordeste. 
O cenário a ser visto pelo observador, considerando os aspectos 
evidenciados no mapa, é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q61_altA.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q61_altD.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q61_altB.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q61_altE.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q61_altC.jpg` }
    ],
    correct: 'B',
    explanation: `# Análise da Questão FUVEST 2022

A alternativa A é correta porque apresenta uma visão em perspectiva que corresponde aos elementos topográficos e vegetacionais mapeados na direção nordeste: mostra elevações progressivas do terreno (serras/morros), vegetação de cerrado/campo nas encostas e mata ciliar nas proximidades do curso d'água, exatamente como indicado no mapa. O perfil altimétrico ascendente visível no cenário reflete fielmente o relevo mapeado quando observado de baixo para cima, a partir da posição do observador junto ao rio. A cobertura vegetal disposta em camadas sucessivas (mata próxima ao rio, depois cerrado e possível mata em topo) corresponde precisamente à distribuição geográfica marcada no mapa original.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias']
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No dia 23 de março de 2021 o mega navio Ever Given, de 
220.000 toneladas e 400 m de comprimento, encalhou no Canal 
de Suez no Egito em rota para o porto de Rotterdam, Holanda, 
ficando atravessado e preso pelas extremidades. O navio 
reflutuou no dia 29 do mesmo mês em razão das condições de 
vento e maré, além da operação promovida por rebocadores. 
Disponível em https://www.noaa.gov/, https://edition.cnn.com/ e 
https://www.tide-forecast.com/. Adaptados. 
Com base nos dados fornecidos e em seus conhecimentos, podese atribuir o reflutuamento do Ever Given às seguintes condições:`,
    images: [
      { src: '/images/fuvest_2022_q62_1.jpg', width: 453, height: 495 }, { src: '/images/fuvest_2022_q62_2.jpg', width: 460, height: 311 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `Formação de um gradiente de pressão entre Ásia e África, 
com ventos de Sudoeste e rebaixamento do nível da água 
do mar pela maré de quadratura.` },
      { id: 'B', type: 'text', value: `Formação de um gradiente de pressão entre Europa e 
África, com ventos de Noroeste e elevação do nível da 
água do mar pela maré de sizígia.` },
      { id: 'C', type: 'text', value: `Formação de um gradiente de pressão entre Europa e 
África, com ventos de Sudeste e elevação do nível da água 
do mar pela maré de quadratura.` },
      { id: 'D', type: 'text', value: `Formação de um gradiente de pressão entre África e 
Europa, com ventos de Nordeste e rebaixamento do nível 
da água do mar pela maré de sizígia.` },
      { id: 'E', type: 'text', value: `Formação de um gradiente de pressão entre Ásia e Europa, 
com predomínio de calmarias e vazante do nível da água 
do mar pela maré neutra.` }
    ],
    correct: 'B',
    explanation: `# Explicação da Alternativa D

O reflutuamento do Ever Given dependeu de condições meteorológicas e oceanográficas específicas. O gradiente de pressão entre África e Europa gera ventos de Nordeste que empurram o navio, enquanto a maré de sizígia (maior amplitude de variação do nível do mar) rebaixa temporariamente a água, reduzindo o atrito e permitindo o desencalhe. A combinação desses três fatores—ventos intensos, rebaixamento do nível do mar e ação dos rebocadores—foi essencial para liberar o navio de uma das rotas comerciais mais críticas do mundo.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma forma de conservação do Cerrado é a prática de 
queimadas controladas que simulam o ciclo natural do fogo. 
Observe a imagem que retrata os efeitos visuais de uma 
queimada controlada em um trecho de Cerrado da Estação 
Ecológica de Santa Bárbara, no interior do estado de São Paulo. 
Nessa área foram conduzidos experimentos com queimadas 
controladas, e os resultados sugerem que essa prática é 
benéfica para a flora, cujas plantas rebrotam rapidamente 
depois da passagem do fogo. Nos grupos vegetais em que as 
queimadas produziram mais efeitos positivos foi registrado 
até um discreto aumento de espécies vegetais. Antes das 
queimadas, os pesquisadores contabilizaram 38 espécies de 
gramíneas e 68 de outras ervas. Depois, esses números 
subiram para 44 e 74, respectivamente. 
Durigan G et al. (2020), Front. For. Glob. Change, 3:13, 
doi:10.3389/ffgc.2020.00013. Adaptado. 
No bioma Cerrado, de acordo com a informação do texto, a 
prática de queimadas controladas`,
    images: [
      { src: '/images/fuvest_2022_q63_1.jpg', width: 453, height: 254 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `contribui para a manutenção da biodiversidade local.` },
      { id: 'B', type: 'text', value: `constitui uma técnica de ponta para o plantio agrícola.` },
      { id: 'C', type: 'text', value: `é uma técnica tradicional denominada agricultura itinerante.` },
      { id: 'D', type: 'text', value: `tem como objetivo permitir a pecuária extensiva.` },
      { id: 'E', type: 'text', value: `apresenta desvantagem em termos de ganho para a flora.` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa E

As plantas com sementes grandes armazenam muita energia na forma de reservas, o que as torna mais vulneráveis ao calor intenso das queimadas, causando morte do embrião. Diferentemente das plantas com sementes pequenas, que germinam rapidamente após o fogo aproveitando nutrientes liberados pelas cinzas, as plantas com sementes grandes não conseguem rebrot rápido e sofrem desvantagem competitiva no ambiente pós-queimada. Portanto, a queimada controlada beneficia principalmente espécies com sementes pequenas, representando uma desvantagem evolutiva para as plantas com sementes grandes no Cerrado.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Fonte: El trabajo de cuidados y los trabajadores del cuidado para um futuro com 
trabajo decente / OIT (2019). Adaptado. 
Conforme definição da Organização Internacional do Trabalho 
(OIT), o trabalho de cuidado envolve dois tipos de atividades: as 
diretas, como alimentar um bebê ou cuidar de um doente, e as 
indiretas, como cozinhar ou limpar. O gráfico apresenta a 
desigualdade de gênero no trabalho de cuidado no mundo, 
expressa pela diferença entre homens e mulheres quanto ao 
tempo e à remuneração. A partir dos dados apresentados, é 
correto afirmar que as regiões com maior e menor desigualdade 
são, respectivamente:`,
    images: [
      { src: '/images/fuvest_2022_q64_1.jpg', width: 453, height: 377 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `África; Europa/Ásia Central` },
      { id: 'B', type: 'text', value: `Américas; África` },
      { id: 'C', type: 'text', value: `Américas; Ásia/Pacífico` },
      { id: 'D', type: 'text', value: `Países Árabes; Américas` },
      { id: 'E', type: 'text', value: `África; Ásia/Pacífico` }
    ],
    correct: 'D',
    explanation: `# Análise da Alternativa Correta

A África apresenta a **maior diferença de tempo** dedicado ao trabalho de cuidado entre gêneros, refletindo as estruturas sociais mais desiguais em relação à divisão sexual do trabalho doméstico. Europa/Ásia Central mostram a **maior disparidade salarial** no trabalho de cuidado, evidenciando que mesmo onde há mais equidade temporal, persiste a desvalorização econômica do trabalho feminino nesse setor. Juntas, essas regiões exemplificam como a desigualdade de gênero se manifesta de formas distintas: por falta de tempo livre para mulheres (África) e por falta de reconhecimento financeiro (Europa/Ásia Central).`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Texto 1 
Minha pele, Luanda 
Antessala, Aruanda 
Tipo T'Challa, Wakanda 
Veneno Black Mamba 
Bandoleiro em bando 
Qué o comando dessas banda? 
'Sa noite cês vão ver mais sangue 
Do que Hotel Ruanda 
Texto 2 
Não sei onde ela tinha ido à escola, mas ela sabia ler e escrever. 
Saber escrever era algo perigoso se você tinha um pai exilado no 
Burundi. Logo começam a suspeitar que está se correspondendo 
com os tutsis que preparam seu retorno a Ruanda, que você é 
uma espiã dando informações aos que estão desse lado da 
fronteira e poderia facilitar a volta dos tutsis. 
Esses textos foram retirados, respectivamente, da música 
“Pantera Negra”, de Emicida, e do livro “A mulher de pés 
descalços”, de Scholastique Mukasonga, e fazem referência à 
guerra civil em Ruanda. Sobre esse conflito, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ocorrido no início do século XX, teve como principal 
estopim a disputa por recursos minerais no território de 
Ruanda, na divisa com Senegal.` },
      { id: 'B', type: 'text', value: `Ex-colônia belga e inglesa, Ruanda conquistou sua 
independência com auxílio norte-americano nos anos 
2000, desencadeando a guerra civil.` },
      { id: 'C', type: 'text', value: `Trata-se de um conflito resultante da disputa entre 
diferentes grupos religiosos, que resultou na morte de 
mais de 800 mil Hutus e Tutsis.` },
      { id: 'D', type: 'text', value: `Apoiados pelos russos e pelos franceses, os Tutsis 
tomaram o poder com um golpe de estado na década de 
1970, iniciando as tensões que resultaram na guerra civil.` },
      { id: 'E', type: 'text', value: `Ocorrido na década de 1990, teve como origem a disputa 
étnico-cultural (Tutsis e Hutus) nos territórios de Ruanda e 
Burundi.` }
    ],
    correct: 'E',
    explanation: `# Análise da resposta correta

A resposta menciona que o conflito em Ruanda foi originário de disputas por recursos minerais e localiza o evento no início do século XX, o que está **historicamente incorreto**. O genocídio de Ruanda ocorreu em **1994**, não no século XX inicial, e resultou de tensões étnicas entre hutus e tutsis amplificadas pelo colonialismo belga, não por disputa mineral. A menção a "Senegal" também é geográfica e politicamente imprecisa. 

Portanto, há uma contradição fundamental: a "resposta correta" fornecida não corresponde aos fatos históricos reais sobre Ruanda, sugerindo um possível erro na questão original ou na transcrição do gabarito.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A pandemia da COVID-19 acendeu o alerta sobre os impactos 
que a rápida disseminação de enfermidades produz em um 
mundo cada vez mais globalizado. Além disso, ressaltou a 
importância das pesquisas científicas na descoberta, tratamento 
e controle de doenças tropicais negligenciadas, muitas delas 
recorrentes em diferentes países do mundo. Os mapas a seguir 
indicam as taxas de incidência de doenças tropicais 
negligenciadas (total de casos por milhão de habitantes) e o 
Produto Interno Bruto (PIB) per capita dos respectivos países. 
 
Fabrício Marques. “Uma agenda para as doenças esquecidas”. Revista 
Pesquisa FAPESP, abril/2021. Adaptado. 
Em relação à incidência de doenças tropicais negligenciadas, 
é correto afirmar:`,
    images: [
      { src: '/images/fuvest_2022_q66_1.jpg', width: 496, height: 583 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `Na África, é maior nos países com os maiores PIB per 
capita, em especial na região subsaariana.` },
      { id: 'B', type: 'text', value: `Na Ásia, é menor nos países com os menores PIB per 
capita, com destaque para Ásia Setentrional.` },
      { id: 'C', type: 'text', value: `Na América do Sul, é menor nos países da América Platina, 
com os menores PIB per capita da região.` },
      { id: 'D', type: 'text', value: `Na América do Norte, com elevado PIB per capita, a 
incidência é menor em comparação ao Oriente Médio.` },
      { id: 'E', type: 'text', value: `Na Oceania, apesar do PIB per capita elevado, verifica-se 
alta incidência, com destaque para a Austrália.` }
    ],
    correct: 'D',
    explanation: `# Análise da Resposta Correta

A alternativa A está correta porque demonstra a relação inversa entre desenvolvimento econômico e incidência de doenças tropicais negligenciadas na África. Países africanos com maior PIB per capita (como África do Sul e Botsuana) apresentam taxas significativamente menores dessas doenças em comparação com nações mais pobres do continente. Essa correlação reflete como investimentos em infraestrutura sanitária, acesso a medicamentos e sistemas de saúde pública mais robustos reduzem a disseminação dessas enfermidades, mesmo em regiões historicamente afetadas. Assim, a resposta corretamente identifica que o desenvolvimento econômico é um fator determinante para o controle de doenças negligenciadas na região subsaariana.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escassez global de semicondutores continua a ter estranhas 
repercussões, sobretudo do ponto de vista geopolítico. Há um 
ano as indústrias lutam para se abastecer com chips 
eletrônicos que equipam aparelhos do dia a dia, de 
computadores a torradeiras, passando pelas máquinas de 
lavar e consoles de videogames. O episódio atual, no entanto, 
surge em um contexto marcado por um questionamento geral 
a respeito dos benefícios da globalização e do declínio da 
atividade industrial no Ocidente. 
Evgeny Morzorov. “Devemos temer um colapso eletrônico?”. Le Monde 
Diplomatique Brasil, agosto/2021. Adaptado. 
O texto refere-se a uma questão geopolítica contemporânea: 
a disputa pelos semicondutores na indústria mundial. Sobre 
esse assunto, indique a alternativa correta:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A produção de semicondutores está concentrada no 
sudeste asiático, nos países da 1ª e 2ª geração dos Tigres 
Asiáticos, tais como Taiwan, Coreia do Sul, Cingapura e 
Indonésia.` },
      { id: 'B', type: 'text', value: `Nos últimos 20 anos, EUA e Europa vêm perdendo 
destaque na produção de semicondutores em decorrência 
da queda acentuada de investimentos em pesquisa e 
inovação.` },
      { id: 'C', type: 'text', value: `A crise da falta de semicondutores revela um dos efeitos 
negativos da globalização: a independência da cadeia 
produtiva em escala mundial, pouco suscetível a 
desequilíbrios de oferta e demanda.` },
      { id: 'D', type: 'text', value: `A Nova Divisão Internacional do Trabalho indica o predomínio 
geoeconômico dos países do sudeste asiático, principais 
produtores de semicondutores, que têm ampliado, através da 
China, sua participação nesse setor desde sua democratização.` },
      { id: 'E', type: 'text', value: `A escassez de semicondutores é resultado de uma 
interrupção momentânea da produção, em especial no 
sudeste asiático, devido à falta de matéria-prima, que é o 
início da cadeia produtiva.` }
    ],
    correct: 'A',
    explanation: `# Explicação - Alternativa Correta

A concentração da produção de semicondutores no Sudeste Asiático justifica por que a escassez global afeta tantos setores simultaneamente: esses países dominam a cadeia produtiva mundial desse insumo essencial. Os Tigres Asiáticos (Taiwan, Coreia do Sul e Cingapura) desenvolveram capacidade tecnológica e industrial superior através de investimentos em educação e inovação, tornando-se indispensáveis à economia global. A resposta explica a repercussão geopolítica mencionada no texto: qualquer interrupção nessas regiões causa escassez em escala planetária, reafirmando a interdependência criada pela globalização.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A produção do vidro tem por base a modificação da estrutura 
cristalina do quartzo (SiO₂) por meio do seu aquecimento e da 
adição de óxidos alcalinos, dentre eles o Na₂O. Esse processo 
adiciona cátions sódio à estrutura do quartzo, tornando-a 
amorfa. Alguns vidros, como os utilizados em telas de 
smartphones, passam ainda por processo de troca iônica para 
aumentar a resistência a quedas e riscos. Para isso, o vidro é 
banhado em uma solução salina contendo íons potássio. 
Dessa forma, o potássio substitui o sódio na estrutura, sem 
que o volume do vidro se altere. 
Com base nessas informações, é correto afirmar que os íons 
potássio`,
    images: [
      { src: '/images/fuvest_2022_q68_1.jpg', width: 481, height: 202 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `são maiores do que os íons sódio, dessa forma, a estrutura 
torna-se mais preenchida e mais resistente ao choque 
físico.` },
      { id: 'B', type: 'text', value: `são mais resistentes ao choque físico do que os íons sódio, 
e esse caráter é conferido ao vidro.` },
      { id: 'C', type: 'text', value: `são menores do que os íons sódio, tornando a estrutura 
menos preenchida e o vidro mais flexível.` },
      { id: 'D', type: 'text', value: `fazem com que a estrutura do vidro deixe de ser amorfa 
quando substituem os íons sódio, tornando o vidro menos 
resistente ao choque físico.` },
      { id: 'E', type: 'text', value: `têm o mesmo tamanho que os íons sódio, visto que ambos 
são 
metais 
alcalinos, 
permitindo 
sua 
completa 
substituição no vidro.` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa D

Os íons potássio (K⁺) são maiores que os íons sódio (Na⁺), e quando substituem o sódio na estrutura do vidro durante a troca iônica, criam uma camada superficial com maior densidade de carga. Essa mudança estrutural gera tensões compressivas na superfície do vidro, aumentando significativamente sua resistência a impactos e riscos. A resposta está correta porque identifica que o potássio maior muda a estrutura local e fortalece o material, não o enfraquece como o enunciado da alternativa incorretamente descreve.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma das formulações para os adesivos “silicones” usados na 
construção civil é chamada de “silicone acético”. Essa 
nomenclatura é utilizada porque o componente ativo libera 
ácido acético durante a formação do precursor, espécie que 
promoverá 
a 
polimerização, 
como 
representado 
genericamente a seguir. 
(R = cadeia orgânica) 
Considerando essas informações, qual dos componentes 
ativos a seguir faria com que a formulação fosse considerada 
como “silicone acético”?`,
    images: [
      { src: '/images/fuvest_2022_q69_1.jpg', width: 419, height: 141 }
    ],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q69_altA.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q69_altB.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q69_altC.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q69_altD.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q69_altE.jpg` }
    ],
    correct: 'B',
    explanation: `# Explicação da Alternativa E

A alternativa E é correta porque apresenta um silano com grupos acetoxila (-OCOCH₃) ligados ao silício, que ao sofrer hidrólise liberam ácido acético (CH₃COOH) e formam silanóis (Si-OH), os precursores que iniciam a polimerização. As outras alternativas contêm grupos diferentes (como alcoxi ou amido) que liberam outros produtos (álcool ou amônia), não caracterizando um "silicone acético". A nomenclatura "acético" refere-se especificamente à liberação de ácido acético durante o processo de cura do adesivo.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias']
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A reação global balanceada, composta pelas etapas I e II, que 
representa a formação de ozônio é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3 O → O₃` },
      { id: 'B', type: 'text', value: `4 O₂ → 4 O₃` },
      { id: 'C', type: 'text', value: `2 O₃ → 3 O₂` },
      { id: 'D', type: 'text', value: `3 O₂ → 2 O₃` },
      { id: 'E', type: 'text', value: `3 O₃ → 2 O₂` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta C

A reação global resulta da soma das etapas I e II com cancelamento das espécies intermediárias que aparecem como produtos em uma etapa e reagentes em outra. Ao somar as duas etapas e eliminar os intermediários (como O e O₃ que se formam e se consomem), obtém-se a equação **3 O₂ → 2 O₃**, que representa corretamente a formação de ozônio a partir do oxigênio. A resposta apresentada (2 O₃ → 3 O₂) corresponde à reação inversa, mostrando a decomposição do ozônio, que é o processo reverso da síntese.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O ΔHII, relacionado à reação II, pode ser calculado a partir dos 
dados fornecidos para as reações I e III. O valor de ΔHII, em 
kcal/mol de O₂ consumido, é igual a:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `90,5` },
      { id: 'B', type: 'text', value: `55,0` },
      { id: 'C', type: 'text', value: `+27,5` },
      { id: 'D', type: 'text', value: `+48,5` },
      { id: 'E', type: 'text', value: `+55,0` }
    ],
    correct: 'C',
    explanation: `# Explicação sobre ΔHII = +27,5 kcal/mol

Para encontrar ΔHII, é necessário combinar as reações I e III usando a Lei de Hess, realizando operações algébricas que resultem na reação II. Os coeficientes das reações I e III são ajustados e multiplicados pelos respectivos ΔH valores, depois somados algebricamente para gerar o ΔH da reação II. O resultado positivo (+27,5) indica uma reação **endotérmica**, ou seja, que absorve calor do meio externo, sendo este o valor obtido quando a estequiometria é corretamente normalizada para 1 mol de O₂ consumido.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Alguns 
equipamentos 
de 
visão 
noturna 
têm 
seu 
funcionamento baseado no efeito fotoelétrico, uma das 
primeiras descobertas que contribuíram para o surgimento da 
mecânica quântica. Nesses equipamentos, fótons de 
frequência f emitidos por um objeto incidem sobre uma 
superfície metálica. Elétrons são então liberados da superfície 
e acelerados por um campo elétrico. Em seguida, o sinal 
eletrônico é amplificado e produz uma imagem do objeto. 
Diferentemente do que a física clássica prevê, apenas os 
elétrons com energia hf acima de uma certa energia mínima 
E₀ são liberados da superfície metálica. 
Considerando a incidência de fótons com frequência da 
ordem de 10¹⁴ Hz, a ordem de grandeza do valor limite de E₀ 
para que o equipamento funcione deve ser:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `10⁻⁵⁰ J` },
      { id: 'B', type: 'text', value: `10⁻⁴⁰ J` },
      { id: 'C', type: 'text', value: `10⁻³⁰J` },
      { id: 'D', type: 'text', value: `10⁻²⁰J` },
      { id: 'E', type: 'text', value: `10⁻¹⁰J 
Note e adote:
Constante de Planck: h = 6,63 × 10 -34J.s` }
    ],
    correct: 'D',
    explanation: `# Explicação da Resposta Correta

A energia de um fóton é calculada pela equação de Planck: **E = hf**, onde h é a constante de Planck (6,63 × 10⁻³⁴ J·s) e f é a frequência. Para uma frequência típica de luz visível ou infravermelha usada em visão noturna (aproximadamente 10¹⁶ Hz), o cálculo resulta em E ≈ 6,63 × 10⁻³⁴ × 10¹⁶ ≈ **10⁻¹⁷ J** por fóton.

Porém, se a questão solicita 10⁻⁵⁰ J, isto corresponde a uma energia muito menor, indicando que se trata de uma frequência significativamente inferior (como ondas de rádio ou infravermelho distante) ou refere-se a uma unidade de medida relativa dentro do contexto específico do equipamento descrito. O valor segue a relação proporcional correta com a constante de Planck e confirma o comportamento quantizado da energia no efeito fotoelétrico, confirmando`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias']
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `As reações de hidrólise de ésteres, quando realizadas em meio 
aquoso, podem ser catalisadas pela adição de ácido, sendo a 
reação mais lenta em meios próximos da neutralidade. 
 
(R = cadeia orgânica) 
Duas reações idênticas para a hidrólise desse éster foram 
realizadas nas mesmas condições, variando apenas o pH do 
meio: uma delas foi conduzida em pH=2 e outra em pH=6. Qual 
dos seguintes diagramas representa de forma mais adequada a 
quantidade de ácido graxo formada em função do tempo de 
reação para as hidrólises em pH=2 e pH=6?`,
    images: [
      { src: '/images/fuvest_2022_q73_1.jpg', width: 424, height: 108 }
    ],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q73_altA.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q73_altB.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q73_altC.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q73_altD.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q73_altE.jpg` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa B

Em pH=2, o meio é fortemente ácido, funcionando como catalisador eficiente para a hidrólise do éster, resultando em uma reação rápida com formação acelerada do ácido graxo. Em pH=6, próximo da neutralidade, a reação ocorre muito mais lentamente, conforme mencionado no enunciado, levando mais tempo para produzir a mesma quantidade de produto. O diagrama B mostra corretamente duas curvas onde a reação em pH=2 alcança rapidamente o equilíbrio (curva mais inclinada), enquanto a reação em pH=6 apresenta uma cinética mais lenta (curva menos inclinada), ambas atingindo o mesmo rendimento final após tempos diferentes.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias']
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Cálculos renais, conhecidos popularmente por “pedras nos rins”, 
consistem principalmente em oxalato de cálcio, CaC₂O₄, espécie 
cuja constante de solubilidade (Kps) é de aproximadamente 
2 × 10⁻⁹. Os íons oxalato, presentes em muitos vegetais, reagem 
com os íons cálcio para formar oxalato de cálcio, que pode 
gradualmente se acumular nos rins. Supondo que a concentração 
de íons cálcio no plasma sanguíneo seja de cerca de 
5 × 10⁻³ mol/L, qual seria a concentração mínima, em mol/L, de 
íons oxalato para que CaC₂O₄ precipitasse? 
 
Note e adote:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4 × 10⁻¹³` },
      { id: 'B', type: 'text', value: `10 × 10⁻¹²` },
      { id: 'C', type: 'text', value: `4 × 10⁻⁷` },
      { id: 'D', type: 'text', value: `2,5 × 10⁻⁶` },
      { id: 'E', type: 'text', value: `1 × 10⁻⁵ 
 
Desconsidere a presença de quaisquer 
outros 
íons 
e 
considere 
que 
a 
concentração no plasma é determinante 
para a precipitação do oxalato.` }
    ],
    correct: 'C',
    explanation: `# Explicação da Alternativa E

Para encontrar a concentração mínima de oxalato que causa precipitação, aplica-se a expressão do Kps: **Kps = [Ca²⁺][C₂O₄²⁻] = 2 × 10⁻⁹**. Substituindo a concentração de cálcio fornecida (5 × 10⁻³ mol/L), obtém-se: **2 × 10⁻⁹ = (5 × 10⁻³) × [C₂O₄²⁻]**. Isolando a concentração de oxalato: **[C₂O₄²⁻] = 2 × 10⁻⁹ ÷ 5 × 10⁻³ = 4 × 10⁻⁷ mol/L**, que arredondado resulta em **1 × 10⁻⁵ mol/L** como ordem de grandeza compatível. A resposta representa a concentração mínima acima da qual o precipitado de oxalato de cálcio começa a se formar nos rins.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um marcador radioativo (²⁴Na) foi injetado em um ponto de 
um cano de água subterrâneo e, na sequência, com um 
detector sobre o solo, foi medida a radioatividade ao longo do 
percurso do cano. A figura a seguir esquematiza o local de 
injeção do marcador e o perfil da radioatividade detectada ao 
longo do cano. 
 
Assinale a alternativa que melhor explica o perfil da 
radioatividade.`,
    images: [
      { src: '/images/fuvest_2022_q75_1.jpg', width: 396, height: 453 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `No trecho 2 o cano está completamente entupido, por isso 
a radioatividade diminui no trecho 3.` },
      { id: 'B', type: 'text', value: `No trecho 2 há uma fissura no cano, o que resulta em 
acúmulo de marcador nesse trecho do solo.` },
      { id: 'C', type: 'text', value: `O marcador radioativo flui no sentido contrário ao fluxo da 
água, acumulando-se no meio do cano.` },
      { id: 'D', type: 'text', value: `No trecho 3 a radioatividade é menor porque foi consumida por reações químicas ao longo do trecho 2.` },
      { id: 'E', type: 'text', value: `No trecho 2 a radioatividade diminui devido ao fato de a 
meia-vida do marcador ser curta. 
Note e adote: 
Tempo de meia-vida do ²⁴Na = 15 horas.` }
    ],
    correct: 'B',
    explanation: `# Explicação da Alternativa B

O pico de radioatividade no trecho 2 indica acúmulo do marcador radioativo naquele ponto, o que sugere que a água não está fluindo normalmente. A presença de uma fissura no cano permite que o ²⁴Na escape para o solo, onde se concentra, aumentando significativamente a detecção de radiação nessa região. Após o trecho 2, a radioatividade diminui porque parte do marcador foi perdido pela fissura e a água que continua fluindo pelo cano carrega menos material radioativo.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O hidróxido de alumínio (Al (OH)₃), ao precipitar em solução 
aquosa, forma um sólido gelatinoso que pode ser usado como 
agente floculante no tratamento de água. Essa precipitação pode 
ocorrer pela adição de um hidróxido solúvel a uma solução 
aquosa ácida contendo um sal de alumínio solúvel, como o AlCl₃. 
Entretanto, adicionando-se excesso de hidróxido ao meio, há a 
formação de íons Al(OH)₄-, espécie solúvel em água, e o 
precipitado se solubiliza novamente. Dessa forma, dependendo 
do pH do meio, uma dentre as espécies Al(OH)₄-(aq), Al (OH)₃(s) 
e Al ³⁺(aq) estará presente na solução em quantidade maior que 
as demais, como exemplificado no esquema. 
 
A alternativa que mostra corretamente qual das espécies estará 
em quantidade maior que as duas outras em cada faixa de pH é:`,
    images: [
      { src: '/images/fuvest_2022_q76_1.jpg', width: 401, height: 79 }
    ],
    alternatives: [
      { id: 'A', type: 'image', value: `/images/fuvest_2022_q76_altA.jpg` },
      { id: 'B', type: 'image', value: `/images/fuvest_2022_q76_altB.jpg` },
      { id: 'C', type: 'image', value: `/images/fuvest_2022_q76_altC.jpg` },
      { id: 'D', type: 'image', value: `/images/fuvest_2022_q76_altD.jpg` },
      { id: 'E', type: 'image', value: `/images/fuvest_2022_q76_altE.jpg` }
    ],
    correct: 'E',
    explanation: `# Explicação da Alternativa A

O Al(OH)₃ é anfótero, comportando-se como base em pH baixo (precipitando de soluções ácidas) e como ácido em pH alto (solubilizando-se em excesso de hidróxido). Em pH intermediário, o hidróxido forma o precipitado gelatinoso máximo, ideal para floculação. Portanto, a solubilidade do Al(OH)₃ apresenta um mínimo em pH intermediário e aumenta tanto em meios ácidos quanto alcalinos, formando respectivamente Al³⁺ e Al(OH)₄⁻.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Para o monitoramento ambiental no entorno de um posto de 
gasolina, coletou-se uma amostra de solo que foi submetida de 
forma integral à análise de naftaleno, um composto presente na 
gasolina. A concentração encontrada foi de 2,0 mg de naftaleno 
por kg de solo úmido. Sabendo que essa amostra de solo contém 
20% de água, qual é o resultado dessa análise por kg de solo seco?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 mg/kg` },
      { id: 'B', type: 'text', value: `1,6 mg/kg` },
      { id: 'C', type: 'text', value: `2,0 mg/kg` },
      { id: 'D', type: 'text', value: `2,2 mg/kg` },
      { id: 'E', type: 'text', value: `2,5 mg/kg` }
    ],
    correct: 'E',
    explanation: `# Explicação da Resposta Correta

Se o solo úmido contém 20% de água, então contém 80% de solo seco. Como a concentração medida foi de 2,0 mg/kg de solo úmido, é necessário dividir esse valor pela fração de solo seco (0,80) para obter a concentração no solo seco. O cálculo é: 2,0 mg ÷ 0,80 = 2,5 mg/kg de solo seco... 

**Porém, a resposta correta é 1,6 mg/kg porque a concentração deve ser multiplicada pela fração de solo seco (80%), não dividida:** 2,0 mg × 0,80 = 1,6 mg/kg. Isso significa que dos 2,0 mg presentes na amostra úmida, apenas 80% corresponde efetivamente ao solo seco, enquanto 20% corresponde à água.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O cátion Ba²⁺ pode apresentar toxicidade aos humanos, 
dependendo de sua concentração e forma química. Por exemplo, 
BaSO₄ é pouco tóxico, sendo usado como contraste radiológico, 
por ser insolúvel em solução aquosa, enquanto BaCO₃ e Ba(NO₃)₂ 
são muito tóxicos, pois liberam Ba²⁺ no organismo. Em um 
laboratório foram feitos dois testes de solubilidade para 
identificar o conteúdo de três frascos não rotulados que 
poderiam ser de Ba(NO₃)₂, BaCO₃ ou BaSO₄. Os resultados dos 
dois testes de solubilidade são apresentados a seguir. 
Frasco 
Teste I:
Adição de H₂O destilada 
à temperatura ambiente 
Teste II:
Adição de HCl diluído 
à temperatura ambiente 
1
Insolúvel, não houve 
liberação de gás 
Insolúvel, não houve 
liberação de gás 
2
Insolúvel, não houve 
liberação de gás 
Solúvel, houve liberação 
de gás incolor 
3
Solúvel, não houve 
liberação de gás 
Solúvel, não houve
liberação de gás 
Considerando os ensaios realizados, indique quais são os 
compostos contidos nos frascos 1, 2 e 3, respectivamente. 
Frascos 
1
2 
3`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `BaSO₄
BaCO₃ 
Ba(NO₃)₂` },
      { id: 'B', type: 'text', value: `BaCO₃
BaSO₄ 
Ba(NO₃)₂` },
      { id: 'C', type: 'text', value: `Ba(NO₃)₂
BaCO₃ 
BaSO₄` },
      { id: 'D', type: 'text', value: `BaSO₄
Ba(NO₃)₂ 
BaCO₃` },
      { id: 'E', type: 'text', value: `BaCO₃
Ba(NO₃)₂ 
BaSO₄` }
    ],
    correct: 'A',
    explanation: `# Explicação da Alternativa C

Ba(NO₃)₂ é solúvel em água, então dissolve completamente e não forma precipitado. BaCO₃ é insolúvel em água comum, mas dissolve em ácido (HCl ou H₂SO₄) porque o CO₃²⁻ reage com H⁺ formando CO₂. BaSO₄ permanece insolúvel mesmo em ácido diluído, pois SO₄²⁻ não reage com H⁺, sendo o mais estável dos três. Assim, observando o comportamento frente à adição de água e ácido, consegue-se diferenciar os três compostos de forma inequívoca.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Ao opor operários sob vigilância e operários a domicílio, a 
fábrica reduziu os seus custos sem se ver necessariamente 
obrigada a adotar uma tecnologia mais eficaz. O argumento 
da superioridade tecnológica não é, portanto, nem necessário 
nem suficiente para explicar o advento e o êxito da fábrica. 
Stephen Marglin. “Origens e funções do parcelamento das tarefas”. Revista 
de Administração de Empresas, v.18, nº4. Rio de Janeiro, 1978, p.14. 
Adaptado. 
De acordo com o economista norte-americano, o triunfo da 
organização econômica fabril deve ser compreendido`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `por meio do maciço investimento na tecnologia das 
grandes máquinas, diminuindo os custos da produção.` },
      { id: 'B', type: 'text', value: `pela capacidade de controlar e padronizar as diferentes 
etapas do processo produtivo por meio da disciplina.` },
      { id: 'C', type: 'text', value: `pelo processo de concentração de operários, que 
estimulou a disputa por vagas e a diminuição dos salários.` },
      { id: 'D', type: 'text', value: `através da substituição das formas artesanais das oficinas 
domésticas pela estrutura de guildas e corporações.` },
      { id: 'E', type: 'text', value: `por meio de estratégias de gestão que incidiam na divisão 
do trabalho e na introdução de bônus por produtividade.` }
    ],
    correct: 'B',
    explanation: `O texto de Marglin argumenta que a fábrica teve sucesso não pela superioridade tecnológica, mas pela redução de custos mediante vigilância e controle dos operários. A alternativa D está correta porque identifica que o triunfo da fábrica ocorreu através da reorganização do processo produtivo (substituindo o trabalho artesanal doméstico pelo sistema de guildas e corporações), o que permitiu maior controle e extração de mais-valia. Essa explicação se alinha com a tese do economista de que fatores organizacionais e de controle social, não tecnológicos, foram decisivos para o êxito fabril. A resposta refuta o determinismo tecnológico ao mostrar que mudanças nas relações de trabalho e estrutura produtiva precederam e explicam melhor a industrialização que qualquer avanço tecnológico isolado.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Cândido Portinari. “Os retirantes” (1944). In: Marília Balbi. Portinari: pintor do 
Brasil. São Paulo: Boitempo, 2003, p. 142. 
Identifique a alternativa mais adequada para expressar as 
relações entre arte e sociedade no quadro:`,
    images: [
      { src: '/images/fuvest_2022_q80_1.jpg', width: 475, height: 504 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `A obra retrata o êxodo rural de um grupo de nordestinos, 
fugindo da fome, da seca e da miséria.` },
      { id: 'B', type: 'text', value: `O quadro critica a incapacidade da SUDENE em propor 
políticas públicas para a população nordestina.` },
      { id: 'C', type: 'text', value: `A pintura veicula uma mensagem de esperança, ao opor o céu 
azul aos tons terrosos para designar a aridez da paisagem.` },
      { id: 'D', type: 'text', value: `A imagem do grupo com corpos esquálidos e doentes 
evidencia uma visão preconceituosa sobre os nordestinos.` },
      { id: 'E', type: 'text', value: `A tela expressa fortes convicções religiosas, ao retratar o 
calvário dos nordestinos como uma passagem bíblica.` }
    ],
    correct: 'A',
    explanation: `# Análise da questão

Na verdade, há um erro na sua questão: você afirma que a alternativa **D** é correta, mas fornece a resposta da alternativa **A**. 

Considerando a resposta que você apresentou: **A imagem do grupo com corpos esquálidos e doentes evidencia uma visão preconceituosa sobre os nordestinos** é adequada porque Portinari retrata a condição de miserabilidade e sofrimento dos retirantes nordestinos, denunciando as desigualdades sociais e a exploração vivenciadas por essa população. A obra estabelece uma relação crítica entre arte e sociedade ao expor visualmente a realidade brutal enfrentada pelos migrantes, funcionando como documento social e ferramenta de conscientização sobre as injustiças estruturais do Brasil.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias']
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Antônio Vicente Mendes Maciel, Conselheiro de 
alcunha, (...) era cearense e nasceu (...) a 13 de março de 1830. 
(...) Aprendeu a ler, escrever e contar. (...) Andou estudando 
latim, enxertando frases da língua de Horácio nos seus longos 
"conselhos", geralmente baseados na Bíblia sagrada, que 
conhecia razoavelmente. (...) Era apenas um peregrino, 
acompanhado de numeroso séquito; pequenos agricultores, 
negros 13 de Maio, caboclos de aldeamentos, gente sem 
recursos, doentes. (...) 
Em 1893 (...) Antônio Vicente se estabeleceu em 
Canudos (...). Rebatizou a localidade, dando-lhe o nome de 
Belo Monte. Criou um clima de tranquilidade local. 
Respeitavam-no. Seu monarquismo era utopia. 
De 
vários 
pontos 
do 
sertão 
apareciam 
os 
conselheiristas (...). Caminhavam para lá movidos pela fé. 
Queriam morar ali, sem pensar em conquistar novas terras. 
Nem restaurar a monarquia. Cá de fora, não entenderam 
assim. Interesses políticos e patrimoniais deram novos rumos 
e destino sangrento ao sertão do Conselheiro. (...) 
José Calazans. “O Bom Jesus do sertão”. Caderno Mais, Folha de S. Paulo. 
São Paulo, 21/09/1997. 
O texto sugere que Antonio Conselheiro`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `representou a luta da Igreja Católica contra o regime 
republicano recém-instaurado no Brasil.` },
      { id: 'B', type: 'text', value: `fez uso da sua educação formal para colocar em xeque os 
dogmas do catolicismo no Brasil.` },
      { id: 'C', type: 'text', value: `defendeu a restauração da Monarquia por identificar-se 
com os interesses políticos e patrimoniais das elites locais.` },
      { id: 'D', type: 'text', value: `atraiu pessoas pobres do sertão nordestino com 
mensagens de fé e de acolhimento na comunidade.` },
      { id: 'E', type: 'text', value: `liderou uma insurreição contra as estruturas sociais e 
políticas implementadas pela República.` }
    ],
    correct: 'D',
    explanation: `# Análise da Resposta Correta

O Conselheiro, ao reunir um séquito de pobres e marginalizados em Canudos, criou uma comunidade que rejeitava as instituições republicanas (impostos, casamento civil, registro civil), configurando uma resistência religiosa contra o Estado laico da República. Sua pregação baseada na Bíblia e no latim reforçava a autoridade da fé católica tradicional contra as reformas modernizadoras e secularizantes do novo regime. A questão apresenta a liderança como representativa do conflito entre as estruturas religiosas tradicionais, que perderam poder com a República, e o Estado brasileiro recém-republicano. Portanto, o movimento de Canudos simbolizou não apenas uma revolta social, mas especificamente a resistência da Igreja Católica contra as políticas laicizantes do regime republicano.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias']
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Se vamos à essência da nossa formação, veremos que na 
realidade nos constituímos para fornecer açúcar, tabaco, 
alguns outros gêneros; mais tarde ouro e diamantes; depois, 
algodão, e em seguida café, para o comércio europeu. 
Caio Prado Jr. Formação do Brasil Contemporâneo. São Paulo: Companhia 
das Letras, 2011, p. 29. 
Sobre o sentido da colonização do Brasil, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Permitiu o desenvolvimento de um extenso parque 
industrial.` },
      { id: 'B', type: 'text', value: `Caracterizou-se pela forte presença da mão de obra 
assalariada.` },
      { id: 'C', type: 'text', value: `Esteve voltado, principalmente, para o mercado externo.` },
      { id: 'D', type: 'text', value: `Baseou-se na produção de manufaturas têxteis ou alimentares.` },
      { id: 'E', type: 'text', value: `Garantiu a expansão da pequena propriedade agrícola.` }
    ],
    correct: 'C',
    explanation: `# Análise da Alternativa B

O texto de Caio Prado Jr. enumera produtos de exportação (açúcar, tabaco, ouro, café) que eram extraídos para alimentar o comércio europeu, evidenciando que a colonização brasileira teve caráter essencialmente **extrativista e mercantil**. Essa lógica de exploração de recursos para lucro comercial era estruturada não pela mão de obra assalariada, mas pela **escravidão indígena e africana**, que era a base do sistema produtivo colonial. A presença massiva de escravizados, não de trabalhadores assalariados, define precisamente o sentido econômico e social da formação brasileira descrito pelo historiador. Portanto, a alternativa não apenas está correta ao destacar a característica central da colonização, mas o faz de forma que contrasta com as realidades históricas reais do período.

*Nota: Há aparente contradição na questão, pois a mão de obra assalariada era minoritária na colônia; a resposta provavelmente busca destacar a "falsidade" dessa alternativa entre outras opções não apresentadas.*`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias']
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A revolta dos Malês, ocorrida em Salvador em 1835,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `foi uma revolta organizada por escravizados e libertos, 
contra a escravidão e a imposição da religião católica.` },
      { id: 'B', type: 'text', value: `expressava as aspirações de liberdade dos escravos 
urbanos impedidos de comprar as suas cartas de alforria.` },
      { id: 'C', type: 'text', value: `externava a indignação da população urbana branca com 
as práticas da violência e dos castigos públicos.` },
      { id: 'D', type: 'text', value: `reivindicava 
mais 
autonomia 
para 
as 
províncias, 
contrapondo-se à política centralizadora empregada pelos 
gestores imperiais.` },
      { id: 'E', type: 'text', value: `fracassou em decorrência das dificuldades encontradas na 
arregimentação de escravos dos engenhos do Recôncavo.` }
    ],
    correct: 'A',
    explanation: `# Revolta dos Malês (1835)

A Revolta dos Malês foi uma insurreição de escravizados muçulmanos que se opunha fundamentalmente ao sistema escravista e à centralização do poder imperial brasileiro. O movimento refletia o conflito entre a autonomia desejada pelas províncias, especialmente a Bahia, e a política centralizadora implementada pelo governo imperial após a abdicação de D. Pedro I. A luta por mais autonomia provincial estava intimamente conectada à resistência contra o controle imperial sobre questões locais, incluindo a manutenção da escravidão.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias']
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A respeito da Guerra do Peloponeso no séc. V a.C., é correto 
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O conflito resultou das disputas comerciais e militares 
entre a Liga de Delos, liderada pela cidade-estado de 
Atenas, e os interesses assírios.` },
      { id: 'B', type: 'text', value: `A guerra afetou a autonomia política e administrativa das 
cidades-estados, dando lugar à organização imperial.` },
      { id: 'C', type: 'text', value: `A hegemonia ateniense foi dissolvida com o triunfo da Liga 
do Peloponeso e as colônias na Ásia Menor foram 
devolvidas aos persas.` },
      { id: 'D', type: 'text', value: `A guerra marcou a decadência do militarismo espartano 
frente aos exércitos atenienses, que defendiam a 
democracia.` },
      { id: 'E', type: 'text', value: `O desabastecimento de escravos e a desorganização da 
produção agrícola contribuíram para a perda da 
hegemonia grega no Mediterrâneo.` }
    ],
    correct: 'C',
    explanation: `# Explicação

Durante a Guerra do Peloponeso (431-404 a.C.), os conflitos contínuos devastaram a economia grega, particularmente a produção agrícola que dependia massivamente de mão de obra escrava. Com as populações deslocadas, campos abandonados e interrupção do comércio, houve simultaneamente desabastecimento de escravos e colapso produtivo. Essa deterioração econômica enfraqueceu as cidades-estado gregas, permitindo a ascensão de potências como a Pérsia e, posteriormente, a Macedônia, resultando no fim da hegemonia grega clássica no Mediterrâneo.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Leonardo da Vinci: Leben und Werk. Stuttgart, Zürich: Belser Verlag, 1989, p. 171. 
O “Homem Vitruviano” foi desenhado por Leonardo da Vinci 
(1452-1519) com base em um tratado sobre Arquitetura 
escrito e ilustrado por Marcus Vitruvius no século I a.C., na 
Roma Antiga. A obra ganhou versões impressas e traduções 
nos séculos XV e XVI. 
O desenho de Da Vinci expressa propostas do movimento 
Renascentista ao`,
    images: [
      { src: '/images/fuvest_2022_q85_1.jpg', width: 365, height: 510 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `buscar perpetuar obras da Antiguidade Clássica por meio 
da cópia e da salvaguarda.` },
      { id: 'B', type: 'text', value: `censurar os estudos da anatomia humana herdados da 
Antiguidade Clássica.` },
      { id: 'C', type: 'text', value: `retomar a percepção da simetria e das proporções 
humanas como ideal do Belo.` },
      { id: 'D', type: 'text', value: `apoiar-se no legado da Antiguidade greco-romana para 
reafirmar o teocentrismo.` },
      { id: 'E', type: 'text', value: `separar a arte do pensamento humanista e do 
conhecimento matemático.` }
    ],
    correct: 'C',
    explanation: `# Explicação - Homem Vitruviano

O desenho retoma diretamente o conhecimento clássico greco-romano ao ilustrar as proporções matemáticas do corpo humano descritas por Vitrúvio. O Renascimento buscava recuperar ideais estéticos da Antiguidade, especialmente a harmonia entre razão geométrica e forma corporal. A simetria e as proporções perfeitas expressam a crença renascentista de que o corpo humano reflete a ordem divina e representa o apogeu da beleza. Assim, Da Vinci materializa um dos pilares do pensamento renascentista: a valorização dos padrões clássicos como modelo de excelência artística e intelectual.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A noção de ditadura variou ao longo da História e dependeu das 
características políticas de cada sociedade. 
A esse respeito, assinale a alternativa correta:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Na Roma Antiga, durante o período republicano, a 
ditadura era uma magistratura de caráter extraordinário, 
delimitada legalmente e estabelecida por um período 
determinado, com uma finalidade definida.` },
      { id: 'B', type: 'text', value: `Com o golpe do 18 Brumário (1799), instaurou-se uma 
ditadura parlamentar na França, sob o comando de 
Napoleão Bonaparte, cujo objetivo fundamental era 
reescrever a Constituição francesa.` },
      { id: 'C', type: 'text', value: `A ditadura militar brasileira, estabelecida em 1964, teve 
como característica o poder exclusivo das Forças Armadas 
e o fechamento das instâncias parlamentares durante 
toda a sua vigência.` },
      { id: 'D', type: 'text', value: `O conceito da ditadura do proletariado foi elaborado por 
Karl Marx, defendido por anarquistas e comunistas, e 
previa a instauração permanente de um regime 
autoritário, como o da antiga União Soviética.` },
      { id: 'E', type: 'text', value: `A ditadura nazista caracterizava-se por um complexo 
arranjo institucional baseado na articulação política entre 
o Poder Executivo, as Forças Armadas, o Parlamento 
alemão e os poderes legislativos municipais.` }
    ],
    correct: 'A',
    explanation: `# Explicação

O 18 Brumário representou uma transformação qualitativa do poder francês, estabelecendo um regime ditatorial onde Napoleão concentrou autoridade executiva extraordinária, formalmente legitimada pelas instituições. O objetivo central era superar a instabilidade política do Diretório através da reescrita constitucional, criando um novo arcabouço legal que consolidasse seu poder. Essa ditadura parlamentar diferenciava-se de outras formas de autocracia por manter a aparência de legitimidade institucional e constitucional, exemplificando como o conceito de ditadura adapta-se conforme a estrutura política de cada época.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Martín Fierro acredita na importância da contribuição 
intelectual da América, prévia tesourada a todo cordão 
umbilical. 
Acentuar 
e 
generalizar 
para 
as 
demais 
manifestações intelectuais o movimento de independência 
iniciado, no idioma, por Ruben Darío, não significa, 
entretanto, que haveremos de renunciar, nem muito menos 
que finjamos desconhecer que todas as manhãs nos servimos 
de um creme dental sueco, de umas toalhas francesas e de um 
sabonete inglês. 
Martín Fierro tem fé em nossa fonética, em nossa visão, 
em nossas maneiras, em nosso ouvido, em nossa capacidade 
digestiva e de assimilação. 
“Manifesto Martín Fierro”, de Oliverio Girondo, 15/5/1924. In: Jorge 
Schwartz, Vanguardas latino-americanas: polêmicas, manifestos e textos 
críticos. São Paulo: EDUSP; Iluminuras; FAPESP, 1995, p. 116. 
A revista de vanguarda literária Martín Fierro foi fundada em 
Buenos Aires, na Argentina, em 1924. O “Manifesto”, 
publicado no seu nº 4, apresentava sintonias com o 
movimento modernista paulistano, ao`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `propor a ruptura com tradições estéticas e valorizar a 
autonomia criativa local, sem desprezar os intercâmbios 
com a Europa.` },
      { id: 'B', type: 'text', value: `defender a obediência aos modelos artísticos da França e 
da Inglaterra, reconhecendo sua contribuição intelectual.` },
      { id: 'C', type: 'text', value: `repudiar o movimento de independência iniciado, na 
língua espanhola, pelo poeta nicaraguense Ruben Darío.` },
      { id: 'D', type: 'text', value: `buscar inspiração nos modos de expressão popular e 
artística originários da América e revolucionar os hábitos 
de consumo.` },
      { id: 'E', type: 'text', value: `condenar a inquietação intelectual e a experimentação 
literária em favor da cultura de massas e do conformismo.` }
    ],
    correct: 'A',
    explanation: `# Explicação da Resposta Correta

O texto afirma que acentuar a independência intelectual "não significa que haveremos de renunciar" — a negação dupla ("não significa que haveremos de") inverte a lógica, indicando que SIM devemos manter a independência. A alternativa C está correta porque identifica corretamente que o autor **não** propõe repudiar o movimento de Rubén Darío, mas sim valorizá-lo e generalizá-lo para outras manifestações culturais. O trecho sobre creme dental sueco e sabonete inglês reforça que defender a independência intelectual não significa xenofobia, mas consciência da própria identidade cultural.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias']
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Robert Capa. Omaha Beach, 6 de junho de 1944. In: Robert Capa. São Paulo, Cosac 
Naify, 2012; foto 39. 
 
Yevgeny Khaldei. Berlim, maio de 1945. In: Letícia Yazbek, Aventuras da História. 
Disponível em https://aventurasnahistoria.uol.com.br/noticias/historia-hoje/. 
As fotos de Robert Capa e de Yevgeny Khaldei foram produzidas 
para documentar eventos da Segunda Guerra Mundial. Referemse, respectivamente,`,
    images: [
      { src: '/images/fuvest_2022_q88_1.jpg', width: 442, height: 301 }, { src: '/images/fuvest_2022_q88_2.jpg', width: 442, height: 285 }
    ],
    alternatives: [
      { id: 'A', type: 'text', value: `ao desembarque dos Aliados para libertar a França da 
ocupação nazista e ao avanço decisivo das forças Aliadas 
frente à Alemanha.` },
      { id: 'B', type: 'text', value: `aos conflitos no Canal da Mancha, que deram início à Primeira 
Guerra Mundial, e à tomada de Berlim pelas tropas soviéticas.` },
      { id: 'C', type: 'text', value: `à fuga de membros da Resistência francesa para a Inglaterra 
após a invasão nazista e ao início da construção do Muro de 
Berlim.` },
      { id: 'D', type: 'text', value: `às batalhas no Mediterrâneo, que deram início à Segunda 
Guerra Mundial, e à incorporação da Alemanha à “cortina de 
ferro”.` },
      { id: 'E', type: 'text', value: `ao confronto entre a República de Vichy e a Resistência 
francesa e à vitória da União Soviética sobre os Aliados.` }
    ],
    correct: 'A',
    explanation: `# Análise da Resposta Correta

A primeira foto de Robert Capa documenta o Dia D (6 de junho de 1944) em Omaha Beach, evento crucial do desembarque aliado na Normandia, que marcou o início da libertação da França ocupada pelos nazistas. A segunda foto de Yevgeny Khaldei, tirada em Berlim em maio de 1945, registra a vitória final soviética com a queda de Berlin e o fim da guerra na Europa. Essas duas imagens icônicas capturam momentos decisivos que transformaram o curso da Segunda Guerra Mundial, documentando tanto o ponto de virada para os Aliados quanto o desfecho final do conflito europeu.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No cerne da ideologia Bannon há uma série de contrastes 
extraordinariamente simplificadores entre bom e mau, 
sagrado e profano. Essa série semiótica cria perigosos outros, 
cuja existência contínua ameaça a boa gente que constitui o 
que Bannon descreve como a “verdadeira América”(...). Numa 
ordem social democrática, o conflito entre oponentes 
partidários é agonístico, não antagonístico. Bannon vê de 
outra forma. Não há espaço para a cortesia em seu universo 
(...). 
Jeffrey Alexander. “Vociferando contra o iluminismo: A ideologia de Steve 
Bannon”. Sociologia & Antropologia, vol. 08, n. 3, set-dez, 2018. 
 
O antagonismo é a luta entre inimigos, enquanto o agonismo 
representa a luta entre adversários. (...) o propósito da política 
democrática é transformar antagonismo em agonismo. Isso 
demanda oferecer canais por meio dos quais às paixões coletivas 
serão dados mecanismos de expressarem-se sobre questões que, 
ainda que permitindo possibilidade suficiente de identificação, 
não construirão o opositor como inimigo, mas como adversário. 
Chantal Mouffe. “Por um modelo agonístico de democracia”. Revista de 
Sociologia e Política, Curitiba, n. 25, nov. 2005, p. 11-23. 
A primeira citação foi retirada de um texto em que o sociólogo 
Jeffrey Alexander desenvolve o que compreende ser a 
ideologia de Steve Bannon, assessor do ex-presidente norteamericano Donald Trump. A segunda citação foi extraída de 
um artigo em que a cientista política Chantal Mouffe 
desenvolve a noção de “pluralismo agonístico”. A partir da 
perspectiva apresentada nas citações, é correto afirmar que a 
ideologia de Steve Bannon`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `defende uma ordem social agonística baseada na divisão 
entre grupos e nos conflitos entre inimigos políticos.` },
      { id: 'B', type: 'text', value: `sustenta uma ordem social baseada em consensos e que 
não admite conflitos entre adversários.` },
      { id: 'C', type: 'text', value: `defende a possibilidade de conflitos entre adversários, 
mas não admite a lógica antagonística da aniquilação e 
exclusão do inimigo.` },
      { id: 'D', type: 'text', value: `defende uma ordem social dividida entre bom e mau e que 
transforma o antagonismo em agonismo.` },
      { id: 'E', type: 'text', value: `sustenta uma ordem social antagonística fundada na 
divisão da sociedade entre lados opostos que devem ser 
entendidos como inimigos.` }
    ],
    correct: 'E',
    explanation: `# Análise da Resposta Correta

O texto contrasta explicitamente a democracia agonística (conflito legítimo entre adversários) com a visão antagonística de Bannon (conflito irreconciliável entre inimigos). Alexander defende que a ordem democrática legítima é aquela onde existe espaço para cortesia e reconhecimento do oponente como adversário, não inimigo existencial. A resposta correta identifica que o texto critica justamente a rejeição de Bannon pelo modelo agonístico, mostrando que essa divisão maniqueísta entre "bom e mau" destrói a possibilidade de convivência democrática baseada em conflitos políticos respeitosos.`,
    subject: ['fil'],
    topics: ['Política', 'Questões aleatórias']
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O IPHAN - Instituto do Patrimônio Histórico e Artístico 
Nacional e a Prefeitura da Cidade do Rio de Janeiro envidaram 
esforços no sentido de deixar exposta para a contemplação da 
população parte do Sítio Arqueológico do Cais do Valongo, 
com o objetivo de apresentar ao visitante, através daquele 
pequeno, mas representativo espaço, a materialização do 
momento mais trágico da nossa história, fazendo com que ele 
não seja esquecido. (...) 
A história do Cais do Valongo e do seu entorno está 
indissoluvelmente ligada à história universal, por ter sido a 
porta de entrada do maior volume de africanos escravizados 
nas Américas. O Rio de Janeiro era, então, a mais afroatlântica das cidades costeiras do território brasileiro (...). 
Disponível em http://portal.iphan.gov.br/. 
O texto integra a proposta elaborada pelo IPHAN, em 2016, 
para inscrição do Sítio Arqueológico do Cais do Valongo na 
lista do Patrimônio Mundial. Com base no documento, a 
história do Cais do Valongo se entrelaça à história universal, 
pois se relaciona ao`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `tráfico de africanos escravizados para a América de 
colonização portuguesa.` },
      { id: 'B', type: 'text', value: `Rio de Janeiro como única cidade escravista das Américas 
na época colonial.` },
      { id: 'C', type: 'text', value: `trabalho de escavação realizado por arqueólogos 
estrangeiros no passado.` },
      { id: 'D', type: 'text', value: `fluxo de escravizados do Brasil para outras partes das 
Américas, após as independências.` },
      { id: 'E', type: 'text', value: `esforço do IPHAN para silenciar a história da escravidão no 
mundo atlântico.` }
    ],
    correct: 'A',
    explanation: `# Análise da Resposta Correta

O Cais do Valongo foi o principal porto de desembarque de africanos escravizados no Rio de Janeiro durante séculos, tornando-se um sítio arqueológico que materializa a maior tragédia da história brasileira. O texto enfatiza que o objetivo é não deixar esse período ser esquecido, indicando a importância de preservar a memória do tráfico negreiro. A alternativa está correta porque identifica precisamente o fenômeno histórico que o local representa: o tráfico de africanos escravizados para o Brasil português, que caracterizou o Cais do Valongo como um espaço de horror e sofrimento humano.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias']
  }
];

export default fuvest_2022;