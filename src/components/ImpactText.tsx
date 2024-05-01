import { Typography } from "@mui/material"

function ImpactText({text}: {text: string}){

    const textList = text.split(" ")

    return (
        <Typography variant="body1" textAlign={"left"} component={"span"} sx={{
            width: "clamp(200px, 80%, 600px)",
        }}>
          {textList.map((word, _) => {
              if (word[0] === "{" && (word[word.length - 1] === "}" || ((word[word.length - 1] === "," || word[word.length - 1] === "." || word[word.length - 1] === "!" || word[word.length - 1] === "?") && word[word.length - 2] === "}"))) {
                if ((word[word.length - 1] === "," || word[word.length - 1] === "." || word[word.length - 1] === "!" || word[word.length - 1] === "?") && word[word.length - 2] === "}"){
                    const char = word[word.length - 1]
                    word = word.slice(1, word.length - 2)
                    return Impacted(word+ char+ " ") 
                }
                word = word.slice(1, word.length - 1)
                return Impacted(word + " ")
              } else {
                  return NormalText(word + " ")
              }
          })}
        </Typography>
    )
}

function Impacted(text:string){
    return (
        <Typography variant="body1" sx={{
            width: "clamp(200px, 80%, 600px)",
        }} textAlign={"left"} component={"span"} fontWeight={"bold"} color={"primary"}>
          {text.toUpperCase()}
        </Typography>
    )
}

function NormalText(text:string){
    return (
        <Typography variant="body1" sx={{
            width: "clamp(200px, 80%, 600px)",
        }} textAlign={"left"} component={"span"}>
          {text}
        </Typography>
    )
}

export default ImpactText;