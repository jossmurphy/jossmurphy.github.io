import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  A,
  Button,
  Container,
  CaseStudy,
  Hyperlink,
} from '../styles/global.js';

const useStyles = makeStyles({
  root: {
    minWidth: '100px',
  },
});

const BetterCardContent = styled(CardContent)`
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0;
  color: #ff0000;
  padding-left: 0px;

  & hover {
    box-shadow: 5px 5px;
  }
`;

export default function HorizontalCard(props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: '10px', stroke: '4px', borderRadius: '10px', display: 'flex' }}>
      <div>
        <BetterCardContent>
          <Subtitle1>{props.title}</Subtitle1>
          <P>{props.description}</P>
        </BetterCardContent>
        <Button style={{ margin: '15px', boxShadow: '0px 0px', display: 'flex-end' }}>
          <A href={props.hreef}>{'Read More >'}</A>
        </Button>
      </div>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={props.img}
        title="Contemplative Reptile"
      />
    </Card>
  );
}
