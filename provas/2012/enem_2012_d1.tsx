import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2012_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Charge anônima. BURKE, P. A fabricação do rei. Rio de Janeiro: Zahar, 1994. 
Na França, o rei Luís XIV teve sua imagem fabricada por 
um conjunto de estratégias que visavam sedimentar uma 
determinada noção de soberania. Neste sentido, a charge 
apresentada demonstra`,
    images: ['/enem/2012/images/enem_2012_d1_q1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a humanidade do rei, pois retrata um homem comum, 
sem os adornos próprios à vestimenta real.` },
      { id: 'B', type: 'text', value: `a unidade entre o público e o privado, pois a figura do 
rei com a vestimenta real representa o público e sem 
a vestimenta real, o privado.` },
      { id: 'C', type: 'text', value: `o vínculo entre monarquia e povo, pois leva 
ao conhecimento do público a figura de um rei 
despretensioso e distante do poder político.` },
      { id: 'D', type: 'text', value: `o gosto estético refinado do rei, pois evidencia a 
elegância dos trajes reais em relação aos de outros 
membros da corte.` },
      { id: 'E', type: 'text', value: `a importância da vestimenta para a constituição 
simbólica do rei, pois o corpo político adornado 
esconde os defeitos do corpo pessoal.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Esclarecimento é a saída do homem de sua 
menoridade, da qual ele próprio é culpado. A menoridade 
é a incapacidade de fazer uso de seu entendimento sem a 
direção de outro indivíduo. O homem é o próprio culpado 
dessa menoridade se a causa dela não se encontra na 
falta de entendimento, mas na falta de decisão e coragem 
de servir-se de si mesmo sem a direção de outrem. Tem 
coragem de fazer uso de teu próprio entendimento, tal é 
o lema do esclarecimento. A preguiça e a covardia são as 
causas pelas quais uma tão grande parte dos homens, 
depois que a natureza de há muito os libertou de uma 
condição estranha, continuem, no entanto, de bom grado 
menores durante toda a vida. 
KANT, I. Resposta à pergunta: o que é esclarecimento? Petrópolis: Vozes, 1985 (adaptado). 
Kant destaca no texto o conceito de Esclarecimento, 
fundamental para a compreensão do contexto filosófico 
da Modernidade. Esclarecimento, no sentido empregado 
por Kant, representa`,
    alternatives: [
      { id: 'A', type: 'text', value: `a reivindicação de autonomia da capacidade racional 
como expressão da maioridade.` },
      { id: 'B', type: 'text', value: `o exercício da racionalidade como pressuposto menor 
diante das verdades eternas.` },
      { id: 'C', type: 'text', value: `a imposição de verdades matemáticas, com caráter 
objetivo, de forma heterônoma.` },
      { id: 'D', type: 'text', value: `a compreensão de verdades religiosas que libertam o 
homem da falta de entendimento.` },
      { id: 'E', type: 'text', value: `a emancipação da subjetividade humana de ideologias 
produzidas pela própria razão.` },
    ],
    correct: 'A',
    explanation: `Para Kant, o homem esclarecido é aquele que, fazendo uso da razão, pensa por conta própria e não a partir do que outras pessoas falam, acreditam. Neste sentido, Kant formula dois grandes conceitos, menoridade e maioridade. Ele entende por menoridade o homem que formula suas ideias a partir de outros e de maioridade o que produz um pensamento autônomo e racional.`,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
O que vemos no país é uma espécie de espraiamento 
e a manifestação da agressividade através da violência. 
Isso se desdobra de maneira evidente na criminalidade, 
que está presente em todos os redutos - seja nas áreas 
abandonadas pelo poder público, seja na política ou no 
futebol. O brasileiro não é mais violento do que outros 
povos, mas a fragilidade do exercício e do reconhecimento 
da cidadania e a ausência do Estado em vários territórios 
do país se impõem como um caldo de cultura no qual a 
agressividade e a violência fincam suas raízes. 
Entrevista com Joel Birman. A Corrupção é um crime sem rosto. IstoE . Edição 2099, 3 fev. 2010. 
Texto II 
Nenhuma sociedade pode sobreviver sem canalizar 
as pulsões e emoções do indivíduo, sem um controle 
muito específico de seu comportamento. Nenhum controle 
desse tipo é possível sem que as pessoas anteponham 
limitações umas às outras, e todas as limitações são 
convertidas, na pessoa a quem são impostas, em medo 
de um ou outro tipo. 
ELIAS, N. O Processo Civilizador . Rio de Janeiro: Jorge Zahar, 1993. 
Considerando-se a dinâmica do processo civilizador, tal 
como descrito no Texto II, o argumento do Texto I acerca 
da violência e agressividade na sociedade brasileira 
expressa a`,
    alternatives: [
      { id: 'A', type: 'text', value: `incompatibilidade entre os modos democráticos 
de convívio social e a presença de aparatos de 
controle policial.` },
      { id: 'B', type: 'text', value: `manutenção de práticas repressivas herdadas 
dos períodos ditatoriais sob a forma de leis e atos 
administrativos.` },
      { id: 'C', type: 'text', value: `inabilidade das forças militares em conter a violência 
decorrente das ondas migratórias nas grandes 
cidades brasileiras.` },
      { id: 'D', type: 'text', value: `dificuldade histórica da sociedade brasileira em 
institucionalizar formas de controle social compatíveis 
com valores democráticos.` },
      { id: 'E', type: 'text', value: `incapacidade das instituições político-legislativas em 
formular mecanismos de controle social específicos à 
realidade social brasileira.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://quadro-a-quadro.blog.br. Acesso em: 27 jan. 2012. 
Com sua entrada no universo dos gibis, o Capitão 
chegaria para apaziguar a agonia, o autoritarismo militar 
e combater a tirania. Claro que, em tempos de guerra, 
um gibi de um herói com uma bandeira americana no 
peito aplicando um sopapo no Fürer só poderia ganhar 
destaque, e o sucesso não demoraria muito a chegar. 
COSTA, C. Capitão América, o primeiro vingador : crítica. Disponível em: www.revistastart.com.br. 
Acesso em: 27 jan. 2012 (adaptado). 
A capa da primeira edição norte-americana da revista 
do Capitão América demonstra sua associação com a 
participação dos Estados Unidos na luta contra`,
    images: ['/enem/2012/images/enem_2012_d1_q4.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a Tríplice Aliança, na Primeira Guerra Mundial.` },
      { id: 'B', type: 'text', value: `os regimes totalitários, na Segunda Guerra Mundial.` },
      { id: 'C', type: 'text', value: `o poder soviético, durante a Guerra Fria.` },
      { id: 'D', type: 'text', value: `o movimento comunista, na Guerra do Vietnã.` },
      { id: 'E', type: 'text', value: `o terrorismo internacional, após 11 de setembro 
de 2001.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['his'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Torna-se claro que quem descobriu a África no 
Brasil, muito antes dos europeus, foram os próprios 
africanos trazidos como escravos. E esta descoberta 
não se restringia apenas ao reino linguístico, estendia-se 
também a outras áreas culturais, inclusive à da religião. 
Há razões para pensar que os africanos, quando 
misturados e transportados ao Brasil, não demoraram 
em perceber a existência entre si de elos culturais 
mais profundos. 
SLENES, R. Malungu, ngoma vem! África coberta e descoberta do Brasil. 
Revista USP , n. 12, dez./jan./fev. 1991-92 (adaptado). 
Com base no texto, ao favorecer o contato de indivíduos 
de diferentes partes da África, a experiência da escravidão 
no Brasil tornou possível a`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação de uma identidade cultural afro-brasileira.` },
      { id: 'B', type: 'text', value: `superação de aspectos culturais africanos por antigas 
tradições europeias.` },
      { id: 'C', type: 'text', value: `reprodução de conflitos entre grupos étnicos africanos.` },
      { id: 'D', type: 'text', value: `manutenção das características culturais específicas 
de cada etnia.` },
      { id: 'E', type: 'text', value: `resistência à incorporação de elementos culturais 
indígenas.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['his'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nós nos recusamos a acreditar que o banco da 
justiça é falível. Nós nos recusamos a acreditar que há 
capitais insuficientes de oportunidade nesta nação. Assim 
nós viemos trocar este cheque, um cheque que nos 
dará o direito de reclamar as riquezas de liberdade e a 
segurança da justiça. 
KING Jr., M. L. Eu tenho um sonho, 28 ago. 1963. 
Disponível em: www.palmares.gov.br. Acesso em: 30 nov. 2011 (adaptado). 
O cenário vivenciado pela população negra, no sul dos 
Estados Unidos nos anos 1950, conduziu à mobilização 
social. Nessa época, surgiram reivindicações que tinham 
como expoente Martin Luther King e objetivavam`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a conquista de direitos civis para a população negra.` },
      { id: 'B', type: 'text', value: `o apoio aos atos violentos patrocinados pelos negros 
em espaço urbano.` },
      { id: 'C', type: 'text', value: `a supremacia das instituições religiosas em meio à 
comunidade negra sulista.` },
      { id: 'D', type: 'text', value: `a incorporação dos negros no mercado de trabalho.` },
      { id: 'E', type: 'text', value: `a aceitação da cultura negra como representante do 
modo de vida americano.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `É verdade que nas democracias o povo parece 
fazer o que quer; mas a liberdade política não consiste 
nisso. Deve-se ter sempre presente em mente o que é 
independência e o que é liberdade. A liberdade é o direito 
de fazer tudo o que as leis permitem; se um cidadão 
pudesse fazer tudo o que elas proíbem, não teria mais 
liberdade, porque os outros também teriam tal poder. 
MONTESQUIEU. Do Espírito das Leis . São Paulo: Editora Nova Cultural, 1997 (adaptado). 
A 
característica 
de 
democracia 
ressaltada 
por 
Montesquieu diz respeito`,
    alternatives: [
      { id: 'A', type: 'text', value: `ao status de cidadania que o indivíduo adquire ao 
tomar as decisões por si mesmo.` },
      { id: 'B', type: 'text', value: `ao condicionamento da liberdade dos cidadãos à 
conformidade às leis.` },
      { id: 'C', type: 'text', value: `à possibilidade de o cidadão participar no poder e, 
nesse caso, livre da submissão às leis.` },
      { id: 'D', type: 'text', value: `ao livre-arbítrio do cidadão em relação àquilo que é 
proibido, desde que ciente das consequências.` },
      { id: 'E', type: 'text', value: `ao direito do cidadão exercer sua vontade de acordo 
com seus valores pessoais.` },
    ],
    correct: 'B',
    explanation: `Montesquieu defende que, numa democracia, a liberdade não significa que cada cidadão pode fazer aquilo que quer. É legítimo fazer apenas aquilo que as leis permitem. Se não fosse dessa forma, não haveria nenhuma liberdade efetiva, visto que não haveria nenhuma garantia de que os direitos individuais seriam respeitados.`,
    subject: ['fil'],
    topics: ['Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: www.gandhiserve.org. Acesso em: 21 nov. 2011. 
O cartum, publicado em 1932, ironiza as consequências 
sociais das constantes prisões de Mahatma Gandhi pelas 
autoridades britânicas, na Índia, demonstrando`,
    images: ['/enem/2012/images/enem_2012_d1_q8.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a ineficiência do sistema judiciário inglês no 
território indiano.` },
      { id: 'B', type: 'text', value: `o apoio da população hindu à prisão de Gandhi.` },
      { id: 'C', type: 'text', value: `o caráter violento das manifestações hindus frente à 
ação inglesa.` },
      { id: 'D', type: 'text', value: `a impossibilidade de deter o movimento liderado 
por Gandhi.` },
      { id: 'E', type: 'text', value: `a indiferença das autoridades britânicas frente ao 
apelo popular hindu.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Na regulação de matérias culturalmente delicadas, 
como, por exemplo, a linguagem oficial, os currículos 
da educação pública, o status das Igrejas e das 
comunidades religiosas, as normas do direito penal 
(por exemplo, quanto ao aborto), mas também em 
assuntos menos chamativos, como, por exemplo, a 
posição da família e dos consórcios semelhantes ao 
matrimônio, a aceitação de normas de segurança ou a 
delimitação das esferas pública e privada - em tudo 
isso reflete-se amiúde apenas o autoentendimento 
ético-político de uma cultura majoritária, dominante 
por motivos históricos. Por causa de tais regras, 
implicitamente repressivas, mesmo dentro de uma 
comunidade republicana que garanta formalmente 
a igualdade de direitos para todos, pode eclodir um 
conflito cultural movido pelas minorias desprezadas 
contra a cultura da maioria. 
HABERMAS, J. A inclusão do outro: estudos de teoria política. São Paulo: Loyola, 2002. 
A reivindicação dos direitos culturais das minorias, 
como exposto por Habermas, encontra amparo nas 
democracias contemporâneas, na medida em que 
se alcança`,
    alternatives: [
      { id: 'A', type: 'text', value: `a secessão, pela qual a minoria discriminada 
obteria a igualdade de direitos na condição 
da sua concentração espacial, num tipo de 
independência nacional.` },
      { id: 'B', type: 'text', value: `a reunificação da sociedade que se encontra 
fragmentada em grupos de diferentes comunidades 
étnicas, confissões religiosas e formas de vida, em 
torno da coesão de uma cultura política nacional.` },
      { id: 'C', type: 'text', value: `a coexistência das diferenças, considerando a 
possibilidade de os discursos de autoentendimento 
se submeterem ao debate público, cientes de que 
estarão vinculados à coerção do melhor argumento.` },
      { id: 'D', type: 'text', value: `a autonomia dos indivíduos que, ao chegarem à 
vida adulta, tenham condições de se libertar das 
tradições de suas origens em nome da harmonia da 
política nacional.` },
      { id: 'E', type: 'text', value: `o desaparecimento de quaisquer limitações, tais 
como linguagem política ou distintas convenções 
de comportamento, para compor a arena política a 
ser compartilhada.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Mas uma coisa ouso afirmar, porque há muitos 
testemunhos, e é que vi nesta terra de Veragua [Panamá] 
maiores indícios de ouro nos dois primeiros dias do que 
na Hispaniola em quatro anos, e que as terras da região 
não podem ser mais bonitas nem mais bem lavradas. Ali, 
se quiserem podem mandar extrair à vontade. 
Carta de Colombo aos reis da Espanha, julho de 1503. Apud AMADO, J.; FIGUEIREDO, L. C. 
Colombo e a América: quinhentos anos depois. São Paulo: Atual, 1991 (adaptado). 
O documento permite identificar um interesse econômico 
espanhol na colonização da América a partir do século XV. 
A implicação desse interesse na ocupação do espaço 
americano está indicada na`,
    alternatives: [
      { id: 'A', type: 'text', value: `expulsão dos indígenas para fortalecer o clero católico.` },
      { id: 'B', type: 'text', value: `promoção das guerras justas para conquistar o território.` },
      { id: 'C', type: 'text', value: `imposição da catequese para explorar o trabalho africano.` },
      { id: 'D', type: 'text', value: `opção pela policultura para garantir o povoamento ibérico.` },
      { id: 'E', type: 'text', value: `fundação de cidades para controlar a circulação 
de riquezas.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Que é ilegal a faculdade que se atribui à autoridade 
real para suspender as leis ou seu cumprimento. 
Que é ilegal toda cobrança de impostos para a 
Coroa sem o concurso do Parlamento, sob pretexto 
de prerrogativa, ou em época e modo diferentes dos 
designados por ele próprio. 
Que é indispensável convocar com frequência os 
Parlamentos para satisfazer os agravos, assim como para 
corrigir, afirmar e conservar leis. 
Declaração de Direitos . Disponível em: http://disciplinas.stoa.usp.br. 
Acesso em: 20 dez. 2011 (adaptado). 
No documento de 1689, identifica-se uma particularidade 
da Inglaterra diante dos demais Estados europeus na 
Época Moderna. A peculiaridade inglesa e o regime 
político que predominavam na Europa continental estão 
indicados, respectivamente, em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Redução da influência do papa - Teocracia.` },
      { id: 'B', type: 'text', value: `Limitação do poder do soberano - Absolutismo.` },
      { id: 'C', type: 'text', value: `Ampliação da dominação da nobreza - República.` },
      { id: 'D', type: 'text', value: `Expansão da força do presidente - Parlamentarismo.` },
      { id: 'E', type: 'text', value: `Restrição da competência do congresso - 
Presidencialismo.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Cartaz da Revolução Constitucionalista. 
Disponível em: http://veja.abril.com.br. Acesso em: 29 jun. 2012. 
Elaborado 
pelos 
partidários 
da 
Revolução 
Constitucionalista de 1932, o cartaz apresentado 
pretendia mobilizar a população paulista contra o 
governo federal. 
Essa mobilização utilizou-se de uma referência histórica, 
associando o processo revolucionário`,
    images: ['/enem/2012/images/enem_2012_d1_q12.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à experiência francesa, expressa no chamado à luta 
contra a ditadura.` },
      { id: 'B', type: 'text', value: `aos ideais republicanos, indicados no destaque à 
bandeira paulista.` },
      { id: 'C', type: 'text', value: `ao protagonismo das Forças Armadas, representadas 
pelo militar que empunha a bandeira.` },
      { id: 'D', type: 'text', value: `ao bandeirantismo, símbolo paulista apresentado em 
primeiro plano.` },
      { id: 'E', type: 'text', value: `ao papel figurativo de Vargas na política, enfatizado 
pela pequenez de sua figura no cartaz.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O que o projeto governamental tem em vista é 
poupar à Nação o prejuízo irreparável do perecimento e 
da evasão do que há de mais precioso no seu patrimônio. 
Grande parte das obras de arte até mais valiosas e dos 
bens de maior interesse histórico, de que a coletividade 
brasileira era depositária, têm desaparecido ou se 
arruinado irremediavelmente. As obras de arte típicas e 
as relíquias da história de cada país não constituem o seu 
patrimônio privado, e sim um patrimônio comum de todos 
os povos. 
ANDRADE, R. M. F. Defesa do patrimônio artístico e histórico. O Jornal, 30 out. 1936. 
 In: ALVES FILHO, I. Brasil, 500 anos em documentos . 
Rio de Janeiro: Mauad, 1999 (adaptado). 
A criação no Brasil do Serviço do Patrimônio Histórico 
Artístico Nacional (SPHAN), em 1937, foi orientada por 
ideias como as descritas no texto, que visavam`,
    alternatives: [
      { id: 'A', type: 'text', value: `submeter a memória e o patrimônio nacional ao 
controle dos órgãos públicos, de acordo com a 
tendência autoritária do Estado Novo.` },
      { id: 'B', type: 'text', value: `transferir para a iniciativa privada a responsabilidade 
de preservação do patrimônio nacional, por meio de 
leis de incentivo fiscal.` },
      { id: 'C', type: 'text', value: `definir os fatos e personagens históricos a serem 
cultuados pela sociedade brasileira, de acordo com o 
interesse público.` },
      { id: 'D', type: 'text', value: `resguardar da destruição as obras representativas 
da cultura nacional, por meio de políticas públicas 
preservacionistas.` },
      { id: 'E', type: 'text', value: `determinar as responsabilidades pela destruição 
do patrimônio nacional, de acordo com a 
legislação brasileira.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A soma do tempo gasto por todos os navios de 
carga na espera para atracar no porto de Santos é 
igual a 11 anos - isso, contando somente o intervalo 
de janeiro a outubro de 2011. O problema não foi 
registrado somente neste ano. Desde 2006 a perda de 
tempo supera uma década. 
Folha de S. Paulo , 25 dez. 2011 (adaptado). 
A situação descrita gera consequências em cadeia, tanto 
para a produção quanto para o transporte. No que se refere 
à territorialização da produção no Brasil contemporâneo, 
uma dessas consequências é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `realocação das exportações para o modal aéreo em 
função da rapidez.` },
      { id: 'B', type: 'text', value: `dispersão dos serviços financeiros em função da 
busca de novos pontos de importação.` },
      { id: 'C', type: 'text', value: `redução da exportação de gêneros agrícolas em 
função da dificuldade para o escoamento.` },
      { id: 'D', type: 'text', value: `priorização do comércio com países vizinhos em 
função da existência de fronteiras terrestres.` },
      { id: 'E', type: 'text', value: `estagnação da indústria de alta tecnologia em função 
da concentração de investimentos na infraestrutura 
de circulação.` },
    ],
    correct: 'C',
    explanation: `Uma grande parte da produção agrícola brasileira concentra-se na região, ou seja, mais no interior do país. Neste sentido, essa produção precisa ser transportada para o litoral (portos) para ser escoada para o exterior. Sendo assim, observa-se a grande necessidade da intermodalidade caminhões-navios que, se não existir ou existir de forma precária, acaba acarretando no encarecimento dos gêneros agrícolas.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Diante dessas inconsistências e de outras que 
ainda preocupam a opinião pública, nós, jornalistas, 
estamos encaminhando este documento ao Sindicato 
dos Jornalistas Profissionais no Estado de São Paulo, 
para que o entregue à Justiça; e da Justiça esperamos 
a realização de novas diligências capazes de levar 
à completa elucidação desses fatos e de outros que 
porventura vierem a ser levantados. 
Em nome da verdade. In: O Estado de São Paulo, 3 fev. 1976. Apud. FILHO, I. A. 
Brasil, 500 anos em documentos . Rio de Janeiro: Mauad, 1999. 
A morte do jornalista Vladimir Herzog, ocorrida durante o 
regime militar, em 1975, levou a medidas como o abaixo- 
assinado feito por profissionais da imprensa de São 
Paulo. A análise dessa medida tomada indica a`,
    alternatives: [
      { id: 'A', type: 'text', value: `certeza do cumprimento das leis.` },
      { id: 'B', type: 'text', value: `superação do governo de exceção.` },
      { id: 'C', type: 'text', value: `violência dos terroristas de esquerda.` },
      { id: 'D', type: 'text', value: `punição dos torturadores da polícia.` },
      { id: 'E', type: 'text', value: `expectativa da investigação dos culpados.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: www.metmuseum.org. Acesso em: 14 set. 2011. 
A figura apresentada é de um mosaico, produzido por 
volta do ano 300 d.C., encontrado na cidade de Lod, atual 
Estado de Israel. Nela, encontram-se elementos que 
representam uma característica política dos romanos no 
período, indicada em:`,
    images: ['/enem/2012/images/enem_2012_d1_q16.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Cruzadismo - conquista da terra santa.` },
      { id: 'B', type: 'text', value: `Patriotismo - exaltação da cultura local.` },
      { id: 'C', type: 'text', value: `Helenismo - apropriação da estética grega.` },
      { id: 'D', type: 'text', value: `Imperialismo - selvageria dos povos dominados.` },
      { id: 'E', type: 'text', value: `Expansionismo - diversidade dos territórios conquistados.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Após o retorno de uma viagem a Minas Gerais, 
onde Pedro I fora recebido com grande frieza, seus 
partidários prepararam uma série de manifestações a 
favor do imperador no Rio de Janeiro, armando fogueiras 
e luminárias na cidade. Contudo, na noite de 11 de março, 
tiveram início os conflitos que ficaram conhecidos como 
a Noite das Garrafadas, durante os quais os “brasileiros”  
apagavam as fogueiras “portuguesas” e atacavam as 
casas iluminadas, sendo respondidos com cacos de 
garrafas jogadas das janelas. 
VAINFAS, R. (Org.). Dicionário do Brasil Imperial . Rio de Janeiro: Objetiva, 2008 (adaptado). 
Os anos finais do I Reinado (1822-1831) se caracterizaram 
pelo aumento da tensão política. Nesse sentido, a análise 
dos episódios descritos em Minas Gerais e no Rio de 
Janeiro revela`,
    alternatives: [
      { id: 'A', type: 'text', value: `estímulos ao racismo.` },
      { id: 'B', type: 'text', value: `apoio ao xenofobismo.` },
      { id: 'C', type: 'text', value: `críticas ao federalismo.` },
      { id: 'D', type: 'text', value: `repúdio ao republicanismo.` },
      { id: 'E', type: 'text', value: `questionamentos ao autoritarismo.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Portadora de memória, a paisagem ajuda a construir 
os sentimentos de pertencimento; ela cria uma atmosfera 
que convém aos momentos fortes da vida, às festas, às 
comemorações. 
CLAVAL, P. Terra dos homens: a geografia. São Paulo: Contexto, 2010 (adaptado). 
No texto, é apresentada uma forma de integração da 
paisagem geográfica com a vida social. Nesse sentido, a 
paisagem, além de existir como forma concreta, apresenta 
uma dimensão`,
    alternatives: [
      { id: 'A', type: 'text', value: `política de apropriação efetiva do espaço.` },
      { id: 'B', type: 'text', value: `econômica de uso de recursos do espaço.` },
      { id: 'C', type: 'text', value: `privada de limitação sobre a utilização do espaço.` },
      { id: 'D', type: 'text', value: `natural de composição por elementos físicos do espaço.` },
      { id: 'E', type: 'text', value: `simbólica de relação subjetiva do indivíduo com o 
espaço.` },
    ],
    correct: 'E',
    explanation: `Cada sujeito do mundo constrói a partir de sua visão particular, subjetiva, do espaço um sentimento de pertencer à ele a partir de tudo o que vê, sente e interpreta.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://primeira-serie.blogspot.com.br. Acesso em: 07 dez. 2011 (adaptado). 
Na imagem do início do século XX, identifica-se um modelo 
produtivo cuja forma de organização fabril baseava-se na`,
    images: ['/enem/2012/images/enem_2012_d1_q19.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `autonomia do produtor direto.` },
      { id: 'B', type: 'text', value: `adoção da divisão sexual do trabalho.` },
      { id: 'C', type: 'text', value: `exploração do trabalho repetitivo.` },
      { id: 'D', type: 'text', value: `utilização de empregados qualificados.` },
      { id: 'E', type: 'text', value: `incentivo à criatividade dos funcionários.` },
    ],
    correct: 'C',
    explanation: `A imagem mostra o interior de uma fábrica cujo funcionamento apresenta uma das características do modelo taylorista/fordista de produção, a divisão do trabalho, o que acarreta consequentemente a alienação do trabalho por conta do exercício repetitivo de uma única função. Além disso a linha de montagem apresentada na imagem também é característica deste modelo produtivo. Essas características eram fundamentais para o industrial pois aumentavam a produtividade e os lucros.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A singularidade da questão da terra na África 
Colonial é a expropriação por parte do colonizador e 
as desigualdades raciais no acesso à terra. Após a 
independência, as populações de colonos brancos 
tenderam a diminuir, apesar de a proporção de 
terra em posse da minoria branca não ter diminuído 
proporcionalmente. 
MOYO, S. A terra africana e as questões agrárias: o caso das lutas pela terra no Zimbábue. 
In: FERNANDES, B. M.; MARQUES, M. I. M.; SUZUKI, J. C. (Org.). Geografia agrária: 
teoria e poder. São Paulo: Expressão Popular, 2007. 
Com base no texto, uma característica socioespacial e um 
consequente desdobramento que marcou o processo de 
ocupação do espaço rural na África subsaariana foram:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Exploração do campesinato pela elite proprietária - 
Domínio das instituições fundiárias pelo poder público.` },
      { id: 'B', type: 'text', value: `Adoção de práticas discriminatórias de acesso à 
terra - Controle do uso especulativo da propriedade 
fundiária.` },
      { id: 'C', type: 'text', value: `Desorganização da economia rural de subsistência 
- Crescimento do consumo interno de alimentos 
pelas famílias camponesas.` },
      { id: 'D', type: 'text', value: `Crescimento dos assentamentos rurais com mão de 
obra familiar - Avanço crescente das áreas rurais 
sobre as regiões urbanas.` },
      { id: 'E', type: 'text', value: `Concentração das áreas cultiváveis no setor 
agroexportador - Aumento da ocupação da população 
pobre em territórios agrícolas marginais.` },
    ],
    correct: 'E',
    explanation: `O texto destaca a contínua concentração de terra na mão de poucos produtores, histórico relacionado ao período da colonização do continente africano. Mesmo após o processo de descolonização em que a produção agrícola adquire um caráter agroexportador essa concentração persistiu, e coube às pessoas com baixas condições espaços rurais periféricos e precários para praticarem a subsistência.`,
    subject: ['geo'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
A Europa entrou em estado de exceção, personificado 
por obscuras forças econômicas sem rosto ou localização 
física conhecida que não prestam contas a ninguém e se 
espalham pelo globo por meio de milhões de transações 
diárias no ciberespaço. 
ROSSI, C. Nem fim do mundo nem mundo novo. Folha de São Paulo , 11 dez. 2011 (adaptado). 
Texto II 
Estamos imersos numa crise financeira como nunca 
tínhamos visto desde a Grande Depressão iniciada em 
1929 nos Estados Unidos. 
Entrevista de George Soros. Disponível em: www.nybooks.com. 
Acesso em: 17 ago. 2011 (adaptado). 
A comparação entre os significados da atual crise 
econômica e do crash de 1929 oculta a principal diferença 
entre essas duas crises, pois`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `o crash da Bolsa em 1929 adveio do envolvimento 
dos EUA na I Guerra Mundial e a atual crise é o 
resultado dos gastos militares desse país nas guerras 
do Afeganistão e Iraque.` },
      { id: 'B', type: 'text', value: `a crise de 1929 ocorreu devido a um quadro de 
superprodução industrial nos EUA e a atual crise 
resultou da especulação financeira e da expansão 
desmedida do crédito bancário.` },
      { id: 'C', type: 'text', value: `a crise de 1929 foi o resultado da concorrência dos 
países europeus reconstruídos após a I Guerra e a 
atual crise se associa à emergência dos BRICS como 
novos concorrentes econômicos.` },
      { id: 'D', type: 'text', value: `o crash da Bolsa em 1929 resultou do excesso de 
proteções ao setor produtivo estadunidense e a atual 
crise tem origem na internacionalização das empresas 
e no avanço da política de livre mercado.` },
      { id: 'E', type: 'text', value: `a crise de 1929 decorreu da política intervencionista 
norte-americana sobre o sistema de comércio mundial 
e a atual crise resultou do excesso de regulação do 
governo desse país sobre o sistema monetário.` },
    ],
    correct: 'B',
    explanation: `A diferença entre as duas crises refere-se às suas causas. A crise de 29 está relacionada à uma superprodução industrial e à falta de mercado no período em que o modelo Fordista-Taylorista estava em destaque. Já a crise de 2008 está relacionada à uma grande oferta de crédito bancário em que foi desconsiderado o pagamento deste.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto do Cartaz: “Amor e não guerra” 
Foto de Jovens em protesto contra a Guerra do Vietnã. Disponível em: 
 http://goldenyears66to69.blogspot.com. Acesso em: 10 out. 2011. 
Nos anos que se seguiram à Segunda Guerra, movimentos 
como o Maio de 1968 ou a campanha contra a Guerra 
do Vietnã culminaram no estabelecimento de diferentes 
formas de participação política. Seus slogans, tais como 
“Quando penso em revolução quero fazer amor”, se 
tornaram símbolos da agitação cultural nos anos 1960, 
cuja inovação relacionava-se`,
    images: ['/enem/2012/images/enem_2012_d1_q22.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à contestação da crise econômica europeia, que fora 
provocada pela manutenção das guerras coloniais.` },
      { id: 'B', type: 'text', value: `à organização partidária da juventude comunista, 
visando o estabelecimento da ditadura do proletariado.` },
      { id: 'C', type: 'text', value: `à unificação das noções de libertação social e 
libertação individual, fornecendo um significado 
político ao uso do corpo.` },
      { id: 'D', type: 'text', value: `à defesa do amor cristão e monogâmico, com fins à 
reprodução, que era tomado como solução para os 
conflitos sociais.` },
      { id: 'E', type: 'text', value: `ao reconhecimento da cultura das gerações passadas, 
que conviveram com a emergência do rock e outras 
mudanças nos costumes.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['his'],
    topics: ['Primeira e Segunda Guerra Mundial', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nossa cultura lipofóbica muito contribui para a 
distorção da imagem corporal, gerando gordos que se 
veem magros e magros que se veem gordos, numa 
quase unanimidade de que todos se sentem ou se 
veem “distorcidos”. 
Engordamos quando somos gulosos. É pecado da 
gula que controla a relação do homem com a balança. 
Todo obeso declarou, um dia, guerra à balança. Para 
emagrecer é preciso fazer as pazes com a dita cuja, 
visando adequar-se às necessidades para as quais 
ela aponta. 
FREIRE, D. S. Obesidade não pode ser pré-requisito. Disponível em: http//gnt.globo.com. 
Acesso em: 3 abr. 2012 (adaptado). 
O texto apresenta um discurso de disciplinarização dos 
corpos, que tem como consequência`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a ampliação dos tratamentos médicos alternativos, 
reduzindo os gastos com remédios.` },
      { id: 'B', type: 'text', value: `a democratização do padrão de beleza, tornando-o 
acessível pelo esforço individual.` },
      { id: 'C', type: 'text', value: `o controle do consumo, impulsionando uma crise 
econômica na indústria de alimentos.` },
      { id: 'D', type: 'text', value: `a culpabilização individual, associando obesidade à 
fraqueza de caráter.` },
      { id: 'E', type: 'text', value: `o aumento da longevidade, resultando no crescimento 
populacional.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Composição da população residente urbana por sexo, 
segundo os grupos de idade - Brasil - 1
Composição da população residente rural por sexo, 
segundo os grupos de idade - Brasil - 1991/2010 

Homens 
Mulheres 
1991 
2010 
Fonte: IBGE, Censo Demográfico 1991/2010 
BRASIL. IBGE. Censo demográfico 1991-2010. Rio de Janeiro, 2011. 
A interpretação e a correlação das figuras sobre a 
dinâmica demográfica brasileira demonstram um(a)`,
    images: ['/enem/2012/images/enem_2012_d1_q24_1.jpg', '/enem/2012/images/enem_2012_d1_q24_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `menor proporção de fecundidade na área urbana.` },
      { id: 'B', type: 'text', value: `menor proporção de homens na área rural.` },
      { id: 'C', type: 'text', value: `aumento da proporção de fecundidade na área rural.` },
      { id: 'D', type: 'text', value: `queda da longevidade na área rural.` },
      { id: 'E', type: 'text', value: `queda do número de idosos na área urbana.` },
    ],
    correct: 'A',
    explanation: `Observando as figuras é possível perceber que há uma queda da taxa de fecundidade na cidade, ou seja, queda do número de filhos por mulher, isso ocorre devido à fatores como inserção da mulher no mercado de trabalho, o aumento da escolaridade, o uso de contraceptivos e planejamento familiar.`,
    subject: ['geo'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para Platão, o que havia de verdadeiro em Parmênides 
era que o objeto de conhecimento é um objeto de razão e 
não de sensação , e era preciso estabelecer uma relação 
entre objeto racional e objeto sensível ou material que 
privilegiasse o primeiro em detrimento do segundo. Lenta, 
mas irresistivelmente, a Doutrina das Ideias formava-se 
em sua mente. 
ZINGANO, M. Platão e Aristóteles: o fascínio da filosofia. 
São Paulo: Odysseus, 2012 (adaptado). 
O texto faz referência à relação entre razão e sensação, 
um aspecto essencial da Doutrina das Ideias de Platão 
(427 a.C.-346 a.C.). De acordo com o texto, como Platão 
se situa diante dessa relação?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Estabelecendo um abismo intransponível entre as duas.` },
      { id: 'B', type: 'text', value: `Privilegiando 
os 
sentidos 
e 
subordinando 
o 
conhecimento a eles.` },
      { id: 'C', type: 'text', value: `Atendo-se à posição de Parmênides de que razão e 
sensação são inseparáveis.` },
      { id: 'D', type: 'text', value: `Afirmando que a razão é capaz de gerar conhecimento, 
mas a sensação não.` },
      { id: 'E', type: 'text', value: `Rejeitando a posição de Parmênides de que a 
sensação é superior à razão.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['fil'],
    topics: ['Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A maior parte dos veículos de transporte atualmente 
é movida por motores a combustão que utilizam derivados 
de petróleo. Por causa disso, esse setor é o maior 
consumidor de petróleo do mundo, com altas taxas de 
crescimento ao longo do tempo. Enquanto outros setores 
têm obtido bons resultados na redução do consumo, os 
transportes tendem a concentrar ainda mais o uso de 
derivados do óleo. 
MURTA, A. Energia: o vício da civilização. Rio de Janeiro: Garamond, 2011 (adaptado). 
Um impacto ambiental da tecnologia mais empregada 
pelo setor de transportes e uma medida para 
promover a redução do seu uso, estão indicados, 
respectivamente, em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Aumento da poluição sonora - construção de barreiras 
acústicas.` },
      { id: 'B', type: 'text', value: `Incidência da chuva ácida - estatização da indústria 
automobilística.` },
      { id: 'C', type: 'text', value: `Derretimento das calotas polares - incentivo aos 
transportes de massa.` },
      { id: 'D', type: 'text', value: `Propagação de doenças respiratórias - distribuição 
de medicamentos gratuitos.` },
      { id: 'E', type: 'text', value: `Elevação das temperaturas médias - criminalização 
da emissão de gás carbônico.` },
    ],
    correct: 'C',
    explanation: `O setor de transportes se utiliza em grande medida de combustíveis que liberam gás carbônico na atmosfera e isso contribui para o agravamento do efeito estufa, o que faz com que a temperatura se eleve acarretando o derretimento de calotas polares. Uma solução viável é o incentivo ao transporte coletivo pois assim haveria a diminuição de automóveis circulando e consequentemente diminuiria a emissão de CO2.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `As mulheres quebradeiras de coco-babaçu dos 
Estados do Maranhão, Piauí, Pará e Tocantins, na 
sua grande maioria, vivem numa situação de exclusão 
e subalternidade. O termo quebradeira de coco 
assume o caráter de identidade coletiva na medida 
em que as mulheres que sobrevivem dessa atividade 
e reconhecem sua posição e condição desvalorizada 
pela 
lógica 
da 
dominação, 
se 
organizam 
em 
movimentos de resistência e de luta pela conquista da 
terra, pela libertação dos babaçuais, pela autonomia 
do processo produtivo. Passam a atribuir significados 
ao seu trabalho e as suas experiências, tendo como 
principal referência sua condição preexistente de 
acesso e uso dos recursos naturais. 
ROCHA, M. R. T. A luta das mulheres quebradeiras de coco-babaçu, pela libertação do 
coco preso e pela posse da terra. In: Anais do VII Congresso Latino-Americano 
de Sociologia Rural , Quito, 2006 (adaptado). 
A organização do movimento das quebradeiras de coco 
de babaçu é resultante da`,
    alternatives: [
      { id: 'A', type: 'text', value: `constante violência nos babaçuais na confluência 
de terras maranhenses, piauienses, paraenses e 
tocantinenses, região com elevado índice de homicídios.` },
      { id: 'B', type: 'text', value: `falta de identidade coletiva das trabalhadoras, 
migrantes das cidades e com pouco vínculo histórico 
com as áreas rurais do interior do Tocantins, Pará, 
Maranhão e Piauí.` },
      { id: 'C', type: 'text', value: `escassez de água nas regiões de veredas, ambientes 
naturais dos babaçus, causada pela construção 
de açudes particulares, impedindo o amplo acesso 
público aos recursos hídricos.` },
      { id: 'D', type: 'text', value: `progressiva devastação das matas dos cocais, em 
função do avanço da sojicultura nos chapadões do 
Meio-Norte brasileiro.` },
      { id: 'E', type: 'text', value: `dificuldade imposta pelos fazendeiros e posseiros 
no acesso aos babaçuais localizados no interior de 
suas propriedades.` },
    ],
    correct: 'E',
    explanation: `O controle das terras na área da mata do cocais exercido pelos fazendeiros e posseiros da região acaba sendo uma barreira ao acesso das mulheres quebradeiras de coco-babaçu, o que gera uma organização de e para as mesmas visando a manutenção de sua cultura e a subsistência.`,
    subject: ['soc'],
    topics: ['Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
Anaxímenes de Mileto disse que o ar é o elemento 
originário de tudo o que existe, existiu e existirá, e 
que outras coisas provêm de sua descendência. 
Quando o ar se dilata, transforma-se em fogo, ao 
passo que os ventos são ar condensado. As nuvens 
formam-se a partir do ar por feltragem e, ainda mais 
condensadas, transformam-se em água. A água, 
quando mais condensada, transforma-se em terra, e 
quando condensada ao máximo possível, transforma- 
se em pedras. 
BURNET, J. A aurora da filosofia grega . Rio de Janeiro: PUC-Rio, 2006 (adaptado). 
Texto II 
Basílio Magno, filósofo medieval, escreveu: 
“Deus, como criador de todas as coisas, está no 
princípio do mundo e dos tempos. Quão parcas 
de conteúdo se nos apresentam, em face desta 
concepção, 
as 
especulações 
contraditórias 
dos 
filósofos, para os quais o mundo se origina, ou de 
algum dos quatro elementos, como ensinam os Jônios, 
ou dos átomos, como julga Demócrito. Na verdade, 
dão a impressão de quererem ancorar o mundo numa 
teia de aranha.” 
GILSON, E.; BOEHNER, P. História da Filosofia Crista . 
São Paulo: Vozes, 1991 (adaptado). 
Filósofos dos diversos tempos históricos desenvolveram 
teses para explicar a origem do universo, a partir de uma 
explicação racional. As teses de Anaxímenes, filósofo 
grego antigo, e de Basílio, filósofo medieval, têm em 
comum na sua fundamentação teorias que`,
    alternatives: [
      { id: 'A', type: 'text', value: `eram baseadas nas` },
      { id: 'B', type: 'text', value: `refutavam as teorias de filósofos da religião.` },
      { id: 'C', type: 'text', value: `tinham origem nos mitos das civilizações antigas.` },
      { id: 'D', type: 'text', value: `postulavam um princípio originário para o mundo.` },
      { id: 'E', type: 'text', value: `defendiam que Deus é o princípio de todas as coisas.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['fil'],
    topics: ['Filosofia Medieval', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `De repente, sente-se uma vibração que aumenta 
rapidamente; lustres balançam, objetos se movem 
sozinhos e somos invadidos pela estranha sensação de 
medo do imprevisto. Segundos parecem horas, poucos 
minutos são uma eternidade. Estamos sentindo os efeitos 
de um terremoto, um tipo de abalo sísmico. 
ASSAD, L. Os (não tão) imperceptíveis movimentos da Terra. ComCiência: 
Revista Eletrônica de Jornalismo Científico, n. 117, abr. 2010. 
Disponível em: http://comciencia.br. Acesso em: 2 mar. 2012. 
O fenômeno físico descrito no texto afeta intensamente as 
populações que ocupam espaços próximos às áreas de`,
    alternatives: [
      { id: 'A', type: 'text', value: `alívio da tensão geológica.` },
      { id: 'B', type: 'text', value: `desgaste da erosão superficial.` },
      { id: 'C', type: 'text', value: `atuação do intemperismo químico.` },
      { id: 'D', type: 'text', value: `formação de aquíferos profundos.` },
      { id: 'E', type: 'text', value: `acúmulo de depósitos sedimentares.` },
    ],
    correct: 'A',
    explanation: `O fenômeno descrito no texto é o terremoto, a partir do qual ocorre o alívio da tensão existente no interior da Terra por entre falhas nas placas tectônicas que encontram-se em movimento de choque ou acomodação, o que pode acarretar grandes problemas em áreas povoadas.`,
    subject: ['geo'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
Experimentei algumas vezes que os sentidos eram 
enganosos, e é de prudência nunca se fiar inteiramente 
em quem já nos enganou uma vez. 
DESCARTES, R. Meditações Metafisicas . São Paulo: Abril Cultural, 1979. 
Texto II 
Sempre que alimentarmos alguma suspeita de 
que uma ideia esteja sendo empregada sem nenhum 
significado, precisaremos apenas indagar: de que 
impressão deriva esta suposta ideia? E se for impossível 
atribuir-lhe qualquer impressão sensorial, isso servirá 
para confirmar nossa suspeita. 
HUME, D. Uma investigação sobre o entendimento . São Paulo: Unesp, 2004 (adaptado). 
Nos textos, ambos os autores se posicionam sobre a 
natureza do conhecimento humano. A comparação dos 
excertos permite assumir que Descartes e Hume`,
    alternatives: [
      { id: 'A', type: 'text', value: `defendem os sentidos como critério originário para 
considerar um conhecimento legítimo.` },
      { id: 'B', type: 'text', value: `entendem que é desnecessário suspeitar do significado 
de uma ideia na reflexão filosófica e crítica.` },
      { id: 'C', type: 'text', value: `são legítimos representantes do criticismo quanto à 
gênese do conhecimento.` },
      { id: 'D', type: 'text', value: `concordam que conhecimento humano é impossível 
em relação às ideias e aos sentidos.` },
      { id: 'E', type: 'text', value: `atribuem diferentes lugares ao papel dos sentidos no 
processo de obtenção do conhecimento.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['fil'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Não ignoro a opinião antiga e muito difundida de 
que o que acontece no mundo é decidido por Deus e 
pelo acaso. Essa opinião é muito aceita em nossos dias, 
devido às grandes transformações ocorridas, e que 
ocorrem diariamente, as quais escapam à conjectura 
humana. Não obstante, para não ignorar inteiramente o 
nosso livre-arbítrio, creio que se pode aceitar que a sorte 
decida metade dos nossos atos, mas [o livre-arbítrio] nos 
permite o controle sobre a outra metade. 
MAQUIAVEL, N. O Príncipe . Brasília: EdUnB, 1979 (adaptado). 
Em O Príncipe , Maquiavel refletiu sobre o exercício do 
poder em seu tempo. No trecho citado, o autor demonstra 
o vínculo entre o seu pensamento político e o humanismo 
renascentista ao`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorizar a interferência divina nos acontecimentos 
definidores do seu tempo.` },
      { id: 'B', type: 'text', value: `rejeitar a intervenção do acaso nos processos políticos.` },
      { id: 'C', type: 'text', value: `afirmar a confiança na razão autônoma como 
fundamento da ação humana.` },
      { id: 'D', type: 'text', value: `romper com a tradição que valorizava o passado 
como fonte de aprendizagem.` },
      { id: 'E', type: 'text', value: `redefinir a ação política com base na unidade entre 
fé e razão.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A interface clima/sociedade pode ser considerada em 
termos de ajustamento à extensão e aos modos como as 
sociedades funcionam em uma relação harmônica com 
seu clima. O homem e suas sociedades são vulneráveis 
às variações climáticas. A vulnerabilidade é a medida 
pela qual uma sociedade é suscetível de sofrer por 
causas climáticas. 
AYOADE, J. O. Introdução a climatologia para os trópicos. 
Rio de Janeiro: Bertrand Brasil, 2010 (adaptado). 
Considerando o tipo de relação entre ser humano e 
condição climática apresentado no texto, uma sociedade 
torna-se mais vulnerável quando`,
    alternatives: [
      { id: 'A', type: 'text', value: `concentra suas atividades no setor primário.` },
      { id: 'B', type: 'text', value: `apresenta estoques elevados de alimentos.` },
      { id: 'C', type: 'text', value: `possui um sistema de transportes articulado.` },
      { id: 'D', type: 'text', value: `diversifica a matriz de geração de energia.` },
      { id: 'E', type: 'text', value: `introduz tecnologias à produção agrícola.` },
    ],
    correct: 'A',
    explanation: `O setor primário, aquele referente às atividades agrícolas, é. ainda hoje, mesmo com a evolução das técnicas, muito dependente das condições climáticas, sendo assim, uma sociedade cuja relação econômica é principalmente com o setor primário se torna mais vulnerável às intempéries climáticas como a seca, por exemplo.`,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma mesma empresa pode ter sua sede 
administrativa onde os impostos são menores, as 
unidades de produção onde os salários são os mais 
baixos, os capitais onde os juros são os mais altos 
e seus executivos vivendo onde a qualidade de vida 
é mais elevada. 
SEVCENKO, N. A corrida para o século XXI: no loop da montanha russa. 
São Paulo: Companhia das Letras, 2001 (adaptado). 
No texto estão apresentadas estratégias empresariais 
no contexto da globalização. Uma consequência social 
derivada dessas estratégias tem sido`,
    alternatives: [
      { id: 'A', type: 'text', value: `o crescimento da carga tributária.` },
      { id: 'B', type: 'text', value: `o aumento da mobilidade ocupacional.` },
      { id: 'C', type: 'text', value: `a redução da competitividade entre as empresas.` },
      { id: 'D', type: 'text', value: `o direcionamento das vendas para os mercados 
regionais.` },
      { id: 'E', type: 'text', value: `a ampliação do poder de planejamento dos 
Estados nacionais.` },
    ],
    correct: 'B',
    explanation: `O texto trata da estratégia de fragmentação empresarial em busca de maiores vantagens e uma consequência social desse processo é a mobilidade ocupacional visto que o avanço dos transportes e comunicações possibilitam a comunicação e as trocas mesmo com a existência de distâncias físicas.`,
    subject: ['soc'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A moderna “conquista da Amazônia” inverteu o eixo 
geográfico da colonização da região. Desde a época 
colonial até meados do século XIX, as correntes principais 
de população movimentaram-se no sentido Leste-Oeste, 
estabelecendo uma ocupação linear articulada. Nas 
últimas décadas, os fluxos migratórios passaram a se 
verificar no sentido Sul-Norte, conectando o Centro-Sul 
à Amazônia. 
OLIC, N. B. Ocupação da Amazônia, uma epopeia inacabada. 
Jornal Mundo , ano 16, n. 4, ago. 2008 (adaptado). 
O primeiro eixo geográfico de ocupação das terras 
amazônicas demonstra um padrão relacionado à 
criação de`,
    alternatives: [
      { id: 'A', type: 'text', value: `núcleos urbanos em áreas litorâneas.` },
      { id: 'B', type: 'text', value: `centros agrícolas modernos no interior.` },
      { id: 'C', type: 'text', value: `vias férreas entre espaços de mineração.` },
      { id: 'D', type: 'text', value: `faixas de povoamento ao longo das estradas.` },
      { id: 'E', type: 'text', value: `povoados interligados próximos a grandes rios.` },
    ],
    correct: 'E',
    explanation: `O texto fala em dois eixos de ocupação da região Amazônica, um primeiro associado à circulação e à ocupação através e próximo aos rios, que ligava a região Nordeste e a região Norte (eixo Leste-Oeste), e um segundo eixo mais contemporâneo no sentido Norte-Sul ligando a região Norte ao Centro-Oeste por conta da expansão da fronteira agrícola da soja.`,
    subject: ['geo'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A experiência que tenho de lidar com aldeias de 
diversas nações me tem feito ver, que nunca índio fez 
grande confiança de branco e, se isto sucede com os que 
estão já civilizados, como não sucederá o mesmo com 
esses que estão ainda brutos. 
NORONHA, M. Carta a J. Caldeira Brant. 2 jan.1751. Apud CHAIM, M. M. 
Aldeamentos indígenas (Goiás: 1749-1811). São Paulo: 
Nobel, Brasília: INL, 1983 (adaptado). 
Em 1749, ao separar-se de São Paulo, a capitania de 
Goiás foi governada por D. Marcos de Noronha, que 
atendeu às diretrizes da política indigenista pombalina 
que incentivava a criação de aldeamentos em função`,
    alternatives: [
      { id: 'A', type: 'text', value: `das constantes rebeliões indígenas contra os brancos 
colonizadores, que ameaçavam a produção de ouro 
nas regiões mineradoras.` },
      { id: 'B', type: 'text', value: `da propagação de doenças originadas do contato 
com os colonizadores, que dizimaram boa parte da 
população indígena.` },
      { id: 'C', type: 'text', value: `do empenho das ordens religiosas em proteger 
o indígena da exploração, o que garantiu a sua 
supremacia na administração colonial.` },
      { id: 'D', type: 'text', value: `da política racista da Coroa Portuguesa, contrária à 
miscigenação, que organizava a sociedade em uma 
hierarquia dominada pelos brancos.` },
      { id: 'E', type: 'text', value: `da necessidade de controle dos brancos sobre a 
população indígena, objetivando sua adaptação às 
exigências do trabalho regular.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A partir dos anos 70, impõe-se um movimento 
de desconcentração da produção industrial, uma das 
manifestações do desdobramento da divisão territorial 
do trabalho no Brasil. A produção industrial torna-se 
mais complexa, estendendo-se, sobretudo, para novas 
áreas do Sul e para alguns pontos do Centro-Oeste, do 
Nordeste e do Norte. 
SANTOS, M.; SILVEIRA, M. L. O Brasil: território e sociedade no início do século XXI. 
Rio de Janeiro: Record, 2002 (fragmento). 
Um fator geográfico que contribui para o tipo de alteração 
da configuração territorial descrito no texto é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Obsolescência dos portos.` },
      { id: 'B', type: 'text', value: `Estatização de empresas.` },
      { id: 'C', type: 'text', value: `Eliminação de incentivos fiscais.` },
      { id: 'D', type: 'text', value: `Ampliação de políticas protecionistas.` },
      { id: 'E', type: 'text', value: `Desenvolvimento dos meios de comunicação.` },
    ],
    correct: 'E',
    explanation: `O avanço das comunicações e dos meios de transporte possibilitou a fragmentação das empresas, que permaneceram com suas sedes nos grandes centros no Sudeste, sobretudo, mas suas unidades de produção foram deslocadas para outras regiões brasileiras com o objetivo de obter isenções fiscais, mão de obra mais barata, entre outros.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `As plataformas ou crátons correspondem aos 
terrenos mais antigos e arrasados por muitas fases 
de erosão. Apresentam uma grande complexidade 
litológica, prevalecendo as rochas metamórficas muito 
antigas (Pré-Cambriano Médio e Inferior). Também 
ocorrem rochas intrusivas antigas e resíduos de rochas 
sedimentares. São três as áreas de plataforma de 
crátons no Brasil: a das Guianas, a Sul-Amazônica e a 
do São Francisco. 
ROSS, J. L. S. Geografia do Brasil . São Paulo: Edusp, 1998. 
As regiões cratônicas das Guianas e a Sul-Amazônica 
têm como arcabouço geológico vastas extensões de 
escudos cristalinos, ricos em minérios, que atraíram 
a ação de empresas nacionais e estrangeiras do 
setor de mineração e destacam-se pela sua história 
geológica por`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresentarem áreas de intrusões graníticas, ricas em 
jazidas minerais (ferro, manganês).` },
      { id: 'B', type: 'text', value: `corresponderem ao principal evento geológico do 
Cenozoico no território brasileiro.` },
      { id: 'C', type: 'text', value: `apresentarem áreas arrasadas pela erosão, que 
originaram a maior planície do país.` },
      { id: 'D', type: 'text', value: `possuírem em sua extensão terrenos cristalinos ricos 
em reservas de petróleo e gás natural.` },
      { id: 'E', type: 'text', value: `serem esculpidas pela ação do intemperismo físico, 
decorrente da variação de temperatura.` },
    ],
    correct: 'A',
    explanation: `Os escudos cristalinos (crátons) são estruturas geológicas muito antigas que datam do Arqueano/Proterozóico. Essas áreas se caracterizam pela formação de minerais metálicos, tais como ferro, ouro e manganês.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A irrigação da agricultura é responsável pelo 
consumo de mais de 2/3 de toda a água retirada dos rios, 
lagos e lençóis freáticos do mundo. Mesmo no Brasil, 
onde achamos que temos muita água, os agricultores 
que tentam produzir alimentos também enfrentam secas 
periódicas e uma competição crescente por água. 
MARAFON, G. J. et al. O desencanto da terra: produção de alimentos, ambiente e sociedade. 
Rio de Janeiro: Garamond, 2011. 
No Brasil, as técnicas de irrigação utilizadas na agricultura 
produziram impactos socioambientais como`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução do custo de produção.` },
      { id: 'B', type: 'text', value: `agravamento da poluição hídrica.` },
      { id: 'C', type: 'text', value: `compactação do material do solo.` },
      { id: 'D', type: 'text', value: `aceleração da fertilização natural.` },
      { id: 'E', type: 'text', value: `redirecionamento dos cursos fluviais.` },
    ],
    correct: 'E',
    explanation: `Pelo elevado volume de água utilizado pela agricultura no Brasil muitas vezes as águas fluviais e dos lençóis freáticos utilizadas para a irrigação nem sempre são suficiente. A consequência disso é que os agricultores em busca de mais volumes de acabam interferindo diretamente nos cursos dos rios acarretando problemas socioambientais como erosão e sedimentação nos cursos fluviais.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
Ao se emanciparem da tutela senhorial, muitos 
camponeses foram desligados legalmente da antiga 
terra. Deveriam pagar, para adquirir propriedade ou 
arrendamento. Por não possuírem recursos, engrossaram 
a camada cada vez maior de jornaleiros e trabalhadores 
volantes, outros, mesmo tendo propriedade sobre um 
pequeno lote, suplementavam sua existência com o 
assalariamento esporádico. 
MACHADO, P. P. Política e colonização no Império . Porto Alegre: EdUFRGS, 1999 (adaptado). 
Texto II 
Com a globalização da economia ampliou-se a 
hegemonia do modelo de desenvolvimento agropecuário, 
com seus padrões tecnológicos, caracterizando o 
agronegócio. Essa nova face da agricultura capitalista 
também mudou a forma de controle e exploração da terra. 
Ampliou-se, assim, a ocupação de áreas agricultáveis e 
as fronteiras agrícolas se estenderam. 
SADER, E.; JINKINGS, I. Enciclopédia Contemporânea da América Latina e do Caribe . 
São Paulo: Boitempo, 2006 (adaptado). 
Os textos demonstram que, tanto na Europa do século XIX 
quanto no contexto latino-americano do século XXI, as 
alterações tecnológicas vivenciadas no campo interferem 
na vida das populações locais, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `induzem os jovens ao estudo nas grandes cidades, 
causando o êxodo rural, uma vez que formados, não 
retornam à sua região de origem.` },
      { id: 'B', type: 'text', value: `impulsionam as populações locais a buscar linhas 
de financiamento estatal com o objetivo de ampliar a 
agricultura familiar, garantindo sua fixação no campo.` },
      { id: 'C', type: 'text', value: `ampliam o protagonismo do Estado, possibilitando 
a grupos econômicos ruralistas produzir e impor 
políticas agrícolas, ampliando o controle que tinham 
dos mercados.` },
      { id: 'D', type: 'text', value: `aumentam a produção e a produtividade de 
determinadas culturas em função da intensificação 
da mecanização, do uso de agrotóxicos e cultivo de 
plantas transgênicas.` },
      { id: 'E', type: 'text', value: `desorganizam o modo tradicional de vida impelindo- 
as à busca por melhores condições no espaço 
urbano ou em outros países em situações muitas 
vezes precárias.` },
    ],
    correct: 'E',
    explanation: `A modernização no campo se deu de forma conservadora, isso quer dizer que ocorreu uma modernização técnica mas as relações no espaço rural não foram alteradas, permanecendo a estrutura de concentração de terras sob domínio da elite ruralista ocasionando a liberação da mão de obra do campo para a cidade, ou seja, o êxodo rural.`,
    subject: ['geo'],
    topics: ['Globalização', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em um engenho sois imitadores de Cristo crucificado 
porque padeceis em um modo muito semelhante o que 
o mesmo Senhor padeceu na sua cruz e em toda a 
sua paixão. A sua cruz foi composta de dois madeiros, 
e a vossa em um engenho é de três. Também ali não 
faltaram as canas, porque duas vezes entraram na 
Paixão: uma vez servindo para o cetro de escárnio, 
e outra vez para a esponja em que lhe deram o fel. A 
Paixão de Cristo parte foi de noite sem dormir, parte foi 
de dia sem descansar, e tais são as vossas noites e os 
vossos dias. Cristo despido, e vós despidos; Cristo sem 
comer, e vós famintos; Cristo em tudo maltratado, e vós 
maltratados em tudo. Os ferros, as prisões, os açoites, as 
chagas, os nomes afrontosos, de tudo isto se compõe a 
vossa imitação, que, se for acompanhada de paciência, 
também terá merecimento de martírio. 
VIEIRA, A. Sermoes . Tomo XI. Porto: Lello & Irmão, 1951 (adaptado). 
O trecho do sermão do Padre Antônio Vieira estabelece 
uma relação entre a Paixão de Cristo e`,
    alternatives: [
      { id: 'A', type: 'text', value: `a atividade dos comerciantes de açúcar nos portos 
brasileiros.` },
      { id: 'B', type: 'text', value: `a função dos mestres de açúcar durante a safra de cana.` },
      { id: 'C', type: 'text', value: `o sofrimento dos jesuítas na conversão dos ameríndios.` },
      { id: 'D', type: 'text', value: `o papel dos senhores na administração dos engenhos.` },
      { id: 'E', type: 'text', value: `o trabalho dos escravos na produção de açúcar.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Fugindo à luta de classes, a nossa organização 
sindical tem sido um instrumento de harmonia e de 
cooperação entre o capital e o trabalho. Não se limitou 
a um sindicalismo puramente “operário”, que conduziria 
certamente a luta contra o “patrão”, como aconteceu com 
outros povos. 
FALCÃO, W. Cartas sindicais. In: Boletim do Ministério do Trabalho, Indústria e Comércio. 
Rio de Janeiro, 10 (85), set. 1941 (adaptado). 
Nesse documento oficial, à época do Estado Novo (1937- 
1945), é apresentada uma concepção de organização 
sindical que`,
    alternatives: [
      { id: 'A', type: 'text', value: `elimina os conflitos no ambiente das fábricas.` },
      { id: 'B', type: 'text', value: `limita os direitos associativos do segmento patronal.` },
      { id: 'C', type: 'text', value: `orienta a busca do consenso entre trabalhadores 
e patrões.` },
      { id: 'D', type: 'text', value: `proíbe o registro de estrangeiros nas entidades 
profissionais do país.` },
      { id: 'E', type: 'text', value: `desobriga o Estado quanto aos direitos e deveres da 
classe trabalhadora.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O uso da água aumenta de acordo com as 
necessidades 
da 
população 
no 
mundo. 
Porém, 
diferentemente do que se possa imaginar, o aumento do 
consumo de água superou em duas vezes o crescimento 
populacional durante o século XX. 
TEIXEIRA, W. et al. Decifrando a Terra . São Paulo: Cia. Editora Nacional, 2009. 
Uma estratégia socioespacial que pode contribuir para 
alterar a lógica de uso da água apresentada no texto é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação de sistemas de reutilização hídrica.` },
      { id: 'B', type: 'text', value: `expansão da irrigação por aspersão das lavouras.` },
      { id: 'C', type: 'text', value: `intensificação do controle do desmatamento de 
florestas.` },
      { id: 'D', type: 'text', value: `adoção de técnicas tradicionais de produção.` },
      { id: 'E', type: 'text', value: `criação de incentivos fiscais para o cultivo de 
produtos orgânicos.` },
    ],
    correct: 'A',
    explanation: `Uma forma de diminuir o gasto de água, uma vez que esse uso tem superado a oferta do recurso, é a reutilização dos recursos hídricos, tanto em domicílios, indústrias e na agricultura, dando mais de um uso e assim contribuindo para a diminuição do consumo, alinhando oferta e demanda.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Minha vida é andar 
Por esse país 
Pra ver se um dia 
Descanso feliz 
Guardando as recordações 
Das terras onde passei 
Andando pelos sertões 
E dos amigos que lá deixei 
GONZAGA, L.; CORDOVIL. H. A vida de viajante, 1953. Disponível em: www.recife.pe.gov.br. 
Acesso em: 20 fev. 2012 (fragmento). 
A letra dessa canção reflete elementos identitários que 
representam a`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorização das características naturais do Sertão 
nordestino.` },
      { id: 'B', type: 'text', value: `denúncia da precariedade social provocada pela seca.` },
      { id: 'C', type: 'text', value: `experiência de deslocamento vivenciada pelo migrante.` },
      { id: 'D', type: 'text', value: `profunda desigualdade social entre as regiões 
brasileiras.` },
      { id: 'E', type: 'text', value: `discriminação 
dos 
nordestinos 
nos 
grandes 
centros urbanos.` },
    ],
    correct: 'C',
    explanation: `A música destaca as experiências de um migrante pelo Brasil que marcam um deslocamento motivado por fatores de repulsão e de atração.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Próximo da Igreja dedicada a São Gonçalo nos 
deparamos com uma impressionante multidão que 
dançava ao som de suas violas. Tão logo viram o Vice- 
Rei, cercaram-no e o obrigaram a dançar e pular, exercício 
violento e pouco apropriado tanto para sua idade quanto 
posição. Tivemos nós mesmos que entrar na dança, 
por bem ou por mal, e não deixou de ser interessante 
ver numa igreja padres, mulheres, frades, cavalheiros e 
escravos a dançar e pular misturados, e a gritar a plenos 
pulmões “Viva São Gonçalo do Amarante”. 
Barbinais, Le Gentil. Noveau Voyage autour du monde. Apud: TINHORÃO, J. R. 
As festas no Brasil Colonial. São Paulo: Ed. 34, 2000 (adaptado) . 
O viajante francês, ao descrever suas impressões sobre 
uma festa ocorrida em Salvador, em 1717, demonstra 
dificuldade 
em 
entendê-la, 
porque, 
como 
outras 
manifestações religiosas do período colonial, ela`,
    alternatives: [
      { id: 'A', type: 'text', value: `seguia os preceitos advindos da hierarquia 
católica romana.` },
      { id: 'B', type: 'text', value: `demarcava a submissão do povo à autoridade 
constituída.` },
      { id: 'C', type: 'text', value: `definia o pertencimento dos padres às camadas 
populares.` },
      { id: 'D', type: 'text', value: `afirmava um sentido comunitário de partilha da 
devoção.` },
      { id: 'E', type: 'text', value: `harmonizava as relações sociais entre escravos 
e senhores.` },
    ],
    correct: 'D',
    explanation: `Por mais que pareça algo contrário ao sentido exploratório do Brasil Colônia as devoções e manifestações religiosas tinham por muitas vezes um caráter interativo e popular. Isso evidencia o sincretismo religioso e deixa claro a intensão da inserção de novos fiéis por parte da igreja católica. Todo esse cenário impactou o viajante francês, pois, este tipo de interação não era comum na Europa.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://nutriteengv.blogspot.com.br. Acesso em: 28 dez. 2011. 
Na charge faz-se referência a uma modificação produtiva 
ocorrida na agricultura. Uma contradição presente no 
espaço rural brasileiro derivada dessa modificação 
produtiva está presente em:`,
    images: ['/enem/2012/images/enem_2012_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Expansão das terras agricultáveis, com manutenção 
de desigualdades sociais.` },
      { id: 'B', type: 'text', value: `Modernização técnica do território, com redução do 
nível de emprego formal.` },
      { id: 'C', type: 'text', value: `Valorização de atividades de subsistência, com 
redução da produtividade da terra.` },
      { id: 'D', type: 'text', value: `Desenvolvimento de núcleos policultores, com 
ampliação da concentração fundiária.` },
      { id: 'E', type: 'text', value: `Melhora da qualidade dos produtos, com retração na exportação de produtos primários.` },
    ],
    correct: 'A',
    explanation: `A contradição é que o espaço rural brasileiro passou pela chamada modernização conservadora, em que a produção de modernizou com a introdução de novas tecnologia, contudo as relações sociais ali estabelecidas permaneceram inalteradas, permanecendo assim o quadro de desigualdades social.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para diminuir o acúmulo de lixo e o desperdício 
de materiais de valor econômico e, assim, reduzir a 
exploração de recursos naturais, adotou-se, em escala 
internacional, a política dos três erres: Redução, 
Reutilização e Reciclagem. 
Um exemplo de reciclagem é a utilização de`,
    alternatives: [
      { id: 'A', type: 'text', value: `garrafas de vidro retornáveis para cerveja ou 
refrigerante.` },
      { id: 'B', type: 'text', value: `latas de alumínio como material para fabricação de 
lingotes.` },
      { id: 'C', type: 'text', value: `sacos 
plásticos 
de 
supermercado 
como 
acondicionantes de lixo caseiro.` },
      { id: 'D', type: 'text', value: `embalagens 
plásticas 
vazias 
e 
limpas 
para 
acondicionar outros alimentos.` },
      { id: 'E', type: 'text', value: `garrafas PET recortadas em tiras para fabricação de 
cerdas de vassouras.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Um dos problemas ambientais vivenciados pela 
agricultura hoje em dia é a compactação do solo, devida 
ao intenso tráfego de máquinas cada vez mais pesadas, 
reduzindo a produtividade das culturas. 
Uma das formas de prevenir o problema de compactação 
do solo é substituir os pneus dos tratores por pneus mais`,
    alternatives: [
      { id: 'A', type: 'text', value: `largos, reduzindo a pressão sobre o solo.` },
      { id: 'B', type: 'text', value: `estreitos, reduzindo a pressão sobre o solo.` },
      { id: 'C', type: 'text', value: `largos, aumentando a pressão sobre o solo.` },
      { id: 'D', type: 'text', value: `estreitos, aumentando a pressão sobre o solo.` },
      { id: 'E', type: 'text', value: `altos, reduzindo a pressão sobre o solo.` },
    ],
    correct: 'A',
    explanation: `Sabemos que a pressão pode ser descrita como a razão entre a intensidade da força normal aplicada e a area de contato com o solo. Pressão=Força normal/Área Logo, para reduzir a pressão, devemos ou dimunir a Força normal ou aumentar a Área.`,
    subject: ['bio'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O milho transgênico é produzido a partir da 
manipulação do milho original, com a transferência, 
para este, de um gene de interesse retirado de outro 
organismo de espécie diferente. 
A característica de interesse será manifestada em 
decorrência`,
    alternatives: [
      { id: 'A', type: 'text', value: `do incremento do DNA a partir da duplicação do gene 
transferido.` },
      { id: 'B', type: 'text', value: `da transcrição do RNA transportador a partir do gene 
transferido.` },
      { id: 'C', type: 'text', value: `da expressão de proteínas sintetizadas a partir do 
DNA não hibridizado.` },
      { id: 'D', type: 'text', value: `da síntese de carboidratos a partir da ativação do 
DNA do milho original.` },
      { id: 'E', type: 'text', value: `da tradução do RNA mensageiro sintetizado a partir 
do DNA recombinante.` },
    ],
    correct: 'E',
    explanation: `A expressão do DNA recombinante se dá através da tradução do RNA mensageiro sintetizado a partir do próprio, ou seja, é necessário que haja tradução da fita de RNA para que a característica se manifeste.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A produção mundial de alimentos poderia se 
reduzir a 40% da atual sem a aplicação de controle 
sobre as pragas agrícolas. Por outro lado, o uso 
frequente dos agrotóxicos pode causar contaminação 
em solos, águas superficiais e subterrâneas, atmosfera 
e alimentos. Os biopesticidas, tais como a piretrina e 
a coronopilina, têm sido uma alternativa na diminuição 
dos prejuízos econômicos, sociais e ambientais 
gerados pelos agrotóxicos. 
Piretrina 
Coronopilina 
Identifique 
as 
funções 
orgânicas 
presentes 
simultaneamente nas estruturas dos dois biopesticidas 
apresentados:`,
    images: ['/enem/2012/images/enem_2012_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Éter e éster.` },
      { id: 'B', type: 'text', value: `Cetona e éster.` },
      { id: 'C', type: 'text', value: `Álcool e cetona.` },
      { id: 'D', type: 'text', value: `Aldeído e cetona.` },
      { id: 'E', type: 'text', value: `Éter e ácido carboxílico.` },
    ],
    correct: 'B',
    explanation: `Carbono secundário ligado por uma dupla a uma hidroxila(caracteriza uma cetona) está presente nos dois compostos. Na Piretrina identificamos uma carbonila de éster em cadeia aberta e Coronopilina, a mesma carbonila, em cadeia fechada.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os carrinhos de brinquedo podem ser de vários tipos. 
Dentre eles, há os movidos a corda, em que uma mola 
em seu interior é comprimida quando a criança puxa o 
carrinho para trás. Ao ser solto, o carrinho entra em 
movimento enquanto a mola volta à sua forma inicial. 
O processo de conversão de energia que ocorre no 
carrinho descrito também é verificado em`,
    alternatives: [
      { id: 'A', type: 'text', value: `um dínamo.` },
      { id: 'B', type: 'text', value: `um freio de automóvel.` },
      { id: 'C', type: 'text', value: `um motor a combustão.` },
      { id: 'D', type: 'text', value: `uma usina hidroelétrica.` },
      { id: 'E', type: 'text', value: `uma atiradeira (estilingue).` },
    ],
    correct: 'E',
    explanation: `A energia que é armazenada por uma mola ou estilingue é a energia potencial elástica, que será transformada em energia cinética no momento que o objeto for lançado.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Pesticidas 
são 
contaminantes 
ambientais 
altamente tóxicos aos seres vivos e, geralmente, 
com grande persistência ambiental. A busca por 
novas formas de eliminação dos pesticidas tem 
aumentado nos últimos anos, uma vez que as 
técnicas atuais são economicamente dispendiosas e 
paliativas. A biorremediação de pesticidas utilizando 
microrganismos tem se mostrado uma técnica muito 
promissora para essa finalidade, por apresentar 
vantagens econômicas e ambientais. 
Para ser utilizado nesta técnica promissora, um 
microrganismo deve ser capaz de`,
    alternatives: [
      { id: 'A', type: 'text', value: `transferir o contaminante do solo para a água.` },
      { id: 'B', type: 'text', value: `absorver o contaminante sem alterá-lo quimicamente.` },
      { id: 'C', type: 'text', value: `apresentar alta taxa de mutação ao longo das gerações.` },
      { id: 'D', type: 'text', value: `estimular o sistema imunológico do homem contra o 
contaminante.` },
      { id: 'E', type: 'text', value: `metabolizar o contaminante, liberando subprodutos 
menos tóxicos ou atóxicos.` },
    ],
    correct: 'E',
    explanation: `Para que essa biorremediação tenha efeito, sendo capaz de mitigar danos ecológicos e à saúde do homem, é necessário que os organismos empregados sejam capazes de metabolizar o agente contaminante, eliminando sua toxicidade ou, no mínimo, tornar o composto menos tóxico, transformando-o quimicamente.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Medidas de saneamento básico são fundamentais 
no processo de promoção de saúde e qualidade de vida 
da população. Muitas vezes, a falta de saneamento está 
relacionada com o aparecimento de várias doenças. 
Nesse contexto, um paciente dá entrada em um pronto 
atendimento relatando que há 30 dias teve contato com 
águas de enchente. Ainda informa que nesta localidade 
não há rede de esgoto e drenagem de águas pluviais e que 
a coleta de lixo é inadequada. Ele apresenta os seguintes 
sintomas: febre, dor de cabeça e dores musculares. 
Disponível em: http://portal.saude.gov.br. Acesso em: 27 fev. 2012 (adaptado). 
Relacionando os sintomas apresentados com as 
condições sanitárias da localidade, há indicações de que 
o paciente apresenta um caso de`,
    alternatives: [
      { id: 'A', type: 'text', value: `difteria.` },
      { id: 'B', type: 'text', value: `botulismo.` },
      { id: 'C', type: 'text', value: `tuberculose.` },
      { id: 'D', type: 'text', value: `leptospirose.` },
      { id: 'E', type: 'text', value: `meningite meningocócica.` },
    ],
    correct: 'D',
    explanation: `A coleta inadequada de lixo é um fator de risco para a proliferação de ratos, os principais portadores da bactéria do Gênero Leptospira, causadora da leptospirose. Em épocas de enchente, a bactéria pode ser carregada pela água, potencialmente entrando em contato com seres humanos.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O rótulo de um desodorante aerossol informa ao 
consumidor que o produto possui em sua composição 
os gases isobutano, butano e propano, dentre outras 
substâncias. Além dessa informação, o rótulo traz, ainda, 
a inscrição “Não contém CFC”. As reações a seguir, que 
ocorrem na estratosfera, justificam a não utilização de 
CFC (clorofluorcarbono ou Freon) nesse desodorante: 
 I) CF₂Cℓ₂ --UV--> CF₂Cℓ + Cℓ
II) Cℓ + O₃ --> O₂ + CℓO
A preocupação com as possíveis ameaças à camada 
de ozônio (O₃ ) baseia-se na sua principal função: proteger 
a matéria viva na Terra dos efeitos prejudiciais dos raios 
solares ultravioleta. A absorção da radiação ultravioleta 
pelo ozônio estratosférico é intensa o suficiente para 
eliminar boa parte da fração de ultravioleta que é 
prejudicial à vida. 
A finalidade da utilização dos gases isobutano, butano e 
propano neste aerossol é`,
    alternatives: [
      { id: 'A', type: 'text', value: `substituir o CFC, pois não reagem com o ozônio, 
servindo como gases propelentes em aerossóis.` },
      { id: 'B', type: 'text', value: `servir como propelentes, pois, como são muito 
reativos, capturam o Freon existente livre na 
atmosfera, impedindo a destruição do ozônio.` },
      { id: 'C', type: 'text', value: `reagir com o ar, pois se decompõem espontaneamente 
em dióxido de carbono (CO₂ ) e água (H₂ O), que não 
atacam o ozônio.` },
      { id: 'D', type: 'text', value: `impedir a destruição do ozônio pelo CFC, pois os 
hidrocarbonetos gasosos reagem com a radiação UV, 
liberando hidrogênio (H₂ ), que reage com o oxigênio 
do ar (O₂ ), formando água (H₂ O).` },
      { id: 'E', type: 'text', value: `destruir o CFC, pois reagem com a radiação UV, 
liberando carbono (C), que reage com o oxigênio do 
ar (O₂ ), formando dióxido de carbono (CO₂ ), que é 
inofensivo para a camada de ozônio.` },
    ],
    correct: 'A',
    explanation: `A absorção de radiação ultra violeta pelo CFC causa uma cisão homolítica na molécula produzindo íons cloro, que por sua vez, reagem com o O₃ da camada de ozônio, causando a diminuição da espessura, o que é muito prejudicial ao meio ambiente. A substituição do CFC pelos gases isobutano, butano e propano se faz necessária, pois são inertes a essa reação.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em um dia de chuva muito forte, constatou-se 
uma goteira sobre o centro de uma piscina coberta, 
formando um padrão de ondas circulares. Nessa 
situação, observou-se que caíam duas gotas a cada 
segundo. A distância entre duas cristas consecutivas 
era de 25 cm e cada uma delas se aproximava da 
borda da piscina com velocidade de 1,0 m/s. Após 
algum tempo a chuva diminuiu e a goteira passou a 
cair uma vez por segundo. 
Com a diminuição da chuva, a distância entre as cristas 
e a velocidade de propagação da onda se tornaram, 
respectivamemente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior que 25 cm e maior que 1,0 m/s.` },
      { id: 'B', type: 'text', value: `maior que 25 cm e igual a 1,0 m/s.` },
      { id: 'C', type: 'text', value: `menor que 25 cm e menor que 1,0 m/s.` },
      { id: 'D', type: 'text', value: `menor que 25 cm e igual a 1,0 m/s.` },
      { id: 'E', type: 'text', value: `igual a 25 cm e igual a 1,0 m/s.` },
    ],
    correct: 'B',
    explanation: `Inicialmente, podemos descrever uma equação que relaciona a velocidade, comprimento de onda e frequência da seguinte forma: V=λ.f=constante Já que a velocidade é constante, por que ela depende de alterações no meio para mudar o valor, podemos concluir que se ocorrer uma diminuição na frequência, o comprimento de onda deve aumentar proporcionalmente para manter a relação. Logo, o comprimento precisa ser maior que 25 cm. Os valores citados no enunciado para frequência, comprimento de onda e velocidade não batem na relação, trazendo um problema para a questão. Observe: f 1 =2 Hz λ=0,25m V=2.0,25=0,5 m/s. Esse valor não bate com o valor informado de 1 m/s. Logo, essa parte da questão ficou sem uma forma clara de identificar.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O mecanismo que permite articular uma porta (de 
um móvel ou de acesso) é a dobradiça. Normalmente, 
são necessárias duas ou mais dobradiças para que a 
porta seja fixada no móvel ou no portal, permanecendo 
em equilíbrio e podendo ser articulada com facilidade. 
No plano, o diagrama vetorial das forças que as 
dobradiças exercem na porta está representado em`,
    images: ['/enem/2012/images/enem_2012_d1_q55_A.jpg', '/enem/2012/images/enem_2012_d1_q55_B.jpg', '/enem/2012/images/enem_2012_d1_q55_C.jpg', '/enem/2012/images/enem_2012_d1_q55_D.jpg', '/enem/2012/images/enem_2012_d1_q55_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `A porta tende a girar para o sentido horário, ao fazer isso, a porta irá prover uma tração, horizontal, na dobradiça superior e comprimir a inferior. Pelas leis de newton, essas dobradiças reagem na porta com uma força F h1 para a superior e F h2 para a inferior. Alem disso, temos também componentes de forças verticais que chamaremos de F v1 e F v2 , respectivamente, que juntas anulam a força peso da porta. Logo, temos que: F R1 =F h1 +F v2 F R2 =F h2 +F v2 Sendo todos esses vetores. Pela direção desses vetores, podemos constar que a F R1 é uma força que aponta para a diagonal superior esquerda enquanto a F R2 aponta para a diagonal superior direita.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A figura representa um dos modelos de um 
sistema de interações entre seres vivos. Ela apresenta 
duas propriedades, P 1 e P 2 , que interagem em I , para 
afetar uma terceira propriedade, P 3 , quando o sistema 
é alimentado por uma fonte de energia, E. Essa 
figura pode simular um sistema de campo em que P 1 
representa as plantas verdes; P 2 um animal herbívoro 
e P 3 , um animal onívoro. 
ODUM, E. P. Ecologia . Rio de Janeiro: Guanabara Koogan, 1988. 
A função interativa I representa a proporção de`,
    images: ['/enem/2012/images/enem_2012_d1_q56.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `herbivoria entre P 1 e P 2 .` },
      { id: 'B', type: 'text', value: `polinização entre P 1 e P 2 .` },
      { id: 'C', type: 'text', value: `P 3 utilizada na alimentação de P 1 e P 2 .` },
      { id: 'D', type: 'text', value: `P 1 ou P 2 utilizada na alimentação de P 3 .` },
      { id: 'E', type: 'text', value: `energia de P 1 e de P 2 que saem do sistema.` },
    ],
    correct: 'D',
    explanation: `A função I representa uma relação alimentar do animal P3, que é um animal onívoro, já que se pode observar junção de P1 (produtor) e P2 (herbívoro). P1 é um produtor, provavelmente uma planta, já que há um fluxo (F2) de P1 para P2, o mesmo que há entre I e P3 (F5). P2 é um animal, já que depende do fluxo F2 vindo de P1. O E trata-se da energia que é absorvida por P1 na produção de matéria orgânica (fotossíntese), sendo a transferência representada por F1.`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Muitas 
espécies 
de 
plantas 
lenhosas 
são 
encontradas no cerrado brasileiro. Para a sobrevivência 
nas condições de longos períodos de seca e queimadas 
periódicas, próprias desse ecossistema, essas plantas 
desenvolveram estruturas muito peculiares. 
As estruturas adaptativas mais apropriadas para a 
sobrevivência desse grupo de plantas nas condições 
ambientais do referido ecossistema são:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Cascas finas e sem sulcos ou fendas.` },
      { id: 'B', type: 'text', value: `Caules estreitos e retilíneos.` },
      { id: 'C', type: 'text', value: `Folhas estreitas e membranosas.` },
      { id: 'D', type: 'text', value: `Gemas apicais com densa pilosidade.` },
      { id: 'E', type: 'text', value: `Raízes superficiais, em geral, aéreas.` },
    ],
    correct: 'D',
    explanation: `A alta pilosidade protege as gemas apicais contra o fogo. Queimadas são comuns no Cerrado, e as plantas são adaptadas a esse ambiente. Se ocorrer uma queimada, os pelos queimam, mas não a gema apical, que permanece intacta.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A própolis é um produto natural conhecido por suas 
propriedades anti-inflamatórias e cicatrizantes. Esse 
material contém mais de 200 compostos identificados até 
o momento. Dentre eles, alguns são de estrutura simples, 
como é o caso do C₆H₅CO₂CH₂CH₃, cuja estrutura está
mostrada a seguir. 
O 
C O 
CH₂ CH₃ 
O ácido carboxílico e o álcool capazes de produzir o 
éster em apreço por meio da reação de esterificação são, 
respectivamente,`,
    images: ['/enem/2012/images/enem_2012_d1_q58.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ácido benzoico e etanol.` },
      { id: 'B', type: 'text', value: `ácido propanoico e hexanol.` },
      { id: 'C', type: 'text', value: `ácido fenilacético e metanol.` },
      { id: 'D', type: 'text', value: `ácido propiônico e cicloexanol.` },
      { id: 'E', type: 'text', value: `ácido acético e álcool benzílico.` },
    ],
    correct: 'A',
    explanation: `Reações de esterificação tem como produtos éster e água. Ao fazer uma quebra da ligação O-CH₂ CH₃ do éster dado na questão e acrescentar o íons H + e o íon OH &#8211; , provenientes da água, ao &#8220;O&#8221; e ao &#8220;CH₂ CH₃ &#8221; respectivamente, formará o ácido benzóico e etanol.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `No Japão, um movimento nacional para a promoção da 
luta contra o aquecimento global leva o slogan : 1 pessoa, 
1 dia, 1 kg de CO₂ a menos! A ideia é cada pessoa reduzir 
em 1 kg a quantidade de CO₂ emitida todo dia, por meio de 
pequenos gestos ecológicos, como diminuir a queima de 
gás de cozinha. 
Um hambúrguer ecológico? É pra já! Disponível em: http://lqes.iqm.unicamp.br. 
Acesso em: 24 fev. 2012 (adaptado). 
Considerando um processo de combustão completa de 
um gás de cozinha composto exclusivamente por butano 
(C₄ H₁₀ ), a mínima quantidade desse gás que um japonês 
deve deixar de queimar para atender à meta diária, 
apenas com esse gesto, é de 
Dados: CO₂ (44 g/mol); C₄ H₁₀ (58 g/mol)`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,25 kg.` },
      { id: 'B', type: 'text', value: `0,33 kg.` },
      { id: 'C', type: 'text', value: `1,0 kg.` },
      { id: 'D', type: 'text', value: `1,3 kg.` },
      { id: 'E', type: 'text', value: `3,0 kg.` },
    ],
    correct: 'B',
    explanation: `Montando e balanceando a reação de combustão do butano: C₄H₁₀ + 13/2 O₂ -> 4 CO₂ + 5 H₂O Percebe-se que a relação de butano para CO₂ emitido é de 1:4. Aplicando uma regra de três envolvendo as massas molares proporcionais aos coeficientes estequiométricos do butano e no gás carbônico, temos: 0,058 Kg &#8212;- 4&#215;0,044 Kg X &#8212;- 1 Kg X= 0,329 Kg ou aproximadamente 0,33 Kg`,
    subject: ['qui'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para melhorar a mobilidade urbana na rede metroviária é necessário minimizar o tempo entre estacoes. Para isso 
a administração do metrô de uma grande cidade adotou o seguinte procedimento entre duas estacoes: a locomotiva 
parte do repouso com aceleração constante por um terço do tempo de percurso, mantêm a velocidade constante por 
outro terço e reduz sua velocidade com desaceleração constante no trecho final, ate parar. 
Qual é o gráfico de posição (eixo vertical) em função do tempo (eixo horizontal) que representa o movimento 
desse trem? 
posição`,
    images: ['/enem/2012/images/enem_2012_d1_q60_A.jpg', '/enem/2012/images/enem_2012_d1_q60_B.jpg', '/enem/2012/images/enem_2012_d1_q60_C.jpg', '/enem/2012/images/enem_2012_d1_q60_D.jpg', '/enem/2012/images/enem_2012_d1_q60_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `Vamos dividir o gráfico em 3 partes: 1° parte: Inicialmente o enunciado diz: &#8220;a locomotiva parte do repouso com aceleração constante por um terço do tempo de percurso&#8221;. Logo o movimento é uniformemente acelerado, como temos um gráfico de posição x tempo nas alternativas, devemos usar a equação correspondente(S=S 0 +V 0 .t+a.t 2 /2), que é uma equação do 2° grau. Então teremos a forma de um arco de parábolas nessa parte. 2° parte:Em seguida o enunciado diz: &#8220;mantém a velocidade constante por outro terço&#8221;. Nesse caso, temos um movimento uniforme, onde a equação que descreve esse movimento (S=S 0 +v.t) é uma equação do 1° grau. Então teremos a forma crescente uniforme. 3° parte: Por fim o enunciado diz: &#8220;reduz sua velocidade com desaceleração constante no trecho final, até parar.&#8221;. Já que a velocidade esta variando, voltamos para a situação de um movimento uniformemente acelerado, porem, ele é retardado (a velocidade diminui). Fazendo uso da mesma equação da 1° parte (mas para o caso retardado). Porem, quando o trem para, a o gráfico ficará constante já que a posição não muda com o tempo.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A eficiência das lâmpadas pode ser comparada 
utilizando a razão, considerada linear, entre a quantidade 
de luz produzida e o consumo. A quantidade de luz é 
medida pelo fluxo luminoso, cuja unidade é o lúmen (lm). 
O consumo está relacionado à potência elétrica da 
lâmpada que é medida em watt (W). Por exemplo, 
uma lâmpada incandescente de 40 W emite cerca de 
600 lm, enquanto uma lâmpada fluorescente de 40 W 
emite cerca de 3 000 lm. 
Disponível em: http://tecnologia.terra.com.br. Acesso em: 29 fev. 2012 (adaptado). 
A eficiência de uma lâmpada incandescente de 40 W é`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior que a de uma lâmpada fluorescente de 8 W, 
que produz menor quantidade de luz.` },
      { id: 'B', type: 'text', value: `maior que a de uma lâmpada fluorescente de 40 W, 
que produz menor quantidade de luz.` },
      { id: 'C', type: 'text', value: `menor que a de uma lâmpada fluorescente de 8 W, 
que produz a mesma quantidade de luz.` },
      { id: 'D', type: 'text', value: `menor que a de uma lâmpada fluorescente de 40 W, 
pois consome maior quantidade de energia.` },
      { id: 'E', type: 'text', value: `igual a de uma lâmpada fluorescente de 40 W, que 
consome a mesma quantidade de energia.` },
    ],
    correct: 'C',
    explanation: `Podemos definir a eficiência de algo como a razão entre a quantidade de produção pela quantidade de gasto. Logo, para esse caso, temos: Eficiência(ε) = Quantidade de luz produzida (Q)/energia elétrica consumida (E) A energia elétrica pode ser decomposta como o produto entre a potência pelo intervalo de tempo. Logo: ε=Q/Pot.t Para a lâmpada de 40W do enunciado: ε 1 =600lm/40.t Fazendo o test, usando essa relação, em todas as alternativas, encontramos apenas uma verdadeira: c) lampada de 8W ε 2 =600lm/8.t Logo, ε 1 2`,
    subject: ['fis'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Não é de hoje que o homem cria, artificialmente, 
variedades de peixes por meio da hibridação. Esta é uma 
técnica muito usada pelos cientistas e pelos piscicultores 
porque os híbridos resultantes, em geral, apresentam 
maior valor comercial do que a média de ambas as 
espécies parentais, além de reduzir a sobrepesca no 
ambiente natural. 
Terra da Gente , ano 4, n. 47, mar. 2008 (adaptado). 
Sem controle, esses animais podem invadir rios e lagos 
naturais, se reproduzir e`,
    alternatives: [
      { id: 'A', type: 'text', value: `originar uma nova espécie poliploide.` },
      { id: 'B', type: 'text', value: `substituir geneticamente a espécie natural.` },
      { id: 'C', type: 'text', value: `ocupar o primeiro nível trófico no hábitat aquático.` },
      { id: 'D', type: 'text', value: `impedir a interação biológica entre as espécies parentais.` },
      { id: 'E', type: 'text', value: `produzir descendentes com o código genético modificado.` },
    ],
    correct: 'B',
    explanation: `Se estes animais invadirem o meio natural, eles podem levar vantagem na competição por recursos, reproduzindo-se excessivamente e excluindo a espécie nativa, substituindo-a geneticamente.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Há milhares de anos o homem faz uso da 
biotecnologia para a produção de alimentos como 
pães, cervejas e vinhos. Na fabricação de pães, por 
exemplo, são usados fungos unicelulares, chamados 
de leveduras, que são comercializados como fermento 
biológico. Eles são usados para promover o crescimento 
da massa, deixando-a leve e macia. 
O crescimento da massa do pão pelo processo citado é 
resultante da`,
    alternatives: [
      { id: 'A', type: 'text', value: `liberação de gás carbônico.` },
      { id: 'B', type: 'text', value: `formação de ácido lático.` },
      { id: 'C', type: 'text', value: `formação de água.` },
      { id: 'D', type: 'text', value: `produção de ATP.` },
      { id: 'E', type: 'text', value: `liberação de calor.` },
    ],
    correct: 'A',
    explanation: `No processo de fermentação alcoólica realizado pelas leveduras, há liberação de etanol e CO 2 , e é essa liberação de CO 2 que faz com que a massa cresça.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Alguns povos indígenas ainda preservam suas 
tradições realizando a pesca com lanças, demonstrando 
uma notável habilidade. Para fisgar um peixe em um 
lago com águas tranquilas o índio deve mirar abaixo da 
posição em que enxerga o peixe. 
Ele deve proceder dessa forma porque os raios de luz`,
    alternatives: [
      { id: 'A', type: 'text', value: `refletidos pelo peixe não descrevem uma trajetória 
retilínea no interior da água.` },
      { id: 'B', type: 'text', value: `emitidos pelos olhos do índio desviam sua trajetória 
quando passam do ar para a água.` },
      { id: 'C', type: 'text', value: `espalhados pelo peixe são refletidos pela superfície 
da água.` },
      { id: 'D', type: 'text', value: `emitidos pelos olhos do índio são espalhados pela 
superfície da água.` },
      { id: 'E', type: 'text', value: `refletidos pelo peixe desviam sua trajetória quando 
passam da água para o ar.` },
    ],
    correct: 'E',
    explanation: `A mudança de meio sofrido pela luz modifica a sua trajetória em um efeito chamado de refração. Esse efeito faz com que o Índio não enxergue a posição real do peixe, logo, tendo uma imagem virtual, a uma profundidade menor que a real.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os 
vegetais 
biossintetizam 
determinadas 
substâncias (por exemplo, alcaloides e flavonoides), cuja 
estrutura química e concentração variam num mesmo 
organismo em diferentes épocas do ano e estágios 
de desenvolvimento. Muitas dessas substâncias são 
produzidas para a adaptação do organismo às variações 
ambientais 
(radiação 
UV, 
temperatura, 
parasitas, 
herbívoros, estímulo a polinizadores etc.) ou fisiológicas 
(crescimento, envelhecimento etc.). 
As variações qualitativa e quantitativa na produção 
dessas substâncias durante um ano são possíveis porque 
o material genético do indivíduo`,
    alternatives: [
      { id: 'A', type: 'text', value: `sofre constantes recombinações para adaptar-se.` },
      { id: 'B', type: 'text', value: `muda ao longo do ano e em diferentes fases da vida.` },
      { id: 'C', type: 'text', value: `cria novos genes para biossíntese de substâncias 
específicas.` },
      { id: 'D', type: 'text', value: `altera a sequência de bases nitrogenadas para criar 
novas substâncias.` },
      { id: 'E', type: 'text', value: `possui genes transcritos diferentemente de acordo 
com cada necessidade.` },
    ],
    correct: 'E',
    explanation: `O material genético não vai se alterando ao longo da vida para se adequar às necessidades do indivíduo, o meio não age como um agente modificador dos organismos. A produção de diferentes compostos para diferentes necessidades se dá pela transcrição de diferentes segmentos do DNA já presentes no organismo de acordo com a necessidade.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O benzeno é um hidrocarboneto aromático presente 
no petróleo, no carvão e em condensados de gás natural. 
Seus metabólitos são altamente tóxicos e se depositam 
na medula óssea e nos tecidos gordurosos. O limite de 
exposição pode causar anemia, câncer (leucemia) e 
distúrbios do comportamento. Em termos de reatividade 
química, quando um eletrófilo se liga ao benzeno, ocorre 
a formação de um intermediário, o carbocátion. Por fim, 
ocorre a adição ou substituição eletrofílica. 
 Disponível em: www.sindipetro.org.br. Acesso em: 1 mar. 2012 (adaptado). 
Energia Livre 
carbocátion (I) 
produto (II) 
produto (III) 
Br₂ 
catalisador 
+ 
+ 
Progresso da Reação 
Disponível em: www.qmc.ufsc.br. Acesso em: 1 mar. 2012 (adaptado). 
Com base no texto e no gráfico do progresso da reação 
apresentada, as estruturas químicas encontradas em 
I, II e III são, respectivamente: 
H 
Br 
H 
+ 
Br 
Br`,
    images: ['/enem/2012/images/enem_2012_d1_q66.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `É possível perceber que se trata de uma reação de adição e substituição de haletos em compostos aromáticos. Podemos fazer duas observações: 1ª) O carbocátion tem que estar vizinho ao carbono que irá entrar o bromo 2ª) Existe um produto majoritário(mais estável) e um minoritário(menos estável). Onde o majoritário será o composto com a adição dos dois átomos de bromo mostrados no reagente(reação de adição eletrofílica) e o minoritário será o produto de uma reação de substituição eletrofílica`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O manual que acompanha uma ducha higiênica 
informa que a pressão mínima da água para o seu 
funcionamento apropriado é de 20 kPa. A figura mostra a 
instalação hidráulica com a caixa d’água e o cano ao qual 
deve ser conectada a ducha. 
CAIXA 
D’ÁGUA 
O valor da pressão da água na ducha está associado 
à altura`,
    images: ['/enem/2012/images/enem_2012_d1_q67.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `h1.` },
      { id: 'B', type: 'text', value: `h2.` },
      { id: 'C', type: 'text', value: `h3.` },
      { id: 'D', type: 'text', value: `h4.` },
      { id: 'E', type: 'text', value: `h5.` },
    ],
    correct: 'C',
    explanation: `Fazendo uso da Lei de Stevin, temos que: Δp=µ água .g.h Podemos observar que quanto maior a altura, maior a diferença de pressão. Só que essa altura precisa ser medida entre o ponto de saída da água e o ponto onde fica localizado a superfície livre, que nesse caso, seria a caixa d&#8217;água. Logo, a maior altura seguindo essa ideia seria a altura h 3`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O menor tamanduá do mundo é solitário e tem 
