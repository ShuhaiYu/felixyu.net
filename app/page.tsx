import Home from "@/components/home";
import { getPhotoUrl, listPhotos } from "@/firebase/db/photo";

export default async function App() {
  const photosPromise = listPhotos("photos");
  const avatarUrlPromise = getPhotoUrl("avatar/felix.jpg");
  const dogUrlPromise = getPhotoUrl("avatar/life-photo.jpg");
  const actionImageUrlPromise = getPhotoUrl("projects/wrenguard.jpeg");
  const webagentUrlPromise = getPhotoUrl("projects/blogspace.png");
  const chatbotUrlPromise = getPhotoUrl("projects/ai-content-generator.png");
  const resumeUrlPromise = getPhotoUrl("Felix_Yu_Resume.pdf");
  const paperUrlPromise = getPhotoUrl("projects/wrenguard.jpeg");

  const [
    photos,
    avatarUrl,
    dogUrl,
    actionImageUrl,
    resumeUrl,
    webagentUrl,
    chatbotUrl,
    paperUrl,
  ] = await Promise.all([
    photosPromise,
    avatarUrlPromise,
    dogUrlPromise,
    actionImageUrlPromise,
    resumeUrlPromise,
    webagentUrlPromise,
    chatbotUrlPromise,
    paperUrlPromise,
  ]);

  return (
    <Home
      actionImageUrl={actionImageUrl}
      avatarUrl={avatarUrl}
      chatbotUrl={chatbotUrl}
      dogUrl={dogUrl}
      paperUrl={paperUrl}
      photos={photos}
      resumeUrl={resumeUrl}
      webagentUrl={webagentUrl}
    />
  );
}
