import { useCallback, useEffect, useMemo  } from 'react'
import { ModalProps } from '@/components/atoms/Modal'
import { useFormContext } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/atoms/buttons/AbsoluteButton'
import { styled, Typography, useTheme } from '@mui/material'
import { Close } from '@mui/icons-material'
import { CreatePost } from '../types'

const Image = styled('img')({
  width: '100%',
  maxHeight: '15rem',
  objectFit: 'contain'
})

const DropzoneBox = styled('div')({
  position: 'relative'
})

const baseStyle = {
  flex: 1,
  borderWidth: 2,
  borderRadius: 2,
  display: 'grid',
  placeItems: 'center',
  padding: '20px',
  height: '10rem',
  marginBottom: '1rem',
  borderStyle: 'dashed',
  color: '#bdbdbd',
  cursor: 'pointer',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

type Props = {
  image?: CreatePost['image']
  onClose: ModalProps['onClose']
}

export const Dropzone = ({ image, onClose }: Props) => {
  const { palette } = useTheme()
  const { register, unregister, setValue } = useFormContext()

  useEffect(() => {
    register('image')
  }, [register, unregister])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setValue('image', acceptedFiles[0], { shouldValidate: true })
  }, [setValue])

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop, accept: { 'image/*': [] } })

  const style = useMemo(() => ({
    ...{
      ...baseStyle,
      backgroundColor: palette.grey[50],
      borderColor: palette.grey[300],
      color: palette.grey[400]
    },
    ...(isFocused ? { borderColor: palette.primary.light } :
      {}
    ),
    ...(isDragReject ? { borderColor: palette.error.main } : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
  ]);

  const handleDropzone = () => {
    if (image) {
      setValue('image', undefined)
      return;
    }
    
    onClose()
  }

  return (
    <DropzoneBox>
      <Button
        onClick={handleDropzone}
        sx={{
          right: 5,
          top: 5
        }}>
        <Close />
      </Button>
      {
        image ? (
          <div>
            <Image
              src={URL.createObjectURL(image)}
              alt={image.name}
            />
          </div>
        ) : (
          <div {...getRootProps({ style })}>
            <input
              {...getInputProps()}
            />
            <Typography>
              Drag and drop an image.
            </Typography>
          </div>
        )
      }
    </DropzoneBox>
  )

}