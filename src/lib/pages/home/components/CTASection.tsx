const repoName = 'sozonome/vite-react-ts';

const CTASection = () => {
  return (
    <div>
      <div>
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="https://vercel.com/button" alt="Vercel deploy button" />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div>
        <a
          href={`https://github.com/${repoName}/generate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>
        <a
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </div>
  );
};

export default CTASection;
