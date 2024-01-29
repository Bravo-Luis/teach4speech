import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import "./Game.css";
import { CSSTransition } from "react-transition-group";
import lottieAnimation from "./assets/lottie_1.json";
import Lottie from "react-lottie";

function Game({ webSocket }: { webSocket: WebSocket | null }) {
  const [inputText, setInputText] = useState("");

  const [isEnglish, setIsEnglish] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const { gameCode } = useParams();
  const [themeEnglish, setThemeEnglish] = useState("");
  const [themeSpanish, setThemeSpanish] = useState("");
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [leaderboards, setLeaderboards] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (gameActive) {
      setTimerActive(true);
      setTimer(60);
    }
  }, [gameActive]);

  useEffect(() => {
    let interval: any;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
      setGameEnded(true);
    }
    return () => clearInterval(interval);
  }, [timer, timerActive]);

  useEffect(() => {
    if (!webSocket) return;

    const handleMessage = (event: any) => {
      const message = JSON.parse(event.data);
      console.log(message);

      if (message.message === "Game started" && message.status === "active") {
        setThemeSpanish(message.theme.spanish);
        setThemeEnglish(message.theme.english);
        setGameActive(true);
      }

      if (message.message === "Game ended") {
        setLeaderboards(message.leaderboard);
        setGameEnded(true);
      }

      if (message.action === "update") {
        setPoints(message.score);
        setAnswers(message.answers);
      }

      if (message.message === "Client connected") {
        setGameActive(false);
        navigate(`/join`);
      }
    };

    webSocket.addEventListener("message", handleMessage);

    return () => {
      webSocket.removeEventListener("message", handleMessage);
    };
  }, [webSocket]);

  const handleSubmit = () => {
    if (!gameActive || !webSocket) {
      return;
    }
    webSocket.send(
      JSON.stringify({
        role: "student",
        action: "answer",
        sessionId: gameCode,
        answer: inputText,
        name: localStorage.getItem("username"),
      })
    );
    setInputText("");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!gameActive) {
    return (
      <div className="game-1">
        <GameCodeDisplay gameCode={String(gameCode)} isEnglish={isEnglish} />
        <TranslationButton isEnglish={isEnglish} setIsEnglish={setIsEnglish} />

        <Typography
          variant="h2"
          component="h2"
          fontWeight={"bold"}
          gutterBottom
          sx={{
            fontSize: "clamp(1rem, 5vw, 4rem)",
          }}
        >
          Teach4Speech
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontWeight={"thin"}
          gutterBottom
          sx={{
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
          }}
        >
          {isEnglish
            ? "Waiting for host to start game"
            : "Esperando a que el anfitrión inicie el juego"}
        </Typography>

        <Lottie
          options={defaultOptions}
          height={"clamp(200px, 30%, 1500px)"}
          width={"clamp(200px, 30%, 1500px)"}
        />

        <SpeechTips ws={webSocket} isEnglish={isEnglish} />
      </div>
    );
  }

  if (!gameEnded) {
    return (
      <div className="game-1">
        <GameCodeDisplay gameCode={String(gameCode)} isEnglish={isEnglish} />
        <TranslationButton isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        {!gameEnded && (
          <div className="student-grid">
            
            {answers.map((answer, _) => (
                <Box
                paddingLeft={2}
                paddingRight={2}
                margin={2}
           
                sx={{
                 borderRadius: 16,
                 background:"gray"
                }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "clamp(2rem, 2.25vw, 4rem)",
                }}
              >
                {answer}
              </Typography>
                </Box>
            ))}
          </div>
        )}
        <>
          <Typography
            variant="h6"
            component="p"
            width={"clamp(200px, 90%, 1500px)"}
            textAlign={"center"}
            position={"absolute"}
            top={"clamp(100px, 15%, 250px)"}
            fontWeight={"regular"}
            height={"100px"}
            sx={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
            }}
          >
            {isEnglish
              ? "Enter as many words as you can that are related to the theme!"
              : "¡Ingresa tantas palabras como puedas que estén relacionadas con el tema!"}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            fontWeight={"bold"}
            gutterBottom
            position={"absolute"}
            top={"clamp(10px, 20%, 600px)"}
            sx={{
              fontSize: "clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            {isEnglish ? themeEnglish : themeSpanish}
          </Typography>
          <div className="submit-row">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <TextField
                id="filled-basic"
                variant="outlined"
                type="text"
                placeholder={isEnglish ? "Enter a word" : "Ingresa una palabra"}
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                disabled={!gameActive}
                style={{
                  backgroundColor: "white",
                  borderRadius: "24px", // Rounded borders
                  border: "5px solid black", // Black border
                  fontSize: "25px",
                }}
                InputProps={{
                  style: {
                    color: "black",
                    borderRadius: "16px",
                    fontSize: "25px",
                    fontWeight: "bold",
                    width: "100%",
                    maxWidth: "320px",
                  },
                }}
              />
            </form>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!gameActive}
              sx={{
                borderRadius: "10px",
                height: "75px",
                fontWeight: "bold",
                border: "5px solid black",
              }}
            >
              {isEnglish ? "Submit" : "Enviar"}
            </Button>
          </div>
        </>

        <Box
          borderRadius={16}
          paddingLeft={1}
          paddingRight={1}
          sx={{
            position: "absolute",
            top: "clamp(10px, 2.5%, 25px)",
            right: "clamp(10px, 2.5%, 25px)",
          }}
        >
          <Typography
            position={"relative"}
            sx={{
              color: "yellow",
              fontWeight: "bold",
              fontSize: "clamp(0.5rem, 1vw, 1rem)",
            }}
          >
            {isEnglish ? "Points" : "Puntos"}
          </Typography>
          <Typography
            position={"relative"}
            sx={{
              color: "yellow",
              fontWeight: "bold",
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
            }}
          >
            {points * 100}
          </Typography>
        </Box>

        <Box
          borderRadius={16}
          paddingLeft={1}
          paddingRight={1}
          sx={{
            position: "absolute",
            bottom: "clamp(10px, 5%, 25px)",
            right: "clamp(10px, 5%, 25px)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "clamp(1rem, 2vw, 2rem)",
            }}
          >
            {isEnglish ? "Time:" : "Tiempo"} {timer}s
          </Typography>
        </Box>
      </div>
    );
  }

  if (gameEnded) {
    return (
      <div className="game-1">
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Leaderboard
        </Typography>

        {leaderboards.map((item: { name: string; score: string }, index) => (
          <Typography key={index} sx={{ fontSize: "clamp(20px, 2.5vw, 50px)" }}>
            {index + 1}. {item.name} with {Number(item.score) * 100} points
          </Typography>
        ))}
        <br />
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Your Words
        </Typography>
        <div className="student-grid">
          
          {answers.map((answer, index) => (
            <Box
            paddingLeft={2}
            paddingRight={2}
            margin={2}
       
            sx={{
             borderRadius: 16,
             background:"gray"
            }}>
            <Typography
              variant="h6"
              key={index}
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "clamp(2rem, 2.25vw, 4rem)",
              }}
            >
              {answer}
            </Typography>
            </Box>
          ))}

        </div>
      </div>
    );
  }
}

