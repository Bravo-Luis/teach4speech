import { Typography } from "@mui/material"

function ImpactText({text}: {text: string}){

    const textList = text.split(" ")

    return (
        <Typography variant="body1" textAlign={"left"} component={"span"} sx={{
            maxWidth: "clamp(300px, 80vw, 1000px)",
        }}>
          {textList.map((word, _) => {
              if (word[0] === "{" && word[word.length - 1] === "}") {
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
        <Typography variant="body1" textAlign={"left"} component={"span"} fontWeight={"bold"} color={"primary"}>
          {text}
        </Typography>
    )
}

function NormalText(text:string){
    return (
        <Typography variant="body1" textAlign={"left"} component={"span"}>
          {text}
        </Typography>
    )
}

export default ImpactText;