hábitos noturnos, passa o dia repousando, geralmente 
em um emaranhado de cipós, com o corpo curvado 
de tal maneira que forma uma bola. Quando em 
atividade, se locomove vagarosamente e emite som 
semelhante a um assobio. A cada gestação, gera um 
único filhote. A cria é deixada em uma árvore à noite 
e é amamentada pela mãe até que tenha idade para 
procurar alimento. As fêmeas adultas têm territórios 
grandes e o território de um macho inclui o de várias 
fêmeas, o que significa que ele tem sempre diversas 
pretendentes à disposição para namorar! 
Ciência Hoje das Crianças , ano 19, n. 174, nov. 2006 (adaptado). 
Essa descrição sobre o tamanduá diz respeito ao seu`,
    alternatives: [
      { id: 'A', type: 'text', value: `hábitat.` },
      { id: 'B', type: 'text', value: `biótopo.` },
      { id: 'C', type: 'text', value: `nível trófico.` },
      { id: 'D', type: 'text', value: `nicho ecológico.` },
      { id: 'E', type: 'text', value: `potencial biótico.` },
    ],
    correct: 'D',
    explanation: `A descrição fala sobre os hábitos de vida do tamanduá, sua relação com o ambiente e com outros de sua espécie. Trata-se do nicho ecológico.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma dona de casa acidentalmente deixou cair na 
