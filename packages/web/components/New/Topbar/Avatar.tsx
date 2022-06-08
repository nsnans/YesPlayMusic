import { css, cx } from '@emotion/css'
import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon'
import { resizeImage } from '@/web/utils/common'
import useUser from '@/web/api/hooks/useUser'

const Avatar = ({ className }: { className?: string }) => {
  const navigate = useNavigate()
  const { data: user } = useUser()

  const avatarUrl = user?.profile?.avatarUrl
    ? resizeImage(user?.profile?.avatarUrl ?? '', 'sm')
    : ''

  return (
    <>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          onClick={() => navigate('/login')}
          className={cx(
            'app-region-no-drag rounded-full',
            className || 'h-12 w-12'
          )}
        />
      ) : (
        <div
          onClick={() => navigate('/login')}
          className={cx(
            'rounded-full bg-day-600 p-2.5 dark:bg-night-600',
            className || 'h-12 w-12'
          )}
        >
          <Icon name='user' className='h-7 w-7 text-neutral-500' />
        </div>
      )}
    </>
  )
}

export default Avatar
