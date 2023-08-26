//using UnityEditor;
//using UnityEngine;

//namespace BezierCurve
//{
//    [CustomEditor(typeof(BezierCollider2D))]
//    public class BezierCollider2DEditor : Editor
//    {
//        BezierCollider2D bezierCollider;
//        EdgeCollider2D edgeCollider;

//        int lastPointsQuantity = 0;
//        Vector2 lastFirstPoint = Vector2.zero;
//        Vector2 lastHandlerFirstPoint = Vector2.zero;
//        Vector2 lastSecondPoint = Vector2.zero;
//        Vector2 lastHandlerSecondPoint = Vector2.zero;

//        public override void OnInspectorGUI()
//        {
//            bezierCollider = (BezierCollider2D)target;

//            edgeCollider = bezierCollider.GetComponent<EdgeCollider2D>();
//            //
//            // if (edgeCollider.hideFlags != HideFlags.HideInInspector)
//            // {
//            //     edgeCollider.hideFlags = HideFlags.HideInInspector;
//            // }

//            if (edgeCollider == null) return;
//            bezierCollider.pointsQuantity = EditorGUILayout.IntField("curve points", bezierCollider.pointsQuantity,
//                GUILayout.MinWidth(100));
//            bezierCollider.firstPoint = EditorGUILayout.Vector2Field("first point", bezierCollider.firstPoint,
//                GUILayout.MinWidth(100));
//            bezierCollider.handlerFirstPoint = EditorGUILayout.Vector2Field("handler first Point",
//                bezierCollider.handlerFirstPoint, GUILayout.MinWidth(100));
//            bezierCollider.secondPoint = EditorGUILayout.Vector2Field("second point", bezierCollider.secondPoint,
//                GUILayout.MinWidth(100));
//            bezierCollider.handlerSecondPoint = EditorGUILayout.Vector2Field("handler secondPoint",
//                bezierCollider.handlerSecondPoint, GUILayout.MinWidth(100));

//            EditorUtility.SetDirty(bezierCollider);

//            if (bezierCollider.pointsQuantity <= 0 || bezierCollider.firstPoint.Equals(bezierCollider.secondPoint) ||
//                (lastPointsQuantity == bezierCollider.pointsQuantity && lastFirstPoint == bezierCollider.firstPoint &&
//                 lastHandlerFirstPoint == bezierCollider.handlerFirstPoint &&
//                 lastSecondPoint == bezierCollider.secondPoint &&
//                 lastHandlerSecondPoint == bezierCollider.handlerSecondPoint)) return;

//            lastPointsQuantity = bezierCollider.pointsQuantity;
//            lastFirstPoint = bezierCollider.firstPoint;
//            lastHandlerFirstPoint = bezierCollider.handlerFirstPoint;
//            lastSecondPoint = bezierCollider.secondPoint;
//            lastHandlerSecondPoint = bezierCollider.handlerSecondPoint;
//            edgeCollider.points = bezierCollider.Calculate2DPoints();
//        }

//        private void OnSceneGUI()
//        {
//            if (bezierCollider == null) return;
//            Handles.color = Color.grey;

//            var bezierPosition = bezierCollider.transform.position;
//            Handles.DrawLine(bezierPosition + (Vector3)bezierCollider.handlerFirstPoint,
//                bezierPosition + (Vector3)bezierCollider.firstPoint);
//            Handles.DrawLine(bezierPosition + (Vector3)bezierCollider.handlerSecondPoint,
//                bezierPosition + (Vector3)bezierCollider.secondPoint);

//            bezierCollider.firstPoint = Handles.FreeMoveHandle(
//                bezierPosition + (Vector3)bezierCollider.firstPoint, Quaternion.identity,
//                0.04f * HandleUtility.GetHandleSize(bezierPosition +
//                                                    (Vector3)bezierCollider.firstPoint), Vector3.zero,
//                Handles.DotHandleCap) - bezierPosition;
//            bezierCollider.secondPoint = Handles.FreeMoveHandle(
//                bezierPosition + (Vector3)bezierCollider.secondPoint, Quaternion.identity,
//                0.04f * HandleUtility.GetHandleSize(bezierPosition +
//                                                    (Vector3)bezierCollider.secondPoint), Vector3.zero,
//                Handles.DotHandleCap) - bezierPosition;
//            bezierCollider.handlerFirstPoint = Handles.FreeMoveHandle(
//                bezierPosition + (Vector3)bezierCollider.handlerFirstPoint,
//                Quaternion.identity,
//                0.04f * HandleUtility.GetHandleSize(bezierPosition +
//                                                    (Vector3)bezierCollider.handlerFirstPoint), Vector3.zero,
//                Handles.DotHandleCap) - bezierPosition;
//            bezierCollider.handlerSecondPoint = Handles.FreeMoveHandle(
//                bezierPosition + (Vector3)bezierCollider.handlerSecondPoint,
//                Quaternion.identity,
//                0.04f * HandleUtility.GetHandleSize(bezierPosition +
//                                                    (Vector3)bezierCollider.handlerSecondPoint), Vector3.zero,
//                Handles.DotHandleCap) - bezierPosition;

//            if (GUI.changed)
//            {
//                EditorUtility.SetDirty(target);
//            }
//        }
//    }
//}