geladeira a água proveniente do degelo de um peixe, 
o que deixou um cheiro forte e desagradável dentro do 
eletrodoméstico. Sabe-se que o odor característico de 
peixe se deve às aminas e que esses compostos se 
comportam como bases. 
Na 
tabela 
são 
listadas 
as 
concentrações 
hidrogeniônicas de alguns materiais encontrados na 
cozinha, que a dona de casa pensa em utilizar na limpeza 
da geladeira. 
 
Dentre os materiais listados, quais são apropriados para 
amenizar esse odor?`,
    images: ['/enem/2012/images/enem_2012_d1_q69.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Álcool ou sabão.` },
      { id: 'B', type: 'text', value: `Suco de limão ou álcool.` },
      { id: 'C', type: 'text', value: `Suco de limão ou vinagre.` },
      { id: 'D', type: 'text', value: `Suco de limão, leite ou sabão.` },
      { id: 'E', type: 'text', value: `Sabão ou carbonato de sódio/barrilha.` },
    ],
    correct: 'C',
    explanation: `Como o odor proveniente do degelo de um peixe vem de um composto básico(aminas), para neutralizar esse cheiro forte é necessário usar um composto ácido,ou seja, com pH + ]> 10 -7 . Analisando a tabela apresentada, os únicos materiais que atendem a essas especificações são Suco de limão ou vinagre.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em uma planície, ocorreu um acidente ambiental 
em 
decorrência 
do 
derramamento 
de 
grande 
quantidade de um hidrocarboneto que se apresenta na 
forma pastosa à temperatura ambiente. Um químico 
ambiental utilizou uma quantidade apropriada de 
uma solução de para-dodecil-benzenossulfonato de 
sódio, um agente tensoativo sintético, para diminuir os 
impactos desse acidente. 
Essa intervenção produz resultados positivos para o 
ambiente porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `promove 
uma 
reação 
de 
substituição 
no 
hidrocarboneto, tornando-o menos letal ao ambiente.` },
      { id: 'B', type: 'text', value: `a hidrólise do para-dodecil-benzenossulfonato de 
