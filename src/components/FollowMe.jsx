export function FollowMe({ variant = 'desktop' }) {
  const socialLinks = [
    {
      icon: 'fa-facebook-f',
      url: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: 'fa-instagram',
      url: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: 'fa-linkedin-in',
      url: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: 'fa-threads',
      url: 'https://threads.net',
      label: 'Threads',
    },
    {
      icon: 'fa-github',
      url: 'https://github.com',
      label: 'GitHub',
    },
  ];

  const containerClass =
    variant === 'mobile' ? 'follow-links-box-sm' : 'follow-links-box';

  return (
    <div className={variant === 'mobile' ? 'follow-me-sm' : 'follow-me'}>
      <h2>Follow Me</h2>
      <div className={containerClass}>
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-box"
            aria-label={`Visit ${social.label}`}
          >
            <i className={`fa-brands ${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
