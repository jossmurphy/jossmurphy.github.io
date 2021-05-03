import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import colors from '../styles/colors.js';

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
  margin-bottom: -30px;
  color: #ff0000;
  margin-left: 5px;
`;

const BetterCard = styled(Card)`
  border: 2px solid ${colors.c40};

  @media screen and (max-width: 100px) {
    display: flex;
    flex-direction: column;
  }
`;

const Tag = styled(P)`
  background-color: ${colors.c110};
  font-size: 16px;
  min-width: 10px;
  display: inline;
  padding: 0px 15px;
  margin: 5px;
  margin-top: 15px;
  margin-bottom: -3px;

  border-radius: 15px;
`;

export default function Carddd(props: any) {
  const classes = useStyles();

  return (
    <BetterCard className={classes.root} style={{ margin: '1vw', borderRadius: '10px', display: 'flexbox' }}>
      <CardMedia component="img" alt="Project Video" height="200" image={props.img} title="Project Video" />
      <BetterCardContent>
        <Subtitle1 style={{ marginTop: '0px' }}>{props.title}</Subtitle1>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '-5px' }}>
          {/* <Tag>hello</Tag>
          <Tag>hello</Tag>
          <Tag>hello</Tag> */}
        </div>
        <P>{props.description}</P>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginTop: '-20px' }}>
          <P style={{ color: colors.c70 }}>{props.date}</P>
        </div>
      </BetterCardContent>
      {/* <Button style={{ margin: '15px', boxShadow: '0px 0px', display: 'flex-end', border: '1px' }}>
              <A href={props.hreef}>{'Read More'}</A>
            </Button> */}
    </BetterCard>
  );
}