sódio produz energia térmica suficiente para vaporizar 
o hidrocarboneto.` },
      { id: 'C', type: 'text', value: `a mistura desses reagentes provoca a combustão do 
hidrocarboneto, o que diminui a quantidade dessa 
substância na natureza.` },
      { id: 'D', type: 'text', value: `a 
solução 
de 
para-dodecil-benzenossulfonato 
possibilita a solubilização do hidrocarboneto.` },
      { id: 'E', type: 'text', value: `o reagente adicionado provoca uma solidificação do 
hidrocarboneto, o que facilita sua retirada do ambiente.` },
    ],
    correct: 'D',
    explanation: `O para-dodecil-benzenossulfonato de sódio apresenta em sua fórmula estrutural uma parte que é polar e uma parte apolar. Os hidrocarbonetos são compostos apolares, logo, se solubilizarão nos hidrocarbonetos, sendo assim, diminuindo os impactos no meio ambiente.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Suponha que você seja um consultor e foi contratado 
para assessorar a implantação de uma matriz energética 
em um pequeno país com as seguintes características: 
região plana, chuvosa e com ventos constantes, dispondo 
de poucos recursos hídricos e sem reservatórios de 
combustíveis fósseis. 
De acordo com as características desse país, a matriz 
energética de menor impacto e risco ambientais é a 
baseada na energia`,
    alternatives: [
      { id: 'A', type: 'text', value: `dos biocombustíveis, pois tem menor impacto 
