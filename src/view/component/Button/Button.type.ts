export interface IProps {
  icon?: React.ReactNode
  onclick: (ev: React.MouseEvent<any>) => void
  className?: string
  round?: boolean
  loading?: boolean
  link?: string
  disable: boolean
  variant: 'primary' | 'secondary' | 'ghost'
}
