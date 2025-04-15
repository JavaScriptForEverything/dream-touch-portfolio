type Props = React.ComponentProps<'div'> & {
  width?: string;
  height?: string;
};

export const EmbeddedMap = ({ width = "100%", height = "200px", ...props }: Props) => {
  return (
    <div {...props}
      style={{ 
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        ...props.style 
      }}
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.39407237779!2d90.392022!3d23.743866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bdbdefbfb1%3A0x107cb0571fefc1ce!2sDream%20Touch%20Architects%20Ltd-%20Best%20Interior%20Design%20Company%20In%20Bangladesh!5e0!3m2!1sen!2sbd!4v1744539541591!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ 
          border: 0,
          position: 'absolute',
          top: 0,
          left: 0
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  );
};

/*
type Props = React.ComponentProps<'div'>


export const EmbeddedMap = (props: Props) => {
  return (
    <div {...props}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.39407237779!2d90.392022!3d23.743866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bdbdefbfb1%3A0x107cb0571fefc1ce!2sDream%20Touch%20Architects%20Ltd-%20Best%20Interior%20Design%20Company%20In%20Bangladesh!5e0!3m2!1sen!2sbd!4v1744539541591!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}



*/