ambiental e maior disponibilidade.` },
      { id: 'B', type: 'text', value: `solar, pelo seu baixo custo e pelas características do 
país favoráveis à sua implantação.` },
      { id: 'C', type: 'text', value: `nuclear, por ter menor risco ambiental e ser adequada 
a locais com menor extensão territorial.` },
      { id: 'D', type: 'text', value: `hidráulica, devido ao relevo, à extensão territorial do 
país e aos recursos naturais disponíveis.` },
      { id: 'E', type: 'text', value: `eólica, pelas características do país e por não gerar 
gases do efeito estufa nem resíduos de operação.` },
    ],
    correct: 'E',
    explanation: `A baixa de recursos hídricos inviabiliza a energia hidráulica e a nuclear, bem como as chuvas inviabilizam a energia solar. A pequena dimensão territorial do país e os constantes ventos favorecem então o uso da energia eólica.`,
    subject: ['bio'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma empresa de transportes precisa efetuar a 
entrega de uma encomenda o mais breve possível. 
Para tanto, a equipe de logística analisa o trajeto desde 
a empresa até o local da entrega. Ela verifica que o 
trajeto apresenta dois trechos de distâncias diferentes e 
velocidades máximas permitidas diferentes. No primeiro 
trecho, a velocidade máxima permitida é de 80 km/h e a 
distância a ser percorrida é de 80 km. No segundo trecho, 
cujo comprimento vale 60 km, a velocidade máxima 
permitida é 120 km/h. 
Supondo que as condições de trânsito sejam favoráveis 
para que o veículo da empresa ande continuamente 
na velocidade máxima permitida, qual será o tempo 
necessário, em horas, para a realização da entrega?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,7` },
      { id: 'B', type: 'text', value: `1,4` },
      { id: 'C', type: 'text', value: `1,5` },
      { id: 'D', type: 'text', value: `2,0` },
      { id: 'E', type: 'text', value: `3,0` },
    ],
    correct: 'C',
    explanation: `Como temos uma velocidade máximo em todos os pontos da trajetória. Podemos usar: V 1 =ΔS 1 /Δt 1 80=80/Δt 1 Δt 1 =1h V 2 =ΔS 2 /Δt 2 120=60/Δt 2 Δt 2 =0,5h Δt total =Δt 1 +Δt 2 =1+0,5 Δt total =1,5h`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para ligar ou desligar uma mesma lâmpada a partir de dois 
