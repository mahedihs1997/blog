import Box from '@components/Box';
import Button from '@components/Button';
import ExternalLink from '@components/ExternalLink';
import List from '@components/List';
import React from 'react';

import {
  ImageWrapper,
  LeftColumn,
  RightColumn,
  Wrapper,
} from './ProjectCard.styles';

interface ProjectCardProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, description, keywords, slug, image, github, demo } = props;

  return (
    <Wrapper>
      <LeftColumn>
        <h1>{title}</h1>
        <List>
          {keywords.map((keyword, index) => (
            <li key={`keyword-${index}`}>{keyword}</li>
          ))}
        </List>
        <Box mb={40} />
        <p>{description}</p>
        {github && <ExternalLink href={github}>{github}</ExternalLink>}
        <Box mb={10} />
        {demo && <ExternalLink href={demo}>{demo}</ExternalLink>}
        <Box mb={40} />
        <Button href={`/project/[slug]`} as={`/project/${slug}`}>
          see this project
        </Button>
      </LeftColumn>
      <RightColumn>
        <ImageWrapper>
          <img src={image} aria-hidden alt="Project Image" width="100%" />
        </ImageWrapper>
      </RightColumn>
    </Wrapper>
  );
};

export default ProjectCard;