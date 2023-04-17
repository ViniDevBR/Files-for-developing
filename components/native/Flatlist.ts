const renderItem = useCallback(
  ({ item: request }: ListRenderItemInfo<YOUR_TYPE>) => (
    <RequestCard
      {...request}
    />
  ),[])


<FlatList
  data={requestList}
  style={{ paddingHorizontal: 4 }}
  contentContainerStyle={{ paddingBottom: 100 }}
  keyExtractor={item => item.Handle.toString()}
  refreshing={isLoading}
  onRefresh={getInfosFromServer}
  initialNumToRender={10}
  renderItem={renderItem}
  getItemLayout={(data, index) => ({ length: ITEM_HEIGHT ,offset: ITEM_HEIGHT * index, index })}
/>
