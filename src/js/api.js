export const SanitizeApiResponseAsync = async (response) => {
  if (response.status === 401 || response.status === 0) {
    location.reload(true);
  }

  const data =
    response.status === 404 ? "AnErrorOccurred" : await response.json();
  return {
    isError: !response.ok,
    result: data,
  };
};