interruptores, conectam-se os interruptores para que a mudança 
de posição de um deles faça ligar ou desligar a lâmpada, não 
importando qual a posição do outro. Esta ligação é conhecida 
como interruptores paralelos. Este interruptor é uma chave 
de duas posições constituída por um polo e dois terminais, 
conforme mostrado nas figuras de um mesmo interruptor. Na 
Posição I a chave conecta o polo ao terminal superior, e na 
Posição II a chave o conecta ao terminal inferior. 
O circuito que cumpre a finalidade de funcionamento 
descrita no texto é:`,
    images: ['/enem/2012/images/enem_2012_d1_q73.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `O enunciado pede que a lampada deverá ser acesa ou apagada por qualquer um dos interruptores, independente da posição do outro. Logo, deve-se observar as possibilidade em que você pode cumprir esse objetivo nas alternativas. A única alternativa que demonstra essa possibilidade é a alternativa E.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A característica que permite identificar um planeta 
no céu é o seu movimento relativo às estrelas fixas. 
Se observarmos a posição de um planeta por vários 
dias, verificaremos que sua posição em relação às 
estrelas fixas se modifica regularmente. A figura 
destaca o movimento de Marte observado em 
intervalos de 10 dias, registrado da Terra. 
155º 
150º 
145º 
140º 
135º 
130º 
+20 
MARTE 
+10 
Projecto Física . Lisboa: Fundação Calouste Gulbenkian, 1980 (adaptado). 
Qual a causa da forma da trajetória do planeta Marte 
registrada na figura?`,
    images: ['/enem/2012/images/enem_2012_d1_q74.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A maior velocidade orbital da Terra faz com que, em 
certas épocas, ela ultrapasse Marte.` },
      { id: 'B', type: 'text', value: `A presença de outras estrelas faz com que 
sua trajetória seja desviada por meio da atração 
gravitacional.` },
      { id: 'C', type: 'text', value: `A órbita de Marte, em torno do Sol, possui uma forma 
elíptica mais acentuada que a dos demais planetas.` },
      { id: 'D', type: 'text', value: `A atração gravitacional entre a Terra e Marte faz com 
que este planeta apresente uma órbita irregular em 
torno do Sol.` },
      { id: 'E', type: 'text', value: `A proximidade de Marte com Júpiter, em algumas 
épocas do ano, faz com que a atração gravitacional 
de Júpiter interfira em seu movimento.` },
    ],
    correct: 'A',
    explanation: `Já que a Terra esta mais próxima do Sol que Marte. Podemos concluir que a sua velocidade de translação é obrigatoriamente maior. Essa relação faz com que na situação em que Marte esta viajando na frente da Terra, vejamos a primeira parte do laço. Ao ultrapassarmos Marte, temos a impressão de que Marte esta em um movimento retrógado em relação a Terra, logo, observamos que Marte inverte o sentido do seu movimento, realizando a segunda parte do laço.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em certos locais, larvas de moscas, criadas em arroz 
cozido, são utilizadas como iscas para pesca. Alguns 
criadores, no entanto, acreditam que essas larvas surgem 
espontaneamente do arroz cozido, tal como preconizado 
pela teoria da geração espontânea. 
Essa teoria começou a ser refutada pelos cientistas ainda 
no século XVII, a partir dos estudos de Redi e Pasteur, 
que mostraram experimentalmente que`,
    alternatives: [
      { id: 'A', type: 'text', value: `seres vivos podem ser criados em laboratório.` },
      { id: 'B', type: 'text', value: `a vida se originou no planeta a partir de microrganismos.` },
      { id: 'C', type: 'text', value: `o ser vivo é oriundo da reprodução de outro ser vivo 
pré-existente.` },
      { id: 'D', type: 'text', value: `seres 
vermiformes 
e 
microrganismos 
são 
evolutivamente aparentados.` },
      { id: 'E', type: 'text', value: `vermes e microrganismos são gerados pela matéria 
existente nos cadáveres e nos caldos nutritivos, 
respectivamente.` },
    ],
    correct: 'C',
    explanation: `Os experimentos de Pasteur e Redi comprovam a biogênese, isto é, a vida sendo originada de outra vida, ao contrário da ideia vigente na época, de que a vida poderia surgir da matéria bruta (abiogênese).`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os tubos de PVC, material organoclorado sintético, 
