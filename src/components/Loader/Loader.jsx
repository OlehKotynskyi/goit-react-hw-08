import ContentLoader from 'react-content-loader';

const Loader = () => {
   return (
      <div>
         <FadingLoaderCard1 />
         <FadingLoaderCard2 />
      </div>
   );
};

const FadingLoaderCard1 = () => {
   return (
      <ContentLoader width={400} height={40} backgroundColor="#ababab" foregroundColor="#fafafa">
         <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
         <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
         <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
      </ContentLoader>
   );
};

const FadingLoaderCard2 = () => {
   return (
      <ContentLoader width={400} height={40} backgroundColor="#bfbfbf" foregroundColor="#fafafa">
         <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
         <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
         <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
      </ContentLoader>
   );
};

export const LoaderPage = props => {
   return (
      <ContentLoader
         viewBox="0 0 400 160"
         height={160}
         width={400}
         backgroundColor="transparent"
         {...props}
      >
         <circle cx="150" cy="86" r="8" />
         <circle cx="194" cy="86" r="8" />
         <circle cx="238" cy="86" r="8" />
      </ContentLoader>
   );
};

export default Loader;
