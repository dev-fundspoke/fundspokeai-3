import { Box, keyframes, styled } from '@mui/material'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const GlassContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: 'rgba(229, 224, 220, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: '1px solid rgba(93, 155, 155, 0.5)',
  boxShadow: `
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 -2px 4px rgba(93, 155, 155, 0.3),
    0 -4px 8px rgba(93, 155, 155, 0.2),
    inset 0 0 0 1px rgba(93, 155, 155, 0.4)
  `,
  padding: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
    borderRadius: '12px 12px 0 0',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transform: 'translateX(-100%)',
    animation: `${shimmer} 4s infinite`,
  },

  '&:hover': {
    transform: 'perspective(800px) rotateX(5deg) rotateY(5deg) scale(1.02)',
    boxShadow: `
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 6px 20px rgba(0, 0, 0, 0.1),
      0 -2px 4px rgba(93, 155, 155, 0.3),
      0 -4px 8px rgba(93, 155, 155, 0.2),
      inset 0 0 0 1px rgba(93, 155, 155, 0.4),
      0 0 15px #00FFFF
    `,
  },
}))