são normalmente utilizados como encanamento na 
construção civil. Ao final da sua vida útil, uma das formas 
de descarte desses tubos pode ser a incineração. Nesse 
processo libera-se HCℓ (g), cloreto de hidrogênio, dentre 
outras substâncias. Assim, é necessário um tratamento 
para evitar o problema da emissão desse poluente. 
Entre as alternativas possíveis para o tratamento, é 
apropriado canalizar e borbulhar os gases provenientes 
da incineração em`,
    alternatives: [
      { id: 'A', type: 'text', value: `água dura.` },
      { id: 'B', type: 'text', value: `água de cal.` },
      { id: 'C', type: 'text', value: `água salobra.` },
      { id: 'D', type: 'text', value: `água destilada.` },
      { id: 'E', type: 'text', value: `água desmineralizada.` },
    ],
    correct: 'B',
    explanation: `A questão diz que nesse processo libera-se HCℓ (g) , que é o ácido clorídrico. Para neutralizá-lo é necessário utilizar algo que tenha caráter básico, que no caso, a água de cal é uma solução de óxido de cálcio, que em solução aquosa forma Ca(OH) 2 (hidróxido de cálcio)`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Um consumidor desconfia que a balança do 
supermercado não está aferindo corretamente a massa 
dos produtos. Ao chegar a casa resolve conferir se a 
balança estava descalibrada. Para isso, utiliza um recipiente 
provido de escala volumétrica, contendo 1,0 litro d’água. 
Ele coloca uma porção dos legumes que comprou dentro 
do recipiente e observa que a água atinge a marca de
1,5 litro e também que a porção não ficara totalmente
submersa, com 1/3 de seu volume fora d’água. Para
concluir o teste, o consumidor, com ajuda da internet,
verifica que a densidade dos legumes, em questão,
é a metade da densidade da água, onde, ρágua = 1 g/cm³.
No supermercado a balança registrou a massa da porção
de legumes igual a 0,500 kg (meio quilograma). 
Considerando que o método adotado tenha boa precisão, 
o consumidor concluiu que a balança estava descalibrada 
e deveria ter registrado a massa da porção de legumes 
igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,073 kg.` },
      { id: 'B', type: 'text', value: `0,167 kg.` },
      { id: 'C', type: 'text', value: `0,250 kg.` },
      { id: 'D', type: 'text', value: `0,375 kg.` },
      { id: 'E', type: 'text', value: `0,750 kg.` },
    ],
    correct: 'D',
    explanation: `Apesar de não estar tão claro no enunciado, vamos considerar que o legume não esta flutuando, logo, o empuxo não equilibra o peso. Volume fora: 1/3 do volume total Volume dentro: 2/3 do volume total=0,5L Volume total=0,75L Procurando por fora, encontrei o valor de densidade do legume que não é dado no enunciado: ρ legume =0,5 kg/L M legume =ρ legume .V M legume =0,5.0,75=0,375 kg`,
    subject: ['fis'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os freios ABS são uma importante medida de 
segurança no trânsito, os quais funcionam para impedir 
o travamento das rodas do carro quando o sistema de 
freios é acionado, liberando as rodas quando estão no 
limiar do deslizamento. Quando as rodas travam, a força 
de frenagem é governada pelo atrito cinético. 
As representações esquemáticas da força de atrito f at 
entre os pneus e a pista, em função da pressão p aplicada 
no pedal de freio, para carros sem ABS e com ABS, 
respectivamente, são: 
f at 
f at`,
    images: ['/enem/2012/images/enem_2012_d1_q78_A.jpg', '/enem/2012/images/enem_2012_d1_q78_B.jpg', '/enem/2012/images/enem_2012_d1_q78_C.jpg', '/enem/2012/images/enem_2012_d1_q78_D.jpg', '/enem/2012/images/enem_2012_d1_q78_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `Separaremos a questão em 2 partes: Sem os freios ABS: A força de atrito, nesse caso, aumenta gradativamente conforme se pisa no freio ate o momento em que a roda trava (valor máximo do atrito). Quando a roda trava, a característica do atrito muda, o atrito passar a ser dinâmico. O atrito dinâmico tem valor constante, porem, menor que a força de atrito cinético máxima que fez a roda travar. Com os freios ABS: Esse frio funciona como medida de segurança para que a roda não trave, assim, evitando o deslizamento do carro na estrada. Para isso acontecer, a força de atrito não pode chegar no valor máximo. Logo, o sistema do carro vai soltando aos poucos a roda ao chegar nesse valor, ate chegar em um valor aceitável para retomar o crescimento da força de atrito, contribuindo para uma feriada mais segura. A imagem que constitui essas duas ideias encontra-se no item A`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O armazenamento de certas vitaminas no organismo apresenta grande dependência de sua solubilidade. 
Por exemplo, vitaminas hidrossolúveis devem ser incluídas na dieta diária, enquanto vitaminas lipossolúveis são
armazenadas em quantidades suficientes para evitar doenças causadas pela sua carência. A seguir são apresentadas
as estruturas químicas de cinco vitaminas necessárias ao organismo.
I
II
III
IV
V
Dentre as vitaminas apresentadas na figura, aquela que necessita de maior suplementação diária é`,
    images: ['/enem/2012/images/enem_2012_d1_q79.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'C',
    explanation: `A solubilidade em água se deve a presença de ligações de hidrogênio estabelecidas entres as hidroxilas(OH &#8211; ). O composto que apresenta maior quantidade de hidroxilas é o mais solúvel em água, logo, o composto III`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A condição física apresentada pelo personagem da tirinha é um fator de risco que pode desencadear doenças como`,
    images: ['/enem/2012/images/enem_2012_d1_q80.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `anemia.` },
      { id: 'B', type: 'text', value: `beribéri.` },
      { id: 'C', type: 'text', value: `diabetes.` },
      { id: 'D', type: 'text', value: `escorbuto.` },
      { id: 'E', type: 'text', value: `fenilcetonúria.` },
    ],
    correct: 'C',
    explanation: `A obesidade, quadro apresentado pelo protagonista da tirinha, é fator de risco para diabetes mellitus tipo II.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Paleontólogos estudam fósseis e esqueletos de 
dinossauros para tentar explicar o desaparecimento 
desses animais. Esses estudos permitem afirmar que 
esses animais foram extintos há cerca de 65 milhões 
de anos. Uma teoria aceita atualmente é a de que um 
asteroide colidiu com a Terra, formando uma densa 
nuvem de poeira na atmosfera. 
De acordo com essa teoria, a extinção ocorreu em função 
de modificações no planeta que`,
    alternatives: [
      { id: 'A', type: 'text', value: `desestabilizaram o relógio biológico dos animais, 
causando alterações no código genético.` },
      { id: 'B', type: 'text', value: `reduziram a penetração da luz solar até a 
superfície 
da 
Terra, 
interferindo 
no 
fluxo 
energético das teias tróficas.` },
      { id: 'C', type: 'text', value: `causaram uma série de intoxicações nos animais, 
provocando a bioacumulação de partículas de poeira 
nos organismos.` },
      { id: 'D', type: 'text', value: `resultaram na sedimentação das partículas de poeira 
levantada com o impacto do meteoro, provocando o 
desaparecimento de rios e lagos.` },
      { id: 'E', type: 'text', value: `evitaram a precipitação de água até a superfície da 
Terra, causando uma grande seca que impediu a 
retroalimentação do ciclo hidrológico.` },
    ],
    correct: 'B',
    explanation: `A formação da nuvem de poeira bloqueou a penetração de raios solares, reduzindo então a taxa de fotossíntese das plantas, diminuindo então o alimento para os herbívoros. Isso afeta todos os elos da cadeia alimentar, já que a ausência de produtores ocasiona um desequilíbrio nas teias tróficas e elimina todos os consumidores.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O boato de que os lacres das latas de alumínio teriam 
um alto valor comercial levou muitas pessoas a juntarem 
esse material na expectativa de ganhar dinheiro com sua 
venda. As empresas fabricantes de alumínio esclarecem 
que isso não passa de uma “lenda urbana”, pois ao retirar 
o anel da lata, dificulta-se a reciclagem do alumínio. Como 
a liga do qual é feito o anel contém alto teor de magnésio, 
se ele não estiver junto com a lata, fica mais fácil ocorrer 
a oxidação do alumínio no forno. A tabela apresenta as 
semirreações e os valores de potencial padrão de redução 
de alguns metais: 
 2+ + 2 e - → Cu 
+0,34 
Disponível em: www.sucatas.com. Acesso em: 28 fev. 2012 (adaptado). 
Com base no texto e na tabela, que metais poderiam 
entrar na composição do anel das latas com a mesma 
função do magnésio, ou seja, proteger o alumínio da 
oxidação nos fornos e não deixar diminuir o rendimento 
da sua reciclagem?`,
    images: ['/enem/2012/images/enem_2012_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Somente o lítio, pois ele possui o menor potencial de 
redução.` },
      { id: 'B', type: 'text', value: `Somente o cobre, pois ele possui o maior potencial 
de redução.` },
      { id: 'C', type: 'text', value: `Somente o potássio, pois ele possui potencial de 
redução mais próximo do magnésio.` },
      { id: 'D', type: 'text', value: `Somente o cobre e o zinco, pois eles sofrem oxidação 
mais facilmente que o alumínio.` },
      { id: 'E', type: 'text', value: `Somente o lítio e o potássio, pois seus potenciais de 
redução são menores do que o do alumínio.` },
    ],
    correct: 'E',
    explanation: `O magnésio é usado como metal de sacrifício nas latas de alumínio, ou seja, ele irá se oxidar antes da lata no processo de reciclagem. Para uma alternativa de material do anel das latinhas, é necessário que o metal tenha um potencial de oxidação maior que o do magnésio, ou então um potencial de redução menor. Como a tabela fornece os potenciais padrão de redução dos elementos, as únicas opções viáveis para a substituição do magnésio nos anéis é o lítio e o potássio.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Aumentar a eficiência na queima de combustível dos 
motores a combustão e reduzir suas emissões de poluentes 
é a meta de qualquer fabricante de motores. É também o 
foco de uma pesquisa brasileira que envolve experimentos 
com plasma, o quarto estado da matéria e que está presente 
no processo de ignição. A interação da faísca emitida pela 
vela de ignição com as moléculas de combustível gera o 
plasma que provoca a explosão liberadora de energia que, 
por sua vez, faz o motor funcionar. 
Disponível em: www.inovacaotecnologica.com.br. Acesso em: 22 jul. 2010 (adaptado). 
No entanto, a busca da eficiência referenciada no texto 
apresenta como fator limitante`,
    alternatives: [
      { id: 'A', type: 'text', value: `o tipo de combustível, fóssil, que utilizam. Sendo um 
insumo não renovável, em algum momento estará 
esgotado.` },
      { id: 'B', type: 'text', value: `um dos princípios da termodinâmica, segundo o qual 
o rendimento de uma máquina térmica nunca atinge 
o ideal.` },
      { id: 'C', type: 'text', value: `o funcionamento cíclico de todos os motores. A 
repetição contínua dos movimentos exige que parte 
da energia seja transferida ao próximo ciclo.` },
      { id: 'D', type: 'text', value: `as forças de atrito inevitável entre as peças. Tais 
forças provocam desgastes contínuos que com o 
tempo levam qualquer material à fadiga e ruptura.` },
      { id: 'E', type: 'text', value: `a temperatura em que eles trabalham. Para atingir o 
plasma, é necessária uma temperatura maior que a 
de fusão do aço com que se fazem os motores.` },
    ],
    correct: 'B',
    explanation: `De acordo com a 2° lei da termodinâmica: O rendimento de uma maquina térmica nunca pode alcançar os 100% por definição. Logo, isso impede a transformação total do calor em trabalho realizado pela maquina, tendo sempre uma perda.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A falta de conhecimento em relação ao que vem a ser 
um material radioativo e quais os efeitos, consequências 
e usos da irradiação pode gerar o medo e a tomada de 
decisões equivocadas, como a apresentada no exemplo 
a seguir. 
“Uma companhia aérea negou-se a transportar 
material médico por este portar um certificado de 
esterilização por irradiação.” 
Física na Escola , v. 8, n. 2, 2007 (adaptado). 
A decisão tomada pela companhia é equivocada, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `o material é incapaz de acumular radiação, não se 
tornando radioativo por ter sido irradiado.` },
      { id: 'B', type: 'text', value: `a utilização de uma embalagem é suficiente para 
