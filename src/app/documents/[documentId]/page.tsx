import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: number }>;
}
export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <div>
      Document ID: {documentId}
      <Editor />
    </div>
  );
}
