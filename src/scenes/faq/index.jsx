import { Box, useTheme } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <HeaderComponent title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget neque a quam viverra congue. Vestibulum eget elit aliquet,
            molestie urna nec, efficitur nisi. Suspendisse sed tellus lobortis,
            posuere felis in, molestie enim. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Curabitur
            sagittis blandit tortor, non iaculis dui euismod nec. Donec nunc
            quam, euismod eu hendrerit ac, gravida ut sapien. Nam efficitur
            dapibus magna, congue feugiat tellus porttitor vel. Sed id dolor
            tincidunt, convallis elit vel, feugiat sapien. Donec volutpat leo et
            dolor finibus, eu ornare nisi imperdiet. Donec volutpat dui arcu,
            non luctus sapien lacinia vel. Aenean sapien nulla, eleifend nec
            gravida id, pellentesque at leo. Vivamus pharetra risus non neque
            ornare, non consectetur tellus lacinia. Etiam elit leo, pretium
            vitae vestibulum auctor, tincidunt eget tellus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nunc non neque nibh. Praesent euismod dolor et libero
            bibendum maximus. Praesent mi ipsum, consequat vel pellentesque sed,
            malesuada et neque. Etiam vestibulum mollis hendrerit. Duis volutpat
            tellus vitae metus cursus, vel consectetur ex euismod. Praesent ut
            tincidunt nibh. Praesent gravida diam at posuere semper. Proin
            venenatis ante et commodo luctus. Nullam nisl lorem, dictum ut
            sodales at, rhoncus eget massa. Etiam faucibus libero a fringilla
            fermentum. Fusce non est nibh. Mauris tortor magna, auctor id
            iaculis sit amet, vestibulum et nisi. Morbi scelerisque pulvinar
            quam eu varius. Donec augue erat, ultricies ut sapien sit amet,
            condimentum vulputate arcu. Nulla eu risus nec nisl mollis facilisis
            et in enim. Pellentesque leo mauris, hendrerit sit amet sem id,
            interdum suscipit elit. Duis elementum eros quam, vitae pellentesque
            turpis iaculis vitae. In iaculis faucibus tempus. Nulla a rutrum
            velit. Nullam euismod est non urna varius tempus. In et lobortis
            orci. Donec fringilla, erat quis facilisis egestas, justo ipsum
            rutrum nisl, eu mattis mi ex suscipit sapien. Aliquam tempus mauris
            et elit ullamcorper tincidunt. Pellentesque nec leo pulvinar,
            consectetur lacus sit amet, maximus diam. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Phasellus at aliquet augue. Proin neque urna, suscipit sit
            amet feugiat eu, vehicula cursus enim. Sed a lorem quam. Aliquam
            erat volutpat. Ut dapibus, quam vitae sollicitudin molestie, arcu
            arcu imperdiet neque, quis pulvinar metus est a risus. Morbi arcu
            est, cursus quis bibendum nec, lacinia a ex. Suspendisse potenti.
            Praesent lacinia et nisl sed cursus. Sed ut bibendum nisl. Sed ac
            orci lorem. Curabitur tempor nunc risus, auctor pretium urna
            vulputate a. Vivamus fringilla nunc et condimentum ornare. Nullam
            viverra neque nunc, non condimentum odio hendrerit at. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Proin id suscipit nisl. Aliquam sodales tempor
            tempor. Vestibulum efficitur nulla nec rutrum consequat. Curabitur
            eu justo nunc. Nulla in suscipit eros. Fusce massa tortor, cursus
            sit amet dapibus eget, pellentesque nec dui. Fusce et ornare velit.
            Phasellus ligula orci, iaculis porta efficitur eu, blandit id
            libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