bloquear a radiação emitida pelo material.` },
      { id: 'C', type: 'text', value: `a contaminação radioativa do material não se 
prolifera da mesma forma que as infecções por 
microrganismos.` },
      { id: 'D', type: 'text', value: `o material irradiado emite radiação de intensidade 
abaixo daquela que ofereceria risco à saúde.` },
      { id: 'E', type: 'text', value: `o intervalo de tempo após a esterilização é suficiente 
para que o material não emita mais radiação.` },
    ],
    correct: 'A',
    explanation: `O material irradiado é incapaz de acumular radiação, não se tornando radioativo, justamente por ter sido irradiado.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A imagem representa o processo de evolução das 
plantas e algumas de suas estruturas. Para o sucesso 
desse processo, a partir de um ancestral simples, os 
diferentes grupos vegetais desenvolveram estruturas 
adaptativas que lhes permitiram sobreviver em diferentes 
ambientes. 
Vasos condutores 
Disponível em: http://biopibidufsj.blogspot.com. Acesso em: 29 fev. 2012 (adaptado). 
Qual das estruturas adaptativas apresentadas contribuiu 
para uma maior diversidade genética?`,
    images: ['/enem/2012/images/enem_2012_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `As sementes aladas, que favorecem a dispersão aérea.` },
      { id: 'B', type: 'text', value: `Os arquegônios, que protegem o embrião multicelular.` },
      { id: 'C', type: 'text', value: `Os grãos de pólen, que garantem a polinização 
cruzada.` },
      { id: 'D', type: 'text', value: `Os frutos, que promovem uma maior eficiência 
reprodutiva.` },
      { id: 'E', type: 'text', value: `Os vasos condutores, que possibilitam o transporte 
da seiva bruta.` },
    ],
    correct: 'C',
    explanation: `A polinização cruzada permite que haja troca de material genético entre indivíduos diferentes, o que confere maior variabilidade genética para a prole.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Osmose é um processo espontâneo que ocorre em 
todos os organismos vivos e é essencial à manutenção 
da vida. Uma solução 0,15 mol/L de NaCℓ (cloreto de 
sódio) possui a mesma pressão osmótica das soluções 
presentes nas células humanas. 
A imersão de uma célula humana em uma solução 
0,20 mol/L de NaCℓ tem, como consequência, a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `adsorção de íons Na + sobre a superfície da célula.` },
      { id: 'B', type: 'text', value: `difusão rápida de íons Na + para o interior da célula.` },
      { id: 'C', type: 'text', value: `diminuição da concentração das soluções presentes 
na célula.` },
      { id: 'D', type: 'text', value: `transferência de íons Na + da célula para a solução.` },
      { id: 'E', type: 'text', value: `transferência de moléculas de água do interior da 
célula para a solução.` },
    ],
    correct: 'E',
    explanation: `Quando submetida a uma solução hipertônica, a tendência é a desidratação da célula. Isso se deve ao processo de osmose, no qual há passagem de água do meio menos concentrado em soluto para o meio mais concentrado, uma forma de transporte passivo.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A doença de Chagas afeta mais de oito milhões de 
brasileiros, sendo comum em áreas rurais. É uma doença 
causada pelo protozoário Trypanosoma cruzi e transmitida 
por insetos conhecidos como barbeiros ou chupanças. 
Uma ação do homem sobre o meio ambiente que tem 
contribuído para o aumento dessa doença é`,
    alternatives: [
      { id: 'A', type: 'text', value: `o consumo de carnes de animais silvestres que são 
hospedeiros do vetor da doença.` },
      { id: 'B', type: 'text', value: `a utilização de adubos químicos na agricultura que 
aceleram o ciclo reprodutivo do barbeiro.` },
      { id: 'C', type: 'text', value: `a ausência de saneamento básico que favorece a 
proliferação do protozoário em regiões habitadas por 
humanos.` },
      { id: 'D', type: 'text', value: `a poluição dos rios e lagos com pesticidas que 
exterminam o predador das larvas do inseto 
transmissor da doença.` },
      { id: 'E', type: 'text', value: `o desmatamento que provoca a migração ou o 
desaparecimento dos animais silvestres dos quais o 
barbeiro se alimenta.` },
    ],
    correct: 'E',
    explanation: `A destruição do habitat natural do barbeiro e o desaparecimento de seus hospedeiros silvestres promove a migração deste animal para o meio antrópico, onde passará a se abrigar em residências e a se alimentar de humanos, aumentando assim o contágio da doença.`,
    subject: ['bio'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nossa pele possui células que reagem à incidência 
de luz ultravioleta e produzem uma substância chamada 
melanina, responsável pela pigmentação da pele. 
Pensando em se bronzear, uma garota vestiu um biquíni, 
acendeu a luz de seu quarto e deitou-se exatamente 
abaixo da lâmpada incandescente. Após várias horas ela 
percebeu que não conseguiu resultado algum. 
O bronzeamente não ocorreu porque a luz emitida pela 
lâmpada incandescente é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `baixa intensidade.` },
      { id: 'B', type: 'text', value: `baixa frequência.` },
      { id: 'C', type: 'text', value: `um espectro contínuo.` },
      { id: 'D', type: 'text', value: `amplitude inadequada.` },
      { id: 'E', type: 'text', value: `curto comprimento de onda.` },
    ],
    correct: 'B',
    explanation: `O espectro de luz proveniente das ondas eletromagnéticas vindas de uma lampada incandescente é composto, em sua grande maioria, por radiação no espectro do infravermelho e luz visível. Esses espectros possuem frequências menores que as do ultravioleta (raios do sol), logo, incapazes de gerar um bronzeamento.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Quando colocados em água, os fosfolipídeos tendem 
a formar lipossomos, estruturas formadas por uma 
bicamada lipídica, conforme mostrado na figura. Quando 
rompida, essa estrutura tende a se reorganizar em um 
novo lipossomo. 
Disponível em: http://course1.winona.edu. Acesso em: 1 mar. 2012 (adaptado). 
Esse arranjo característico se deve ao fato de os 
fosfolipídios apresentarem uma natureza`,
    images: ['/enem/2012/images/enem_2012_d1_q89.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `polar, ou seja, serem inteiramente solúveis em água.` },
      { id: 'B', type: 'text', value: `apolar, ou seja, não serem solúveis em solução aquosa.` },
      { id: 'C', type: 'text', value: `anfotérica, ou seja, podem comportar-se como ácidos 
e bases.` },
      { id: 'D', type: 'text', value: `insaturada, ou seja, possuírem duplas ligações em 
sua estrutura.` },
      { id: 'E', type: 'text', value: `anfifílica, ou seja, possuírem uma parte hidrofílica e 
outra hidrofóbica.` },
    ],
    correct: 'E',
    explanation: `A membrana plasmática é composta por uma bicamada fosfolipídica. A porção fosfato deste fosfolipídico é polar, ou seja, hidrofílica, e fica voltada pro meio intracelular em uma camada e pro meio extracelular em outra. A porção lipídica, por sua vez, é apolar, e fica disposta entre os fosfatos. Isso confere à membrana plasmática sua natureza anfifílica.`,
    subject: ['bio'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Aspartame é um edulcorante artificial (adoçante 
dietético) que apresenta potencial adoçante 200 vezes maior 
que o açúcar comum, permitindo seu uso em pequenas 
quantidades. Muito usado pela indústria alimentícia, 
principalmente nos refrigerantes diet , tem valor energético 
que corresponde a 4 calorias/grama. É contraindicado a 
portadores de fenilcetonúria, uma doença genética rara que 
provoca o acúmulo da fenilalanina no organismo, causando 
retardo mental. O IDA (índice diário aceitável) desse adoçante 
é 40 mg/kg de massa corpórea. 
Disponível em: http://boaspraticasfarmaceuticas.blogspot.com. Acesso em: 27 fev. 2012. 
Com base nas informações do texto, a quantidade 
máxima recomendada de aspartame, em mol, que uma 
pessoa de 70 kg de massa corporal pode ingerir por dia é 
mais próxima de 
Dado: massa molar do aspartame = 294 g/mol`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,3 × 10 -4 .` },
      { id: 'B', type: 'text', value: `9,5 × 10 -3 .` },
      { id: 'C', type: 'text', value: `4 × 10 -2 .` },
      { id: 'D', type: 'text', value: `2,6.` },
      { id: 'E', type: 'text', value: `823.` },
    ],
    correct: 'B',
    explanation: `Sabendo que o IDA (índice diário aceitável) desse adoçante é 40 mg/kg de massa corpórea. Primeiro calculamos quantos mg de aspartame é aceitável numa pessoa que pesa 70 Kg : 40 mg de aspartame &#8212;&#8211; 1 Kg de massa corpórea X mg de aspartame &#8212;&#8211; 70 Kg de massa corpórea X= 2.800 mg ou 2,8 gramas Agora, sabendo a massa molar do aspartame, podemos calcular quantos mol existem em 2.800 mg(2,8 g) do adoçante: 294 g de aspartame &#8212;&#8211; 1 mol de aspartame 2,8 g de aspartame &#8212;&#8211; Y mol de aspartame Y = 0,0095 gramas ou 9,5 × 10 –3 gramas.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
];

export default ENEM_2012_D1;