function GameCodeDisplay({
  gameCode,
  isEnglish,
}: {
  gameCode: string;
  isEnglish: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(gameCode);
      alert("Copied to clipboard"); // Consider replacing with a more elegant notification
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Box
      borderRadius={16}
      paddingLeft={1}
      paddingRight={1}
      boxShadow={3}
      border={"3px solid black"}
      sx={{
        background: "white",
        position: "absolute",
        fontWeight: "bold",
        top: "clamp(10px, 2.5%, 25px)",
        left: "clamp(10px, 2.5%, 25px)",
        width: "4em",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
      }}
      onClick={copyToClipboard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        sx={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          transition: "opacity 0.3s ease-in-out",
          transitionDelay: isHovered ? "0s" : "0.1s",
          opacity: isHovered ? 0 : 1,
        }}
      >
        {gameCode}
      </Typography>
      <Typography
        sx={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease-in-out",
          transitionDelay: isHovered ? "0.1s" : "0s", // Delay when showing "Copy"
          opacity: isHovered ? 1 : 0,
          userSelect: "none",
        }}
      >
        {isEnglish ? "Copy" : "Copiar"}
      </Typography>
    </Box>
  );
}

function SpeechTips({
  ws,
  isEnglish,
}: {
  ws: WebSocket | null;
  isEnglish: boolean;
}) {
  const [showTip, setShowTip] = useState(true);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setShowTip(false);
    }, 8000);

    return () => clearInterval(tipInterval);
  }, [ws]);

  useEffect(() => {
    if (!showTip) {
      const timeoutId = setTimeout(() => {
        setCurrentTipIndex(
          (prevIndex) => (prevIndex + 1) % loadingScreenTips.length
        );
        setShowTip(true);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [showTip]);

  const handleTipClick = () => {
    setShowTip(false);
  };

  const loadingScreenTips = [
    [
      "Tip: Practice makes perfect. The more you speak, the more confident you'll become!",
      "Consejo: La práctica hace al maestro. ¡Cuanto más hables, más confianza ganarás!",
    ],
    [
      "Did you know? The ability to understand and use language effectively is known as linguistic intelligence.",
      "¿Sabías? La capacidad de entender y utilizar el lenguaje de manera efectiva se conoce como inteligencia lingüística.",
    ],
    [
      "Fun Fact: The most commonly spoken language in the world is Mandarin Chinese.",
      "Dato Curioso: El idioma más hablado en el mundo es el chino mandarín.",
    ],
    [
      "Advice: Listening is as important as speaking. Good listeners are often great communicators.",
      "Consejo: Escuchar es tan importante como hablar. Los buenos oyentes suelen ser grandes comunicadores.",
    ],
    [
      "Language Tip: Reading out loud can significantly improve your pronunciation and fluency.",
      "Consejo de Idioma: Leer en voz alta puede mejorar significativamente tu pronunciación y fluidez.",
    ],
    [
      "Did you know? 'Eunoia' is the shortest English word containing all five main vowels. It means 'beautiful thinking.'",
      "¿Sabías? 'Eunoia' es la palabra más corta en inglés que contiene las cinco vocales principales. Significa 'pensamiento hermoso'.",
    ],
    [
      "Public Speaking Tip: Before a speech, take deep breaths to calm your nerves.",
      "Consejo de Oratoria: Antes de un discurso, respira profundamente para calmar tus nervios.",
    ],
    [
      "Fun Fact: There are over 7,000 languages spoken in the world today.",
      "Dato Curioso: Hay más de 7,000 idiomas que se hablan en el mundo hoy.",
    ],
    [
      "Reminder: Body language is a key part of communication. Your posture and gestures say a lot!",
      "Recordatorio: El lenguaje corporal es una parte clave de la comunicación. ¡Tu postura y gestos dicen mucho!",
    ],
    [
      "Did you know? Shakespeare invented many words, such as 'birthplace' and 'eyeball'.",
      "¿Sabías? Shakespeare inventó muchas palabras, como 'birthplace' y 'eyeball'.",
    ],
    [
      "Language Learning Tip: Immersion is one of the most effective ways to learn a new language.",
      "Consejo para Aprender Idiomas: La inmersión es una de las formas más efectivas de aprender un nuevo idioma.",
    ],
    [
      "Interesting Fact: The word 'alphabet' comes from the first two letters of the Greek alphabet: alpha and beta.",
      "Dato Interesante: La palabra 'alfabeto' proviene de las dos primeras letras del alfabeto griego: alfa y beta.",
    ],
    [
      "Advice: Keeping a vocabulary journal can help you learn new words and expressions.",
      "Consejo: Mantener un diario de vocabulario puede ayudarte a aprender nuevas palabras y expresiones.",
    ],
    [
      "Fun Fact: A pangram is a sentence that contains every letter of the alphabet, like 'The quick brown fox jumps over a lazy dog.'",
      "Dato Curioso: Un pangrama es una oración que contiene todas las letras del alfabeto, como 'El veloz murciélago hindú comía feliz cardillo y kiwi'.",
    ],
    [
      "Public Speaking Tip: Use stories and anecdotes in your speeches to make them more engaging.",
      "Consejo de Oratoria: Utiliza historias y anécdotas en tus discursos para hacerlos más atractivos.",
    ],
    [
      "Did you know? The longest word in the English language is 'pneumonoultramicroscopicsilicovolcanoconiosis'.",
      "¿Sabías? La palabra más larga en inglés es 'neumonoultramicroscópicosilicovolcanoconiosis'.",
    ],
    [
      "Language Learning Tip: Watching movies in a foreign language can improve your listening skills and vocabulary.",
      "Consejo para Aprender Idiomas: Ver películas en un idioma extranjero puede mejorar tus habilidades auditivas y vocabulario.",
    ],
    [
      "Reminder: Communication isn't just about words; it's about understanding and being understood.",
      "Recordatorio: La comunicación no se trata solo de palabras; se trata de entender y ser entendido.",
    ],
  ];

  return (
    <CSSTransition
      in={showTip}
      timeout={300}
      classNames="tip-fade"
      unmountOnExit
    >
      <Typography
        variant="h6"
        fontWeight={"bold"}
        component="p"
        width={"clamp(200px, 90%, 1500px)"}
        textAlign={"center"}
        position={"relative"}
        height={"40px"}
        onClick={handleTipClick}
        sx={{
          fontSize: "clamp(0.75rem, 2.5vw, 1.25rem)",
          transition: "all 0.2s ease-in-out",
          ":hover": {
            cursor: "pointer",
            scale: "1.005",
            transition: "all 0.2s ease-in-out",
          },
        }}
      >
        {loadingScreenTips[currentTipIndex][isEnglish ? 0 : 1]}
      </Typography>
    </CSSTransition>
  );
}

function TranslationButton({
  isEnglish,
  setIsEnglish,
}: {
  isEnglish: boolean;
  setIsEnglish: any;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Box
      borderRadius={16}
      paddingLeft={1}
      paddingRight={1}
      boxShadow={3}
      border={"3px solid black"}
      sx={{
        background: "white",
        position: "absolute",
        fontWeight: "bold",
        top: "clamp(10px, 2.5%, 25px)",
        left: "120px",
        width: "4em",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
      }}
      onClick={() => setIsEnglish(!isEnglish)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        sx={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          transition: "opacity 0.3s ease-in-out",
          transitionDelay: isHovered ? "0s" : "0.1s",
          userSelect: "none",
        }}
      >
        {isEnglish ? "Español" : "English"}
      </Typography>
    </Box>
  );
}

export default Game;
